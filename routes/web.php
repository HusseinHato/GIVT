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
use App\Http\Controllers\Admin\AdminAuthController;
use App\Http\Controllers\Admin\AdminController;

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

Route::middleware('redirectadmin')->group(function () {

    Route::get('/', [HomeController::class, 'index'])->name('hal.utama');

    //Google Auth

    Route::get('auth/redirect', [SocialController::class, 'googleRedirect'])->name('google.login');
    Route::get('auth/callback', [SocialController::class, 'googleCallback']);

    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->middleware(['auth', 'verified'])->name('dashboard');

    Route::resource('kampanye', KampanyeController::class)
        ->only(['index', 'store', 'create','update'])
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
        Route::get('/donasi', [DonasiController::class, 'index'])->name('donasi.index');
        Route::get('/kampanye/diikuti', [KampanyeController::class, 'kampdiikuti'])->name('kampanye.diikuti');
        Route::get('/kampanye/{kampanye:slug}/edit', [KampanyeController::class, 'edit'])->name('kampanye.edit');
        Route::post('/kampanye/{kampanye:slug}/edit', [KampanyeController::class, 'update'])->name('kampanye.update');
    });


    // Guest can access this route
    Route::get('/kampanye/{kampanye:slug}', [KampanyeController::class, 'show'])->name('kampanye.show');
    Route::get('/kampanye/{kampanye:slug}/beritaterkait', [KampanyeController::class, 'showBeritaTerkait'])->name('kampanye.showbt');
    Route::get('/post/{post:slug}', [PostController::class, 'show'])->name('post.show.user');
    Route::get('/admin/login', [AdminAuthController::class, 'getLogin'])->name('adminLogin');
    Route::post('/admin/login', [AdminAuthController::class, 'postLogin'])->name('adminLoginPost');
    Route::get('/semuakampanye', [KampanyeController::class, 'indexAll'])->name('kampanye.semua');
    Route::get('/semuaberita', [PostController::class, 'indexAll'])->name('post.semua');
    Route::post('/carikampanye', [KampanyeController::class, 'pencarian'])->name('kampanye.cari');
    Route::get('/carikampanye', [KampanyeController::class, 'tampilkanpencarian'])->name('kampanye.hasilcari');
    Route::get('/pendidikan', [KampanyeController::class, 'pendidikan'])->name('kampanye.pendidikan');
    Route::get('/kemanusiaan', [KampanyeController::class, 'kemanusiaan'])->name('kampanye.kemanusiaan');

});


Route::group(['prefix' => 'admin'], function () {

    Route::group(['middleware' => 'adminauth'], function () {
        Route::get('/dashboard', [AdminController::class, 'dashboard'])->name('adminDashboard');

        Route::resource('post', PostController::class)
        ->only(['index', 'store','create'])
        ->middleware(['adminauth']);

        Route::get('/post/edit/{post:slug}', [PostController::class, 'edit'])->name('post.edit');
        Route::post('/post/edit/{post:slug}', [PostController::class, 'update'])->name('post.update');
        Route::get('/post/show/{post:slug}', [PostController::class, 'showAdmin'])->name('post.show');
        Route::delete('/post/delete/{post:id}', [PostController::class, 'destroy'])->name('post.destroy');

        Route::get('/kampanye', [KampanyeController::class, 'indexAdmin'])->name('admin.kampanye.index');
        Route::get('/kampanye/{kampanye:id}', [KampanyeController::class, 'adminshow'])->name('admin.kampanye.show');
        Route::patch('/kampanye/{kampanye:id}', [KampanyeController::class, 'konfirmasi'])->name('admin.kampanye.konfirmasi');

        Route::get('/donasi', [DonasiController::class, 'indexAdmin'])->name('admin.donasi.index');
        Route::get('/donasi/{donasi:id}', [DonasiController::class, 'showAdmin'])->name('admin.donasi.show');

        Route::post('/logout', [AdminAuthController::class, 'adminlogout'])->name('admin.logout');
    });
});



require __DIR__.'/auth.php';
