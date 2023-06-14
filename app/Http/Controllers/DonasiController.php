<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Response;
use App\Models\Kampanye;
use Inertia\Inertia;
use App\Http\Requests\FormDonasiRequest;
use Illuminate\Support\Facades\Auth;
use App\Models\Donasi;

class DonasiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        //
        $userId = Auth::id();
        return Inertia::render('Donasi/IndexDonasi', [
            //
            'donasis' => Donasi::with('kampanye')->where('user_id', $userId)->get()->map(function($donasi) {
                return [
                    'id' => $donasi->id,
                    'judul' => $donasi->kampanye->judul,
                    'show_url' => route('donasi.show', $donasi),
                    'jumlah' => $donasi->jumlah,
                    'gambar' => $donasi->kampanye->gambar,
                    'status' => $donasi->status,
                    'kategori' => $donasi->kampanye->kategori
                ];
            })
        ]);
    }

    public function indexAdmin(): Response
    {
        //
        $userId = Auth::id();
        return Inertia::render('Admin/IndexDonasi', [
            //
            'donasis' => Donasi::with('kampanye')->get()->map(function($donasi) {
                return [
                    'id' => $donasi->id,
                    'judul' => $donasi->kampanye->judul,
                    'show_url' => route('admin.donasi.show', $donasi),
                    'jumlah' => $donasi->jumlah,
                    'gambar' => $donasi->kampanye->gambar,
                    'status' => $donasi->status,
                    'kategori' => $donasi->kampanye->kategori
                ];
            })
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Kampanye $kampanye)
    {
        // dd($request);
        //
        if(Auth::user()->id == $kampanye->user_id){
            return redirect(route('kampanye.show', $kampanye));
        }

        if(!$kampanye->aktif){ 
            return redirect(route('kampanye.show', $kampanye));
        }

        return Inertia::render('Donasi/CreateDonasi', [
            //
            'kampanye' => $kampanye
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(FormDonasiRequest $request): RedirectResponse
    {
        //
        $validated = $request->validated();

        $donasi = $request->user()->donasis()->create($validated);

        \Midtrans\Config::$serverKey = config('midtrans.server_key');
        // Set to Development/Sandbox Environment (default). Set to true for Production Environment (accept real transaction).
        \Midtrans\Config::$isProduction = false;
        // Set sanitization on (default)
        \Midtrans\Config::$isSanitized = true;
        // Set 3DS transaction for credit card to true
        \Midtrans\Config::$is3ds = true;

        $params = array(
            'transaction_details' => array(
                'order_id' => $donasi->uuid,
                'gross_amount' => $donasi->jumlah
            )
        );

        $snapToken = \Midtrans\Snap::getSnapToken($params);

        $donasi->update([
            'snaptoken' => $snapToken
        ]);

        return redirect(route('donasi.show', $donasi));
    }

    /**
     * Display the specified resource.
     */
    public function show(Donasi $donasi): Response
    {
        //
        return Inertia::render('Donasi/ShowDonasi', [
            //
            'donasi' => $donasi,
            'kampanye' => $donasi->kampanye()->first(),
            'show_url' => route('kampanye.show', $donasi->kampanye()->first())
        ]);
    }

    public function showAdmin(Donasi $donasi): Response
    {
        //
        return Inertia::render('Admin/ShowDonasi', [
            //
            'donasi' => $donasi,
            'kampanye' => $donasi->kampanye()->first(),
            'show_url' => route('admin.kampanye.show', $donasi->kampanye()->first())
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id): Response
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id): RedirectResponse
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id): RedirectResponse
    {
        //
    }

    public function callback(Request $request)
    {
        //
        $serverkey = config('midtrans.server_key');
        $hashed = hash("sha512", $request->order_id.$request->status_code.$request->gross_amount.$serverkey);
        if($hashed == $request->signature_key){
            if($request->transaction_status == 'settlement' || $request->transaction_status == 'capture'){
                $order = Donasi::where('uuid', $request->order_id)->first();
                $order->update(['status' => 'Paid']);
                // $kampanye = $order->kampanye()->first();
                // $currentamount = $kampanye->dana_terkumpul;
                // $addedamount = $request->gross_amount;
                // $summedamount = $currentamount + $addedamount;
                // $kampanye->update(['dana_terkumpul' => $summedamount]);
            }
        }
    }
}
