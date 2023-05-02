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
use App\Models\User;
use Carbon\Carbon;
use App\Http\Requests\FormBeritaRequest;
use Illuminate\Support\Str;

class PostController extends Controller
{
    private function createExcerpt($content, $length) {
        // Strip all HTML tags
        $content = preg_replace('/[\x00-\x1F\x7F-\xFF]/', '', strip_tags($content));

        // Limit the excerpt to the specified length
        $excerpt = Str::limit($content, $length);

        return $excerpt;
    }

    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        //
        $userId = Auth::id();
        return Inertia::render('Post/IndexPost', [
            'posts' => Post::with('user:id')->get()->where('user_id', $userId)->map(function($post) {
                return [
                    'user_id' => $post->user_id,
                    'user_name' => $post->user->name,
                    'judul' => $post->judul,
                    'gambar' => $post->gambar,
                    'excerpt' => $this->createExcerpt($post->body, 100),
                    'show_url' => route('post.show', $post),
                    'created_at' => $post->created_at
                ];
            })
        ]);
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
                    'tgl_berkahir' => $kampanye->tgl_berakhir,
                    'created_at' => $kampanye->created_at->format('Y-m-d H:i:s'),
                ];
            })
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(FormBeritaRequest $request): RedirectResponse
    {
        //
        $validated = $request->validated();

        $validated['gambar'] = $request->file('gambar')->store('gambar-berita');

        $request->user()->posts()->create($validated);

        return redirect(route('post.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post): Response
    {
        return Inertia::render('Post/ShowPost', [
            //
            // dd($post),
            // dd($post->with('user', 'kampanye')->where('id', $post->id)->first()),
            'post' => $post->with('user', 'kampanye')->where('id', $post->id)->first()
            // 'post' => $post
            // 'user' => User::where('id', $post->user_id)->get()
        ]);
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
