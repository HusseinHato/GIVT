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
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Kampanye $kampanye): Response
    {
        // dd($request);
        //
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
                'order_id' => $donasi->id,
                'gross_amount' => $donasi->jumlah
            ),
            'customer_details' => array(
                'email' => Auth::user()->email,
            ),
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
            'donasi' => $donasi
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
}
