<?php

namespace App\Http\Controllers;

use App\Models\Kampanye;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class KampanyeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('Kampanye/Index', [
            //
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        // dd($request);

        $validated = $request->validate([
            'deskripsi' => 'required',
            'judul' => 'required|max:255',
            'target' => 'required|integer',
            'tgl_mulai' => 'required|date',
            'tgl_berakhir' => 'required|date'
        ]);

        $request->user()->kampanyes()->create($validated);


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
