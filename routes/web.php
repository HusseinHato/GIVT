<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use Laravel\Socialite\Facades\Socialite;
use App\Http\Controllers\SocialController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\KampanyeController;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\DonasiController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [HomeController::class, 'index'])->name('hal.utama');

//Google Auth

Route::get('auth/redirect', [SocialController::class, 'googleRedirect'])->name('google.login');
Route::get('auth/callback', [SocialController::class, 'googleCallback']);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::resource('kampanye', KampanyeController::class)
    ->only(['index', 'store', 'create'])
    ->middleware(['auth', 'verified']);

Route::resource('post', PostController::class)
    ->only(['index', 'store', 'create'])
    ->middleware(['auth', 'verified']);

Route::resource('donasi', DonasiController::class)
    ->only(['store'])
    ->middleware(['auth', 'verified']);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::post('/upload', [KampanyeController::class, 'upload'])->name('uploadgambar');
    // Route::get('/donasi', [DonasiController::class, 'create'])->name('donasi.create');
    Route::get('/kampanye/{kampanye:slug}/donasi', [DonasiController::class, 'create'])->name('donasi.create');
    Route::get('/donasi/{donasi:id}', [DonasiController::class, 'show'])->name('donasi.show');
});

Route::get('/kampanye/{kampanye:slug}', [KampanyeController::class, 'show'])->name('kampanye.show');
Route::get('/kampanye/{kampanye:slug}/beritaterkait', [KampanyeController::class, 'showBeritaTerkait'])->name('kampanye.showbt');
Route::get('/post/{post:slug}', [PostController::class, 'show'])->name('post.show');




require __DIR__.'/auth.php';
