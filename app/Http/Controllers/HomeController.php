<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Response;
use Inertia\Inertia;
use App\Models\Kampanye;
use App\Models\Post;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    //
    public function index()
    {
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'kampanyes' => Kampanye::with('user')->where('terverifikasi', true)->limit(3)->get()->map(function($kampanye) {
                return [
                    'user_id' => $kampanye->user_id,
                    'id' => $kampanye->id,
                    'judul' => $kampanye->judul,
                    'target' => $kampanye->target,
                    'terverifikasi' => $kampanye->terverifikasi,
                    'show_url' => route('kampanye.show', $kampanye),
                    'tgl_berakhir' => $kampanye->tgl_berakhir,
                    'gambar' => $kampanye->gambar,
                    'kategori' => $kampanye->kategori,
                    'dana_terkumpul' => $kampanye->donasis()->where('status', 'Paid')->sum('jumlah'),
                ];
            }),
            'posts' => Post::latest()->limit(3)->get()->map(function($post) {
                return [
                    'judul' => $post->judul,
                    'gambar' => $post->gambar,
                    'excerpt' => $post->createExcerpt($post->body, 35),
                    'show_url' => route('post.show.user', $post),
                    'created_at' => $post->created_at,
                ];
            })
        ]);
    }
}
