<?php

namespace App\Http\Controllers;

use App\Models\Kampanye;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Carbon\Carbon;
use App\Http\Requests\FormKampanyeRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use App\Models\Post;
use App\Models\User;
use App\Http\Requests\FormUpdateKampanyeRequest;


class KampanyeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $userId = Auth::id();
        return Inertia::render('Kampanye/IndexKampanye', [

            // 'kampanyes' => Kampanye::all()->map(function($kampanye) {
            //     return [
            //         'id' => $kampanye->id,
            //         'judul' => $kampanye->judul,
            //         'target' => $kampanye->target,
            //         'terverifikasi' => $kampanye->terverifikasi,
            //         'show_url' => route('kampanye.show', $kampanye),
            //     ];
            // }),

            'kampanyes' => Kampanye::with('user:id')->where('user_id', $userId)->get()->map(function($kampanye) {
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
                    'dana_terkumpul' => $kampanye->donasis()->where('status', 'Paid')->sum('jumlah')
                ];
            })
        ]);
    }

    public function indexAll(): Response
    {
        // $userId = Auth::id();
        return Inertia::render('Kampanye/IndexAllKampanye', [

            // 'kampanyes' => Kampanye::all()->map(function($kampanye) {
            //     return [
            //         'id' => $kampanye->id,
            //         'judul' => $kampanye->judul,
            //         'target' => $kampanye->target,
            //         'terverifikasi' => $kampanye->terverifikasi,
            //         'show_url' => route('kampanye.show', $kampanye),
            //     ];
            // }),

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
                    'dana_terkumpul' => $kampanye->donasis()->where('status', 'Paid')->sum('jumlah')
                ];
            })
        ]);
    }

    public function pendidikan(): Response
    {
        // $userId = Auth::id();
        return Inertia::render('Kampanye/IndexAllKampanye', [

            'kampanyes' => Kampanye::with('user')->where('terverifikasi', true)->where('kategori', 'Pendidikan')->get()->map(function($kampanye) {
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
                    'dana_terkumpul' => $kampanye->donasis()->where('status', 'Paid')->sum('jumlah')
                ];
            })
        ]);
    }

    public function kemanusiaan(): Response
    {
        // $userId = Auth::id();
        return Inertia::render('Kampanye/IndexAllKampanye', [

            'kampanyes' => Kampanye::with('user')->where('terverifikasi', true)->where('kategori', 'Kemanusiaan')->get()->map(function($kampanye) {
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
                    'dana_terkumpul' => $kampanye->donasis()->where('status', 'Paid')->sum('jumlah')
                ];
            })
        ]);
    }

    // public function tampilkanpencarian(Kampanye $kampanye): Response
    // {
    //     // $userId = Auth::id();
    //     return Inertia::render('Kampanye/IndexAllKampanye', [

    //         'kampanyes' => $kampanye->map(function($kampanye) {
    //             return [
    //                 'user_id' => $kampanye->user_id,
    //                 'id' => $kampanye->id,
    //                 'judul' => $kampanye->judul,
    //                 'target' => $kampanye->target,
    //                 'terverifikasi' => $kampanye->terverifikasi,
    //                 'show_url' => route('kampanye.show', $kampanye),
    //                 'tgl_berakhir' => $kampanye->tgl_berakhir,
    //                 'gambar' => $kampanye->gambar,
    //                 'kategori' => $kampanye->kategori,
    //                 'dana_terkumpul' => $kampanye->donasis()->where('status', 'Paid')->sum('jumlah')
    //             ];
    //         })
    //     ]);
    // }

    public function pencarian(Request $request)
    {
        // $userId = Auth::id();

        // dd($request);

        $pencarian = $request->search;

        $kampanyes = Kampanye::where('judul', 'like', '%'.$pencarian.'%')->where('terverifikasi', true)->get();

        // return redirect(route('kampanye.hasilcari', $pencarian));

        return Inertia::render('Kampanye/IndexAllKampanye', [

            'kampanyes' => $kampanyes->map(function($kampanye) {
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
                    'dana_terkumpul' => $kampanye->donasis()->where('status', 'Paid')->sum('jumlah')
                ];
            })
        ]);
    }

    public function indexAdmin(): Response
    {
        // $userId = Auth::id();
        return Inertia::render('Admin/IndexKampanye', [

            // 'kampanyes' => Kampanye::all()->map(function($kampanye) {
            //     return [
            //         'id' => $kampanye->id,
            //         'judul' => $kampanye->judul,
            //         'target' => $kampanye->target,
            //         'terverifikasi' => $kampanye->terverifikasi,
            //         'show_url' => route('kampanye.show', $kampanye),
            //     ];
            // }),

            'kampanyes' => Kampanye::all()->map(function($kampanye) {
                return [
                    'user_id' => $kampanye->user_id,
                    'id' => $kampanye->id,
                    'judul' => $kampanye->judul,
                    'target' => $kampanye->target,
                    'terverifikasi' => $kampanye->terverifikasi,
                    'show_url' => route('admin.kampanye.show', $kampanye),
                    'tgl_berakhir' => $kampanye->tgl_berakhir,
                    'gambar' => $kampanye->gambar,
                    'kategori' => $kampanye->kategori,
                    'dana_terkumpul' => $kampanye->donasis()->where('status', 'Paid')->sum('jumlah')
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
        return Inertia::render('Kampanye/CreateKampanye', [
            //

        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(FormKampanyeRequest $request): RedirectResponse
    {

        $validated = $request->validated();

        $validated['gambar'] = $request->file('gambar')->store('gambar-kampanye');

        // dd($validated);

        // $tglTemp = Carbon::createFromFormat('Y-m-d H:i:s',  $validated['tgl_mulai']);;
        // $lamaHari = $validated['tgl_berakhir'];
        // $hasil = collect($validated);
        // $tgl_berakhir = $tglTemp->addDays($lamaHari)->toDateTimeString();

        // dd($validated['tgl_mulai']);
        // dd($tgl_berakhir);

        // dd($hasil);

        // $hasilakhir = $hasil->merge(['tgl_berakhir' => $tgl_berakhir]);

        // dd($hasilakhir);

        $request->user()->kampanyes()->create($validated);


        return redirect(route('kampanye.index'))->with('message','Kampanye Berhasil dibuat');
    }

    /**
     * Display the specified resource.
     */
    public function show(Kampanye $kampanye): Response
    {
        //
        return Inertia::render('Kampanye/ShowKampanye', [
            //
            'kampanye' => $kampanye,
            'dana_terkumpul' => $kampanye->donasis()->where('status', 'Paid')->sum('jumlah'),
            'posts' => $kampanye->posts()->get()->map(function($post) {
                return [
                    'user_id' => $post->admin_id,
                    'user_name' => $post->admin->name,
                    'judul' => $post->judul,
                    'gambar' => $post->gambar,
                    'excerpt' => $post->createExcerpt($post->body, 35),
                    'show_url' => route('post.show.user', $post),
                    'created_at' => $post->created_at
                ];
            }),
            'donasis' => $kampanye->donasis()->where('status','paid')->get()
        ]);
    }

    public function adminshow(Kampanye $kampanye): Response
    {
        //
        return Inertia::render('Admin/ShowKampanye', [
            //
            'kampanye' => $kampanye,
            'dana_terkumpul' => $kampanye->donasis()->where('status', 'Paid')->sum('jumlah'),
            // 'posts' => $kampanye->posts()->get()->map(function($post) {
            //     return [
            //         'user_id' => $post->user_id,
            //         'user_name' => $post->user->name,
            //         'judul' => $post->judul,
            //         'gambar' => $post->gambar,
            //         'excerpt' => $post->createExcerpt($post->body, 100),
            //         // 'show_url' => route('post.show', $post),
            //         'created_at' => $post->created_at
            //     ];
            // }),
            'donasis' => $kampanye->donasis()->where('status','paid')->get()
        ]);
    }

    public function showBeritaTerkait(Kampanye $kampanye): Response
    {
        //
        return Inertia::render('Post/IndexPost', [
            //
            'posts' => Post::with('admin')->where('kampanye_id', $kampanye->id)->get()->map(function($post) {
                return [
                    'user_id' => $post->admin_id,
                    'user_name' => $post->admin->name,
                    'judul' => $post->judul,
                    'gambar' => $post->gambar,
                    'excerpt' => $post->createExcerpt($post->body, 35),
                    'show_url' => route('post.show.user', $post),
                    'created_at' => $post->created_at
                ];
            })
        ]);
    }

    public function kampdiikuti(): Response
    {
        $user = Auth::user();
        return Inertia::render('Kampanye/IndexAllKampanye', [

            // 'kampanyes' => Kampanye::all()->map(function($kampanye) {
            //     return [
            //         'id' => $kampanye->id,
            //         'judul' => $kampanye->judul,
            //         'target' => $kampanye->target,
            //         'terverifikasi' => $kampanye->terverifikasi,
            //         'show_url' => route('kampanye.show', $kampanye),
            //     ];
            // }),

            'kampanyes' => $user->campaigns()->distinct()->get()->map(function($kampanye) {
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
                    'dana_terkumpul' => $kampanye->donasis()->where('status', 'Paid')->sum('jumlah')
                ];
            })
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Kampanye $kampanye): Response
    {
        //
        return Inertia::render('Kampanye/EditKampanye', [
            'kampanye' => $kampanye
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(FormUpdateKampanyeRequest $request, Kampanye $kampanye): RedirectResponse
    {
        //
        $validated = $request->validated();

        // dd($validated);

        // $validated['gambar'] = $request->file('gambar')->store('gambar-kampanye');

        $kampanye->judul = $validated['judul'];

        $kampanye->deskripsi = $validated['deskripsi'];

        $kampanye->target = $validated['target'];

        $kampanye->tgl_berakhir = $validated['tgl_berakhir'];

        $kampanye->kategori = $validated['kategori'];

        if ($validated['gambar']){
            $validated['gambar'] = $request->file('gambar')->store('gambar-kampanye');

            $kampanye->gambar = $validated['gambar'];
        }

        $kampanye->save();

        return redirect(route('kampanye.index'))->with('message', 'Kampanye Berhasil diubah');
    }

    public function konfirmasi(Request $request, Kampanye $kampanye): RedirectResponse
    {
        //
        $validated = $request->validate([
            'terverifikasi' => 'required|boolean',
        ]);

        // dd($validated);

        $kampanye->terverifikasi = $validated['terverifikasi'];

        $kampanye->save();

        return redirect(route('admin.kampanye.show', $kampanye));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Kampanye $kampanye): RedirectResponse
    {
        //
    }

    public function upload(Request $request)
    {
        $fileName=$request->file('file')->getClientOriginalName();
        $path=$request->file('file')->storeAs('uploads', $fileName, 'public');
        return response()->json(['location'=>"/storage/$path"]);
    }
}
