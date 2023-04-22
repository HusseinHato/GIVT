<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Auth;
use App\Models\Kampanye;

class PostController extends Controller
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
    public function create(): Response
    {
        $userId = Auth::id();
        //
        return Inertia::render('Post/CreatePost', [
            //
            'kampanyes' => Kampanye::with('user:id')->get()->where('user_id', $userId)->map(function($kampanye) {
                return [
                    'user_id' => $kampanye->user_id,
                    'id' => $kampanye->id,
                    'judul' => $kampanye->judul,
                    'target' => $kampanye->target,
                    'terverifikasi' => $kampanye->terverifikasi,
                    'show_url' => route('kampanye.show', $kampanye),
                    'tgl_berkahir' => $kampanye->tgl_berakhir
                ];
            })
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePostRequest $request): RedirectResponse
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post): Response
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post): Response
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePostRequest $request, Post $post): RedirectResponse
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post): RedirectResponse
    {
        //
    }
}
