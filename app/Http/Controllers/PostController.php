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
use App\Http\Requests\FormUpdateBeritaRequest;
use App\Http\Requests\FormBeritaRequest;
use Illuminate\Support\Str;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        //
        $userId = Auth::guard('admin')->user()->id;
        // dd();
        return Inertia::render('Admin/LihatBerita', [
            'posts' => Post::with('admin:id')->where('admin_id', $userId)->get()->map(function($post) {
                return [
                    'id' => $post->id,
                    'user_id' => $post->admin_id,
                    'judul' => $post->judul,
                    'gambar' => $post->gambar,
                    'excerpt' => $post->createExcerpt($post->body, 35),
                    'show_url' => route('post.show', $post),
                    'edit_url' => route('post.edit', $post),
                    // 'delete_url' => route('post.delete', $post),
                    'created_at' => $post->created_at,
                    'slug' => $post->slug
                ];
            })
        ]);
    }

    public function indexAll(): Response
    {
        //
        // $userId = Auth::guard('admin')->user()->id;
        // dd();
        return Inertia::render('Post/IndexAllPost', [
            'posts' => Post::with('admin')->get()->map(function($post) {
                return [
                    'id' => $post->id,
                    'user_id' => $post->admin_id,
                    'judul' => $post->judul,
                    'gambar' => $post->gambar,
                    'excerpt' => $post->createExcerpt($post->body, 35),
                    'show_url' => route('post.show.user', $post),
                    // 'edit_url' => route('post.edit', $post),
                    // 'delete_url' => route('post.delete', $post),
                    'created_at' => $post->created_at,
                    'slug' => $post->slug
                ];
            })
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        //
        return Inertia::render('Admin/BuatBerita', [
            //
            'kampanyes' => Kampanye::all()->map(function($kampanye) {
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

        // dd($validated);

        $validated['gambar'] = $request->file('gambar')->store('gambar-berita');

        $request->user('admin')->posts()->create($validated);

        return redirect(route('post.index'))->with('message', 'Berita Berhasil dibuat');
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
            'post' => $post->with('admin', 'kampanye')->where('id', $post->id)->first(),
            'show_url' => route('kampanye.show', $post->kampanye()->first())
            // 'post' => $post
            // 'user' => User::where('id', $post->user_id)->get()
        ]);
    }

    public function showAdmin(Post $post): Response
    {
        return Inertia::render('Admin/ShowBerita', [
            //
            // dd($post),
            // dd($post->with('user', 'kampanye')->where('id', $post->id)->first()),
            'post' => $post->with('admin', 'kampanye')->where('id', $post->id)->first(),
            'show_url' => route('admin.kampanye.show', $post->kampanye()->first())
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
        return Inertia::render('Admin/EditBerita', [
            //
            'berita' => $post->with('kampanye')->where('id', $post->id)->first(),
            'kampanyes' => Kampanye::all()->map(function($kampanye) {
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
     * Update the specified resource in storage.
     */
    public function update(FormUpdateBeritaRequest $request, Post $post): RedirectResponse
    {
        //

        $validated = $request->validated();

        // dd($post);

        // dd($request);

        $post->judul = $validated['judul'];
        $post->body = $validated['body'];
        if ($validated['gambar']){
            $validated['gambar'] = $request->file('gambar')->store('gambar-berita');
            $post->gambar = $validated['gambar'];
        }
        if ($validated['kampanye_id']){
            $post->kampanye_id = $validated['kampanye_id'];
        }

        $post->save();

        return redirect(route('post.index'))->with('message', 'Berita Berhasil diubah');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post): RedirectResponse
    {
        //
        // dd($post);

        $post->delete();

        return redirect(route('post.index'));
    }
}
