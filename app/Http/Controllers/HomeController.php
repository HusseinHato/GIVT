<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Response;
use Inertia\Inertia;
use App\Models\Kampanye;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    private function createExcerpt($content, $length) {
        // Strip all HTML tags
        $content = preg_replace('/[\x00-\x1F\x7F-\xFF]/', '', strip_tags($content));

        // Limit the excerpt to the specified length
        $excerpt = Str::limit($content, $length);

        return $excerpt;
    }

    //
    public function index()
    {
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'kampanyes' => Kampanye::with('user')->where('terverifikasi', true)->get()->map(function($kampanye) {
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
            })
        ]);
    }
}
