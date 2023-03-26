<?php

namespace App\Http\Controllers;

use App\Models\Kampanye;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Carbon\Carbon;
use App\Http\Requests\FormKampanyeRequest;


class KampanyeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('Kampanye/IndexKampanye', [
            //
            'kampanyes' => Kampanye::with('user:id,name')->latest()->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        //
        return Inertia::render('Kampanye/CreateKampanye', [
            //

        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(FormKampanyeRequest $request): RedirectResponse
    {
        // dd($request);

        // $validated = $request->validate([
        //     'deskripsi' => 'required',
        //     'judul' => 'required|max:255',
        //     'target' => 'required|integer|gt:0',
        //     'tgl_mulai' => 'required|date',
        //     'tgl_berakhir' => 'required|integer|gt:0'
        // ]);

        $validated = $request->validated();

        // dd($validated);

        $tglTemp = Carbon::createFromFormat('Y-m-d H:i:s',  $validated['tgl_mulai']);;
        $lamaHari = $validated['tgl_berakhir'];
        $hasil = collect($validated);
        $tgl_berakhir = $tglTemp->addDays($lamaHari)->toDateTimeString();

        // dd($validated['tgl_mulai']);
        // dd($tgl_berakhir);

        // dd($hasil);

        $hasilakhir = $hasil->merge(['tgl_berakhir' => $tgl_berakhir]);

        // dd($hasilakhir);

        $request->user()->kampanyes()->create($hasilakhir->toArray());


        return redirect(route('kampanye.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Kampanye $kampanye): Response
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Kampanye $kampanye): Response
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Kampanye $kampanye): RedirectResponse
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Kampanye $kampanye): RedirectResponse
    {
        //
    }
}