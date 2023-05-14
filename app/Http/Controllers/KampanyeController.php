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


class KampanyeController extends Controller
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
                    dd($kampanye),
                    'user_id' => $kampanye->user_id,
                    'id' => $kampanye->id,
                    'judul' => $kampanye->judul,
                    'target' => $kampanye->target,
                    'terverifikasi' => $kampanye->terverifikasi,
                    'show_url' => route('kampanye.show', $kampanye),
                    'tgl_berkahir' => $kampanye->tgl_berakhir,
                    'gambar' => $kampanye->gambar,
                    'kategori' => $kampanye->kategori
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
        // dd($request);

        // $validated = $request->validate([
        //     'deskripsi' => 'required',
        //     'judul' => 'required|max:255',
        //     'target' => 'required|integer|gt:0',
        //     'tgl_mulai' => 'required|date',
        //     'tgl_berakhir' => 'required|integer|gt:0'
        // ]);

        $validated = $request->validated();

        $validated['gambar'] = $request->file('gambar')->store('gambar-kampanye');

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
        return Inertia::render('Kampanye/ShowKampanye', [
            //
            'kampanye' => $kampanye->with('posts')->where('id', $kampanye->id)->first()
        ]);
    }

    public function showBeritaTerkait(Kampanye $kampanye): Response
    {
        //
        return Inertia::render('Post/IndexPost', [
            //
            'posts' => Post::with('user')->where('kampanye_id', $kampanye->id)->get()->map(function($post) {
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

    public function upload(Request $request)
    {
        $fileName=$request->file('file')->getClientOriginalName();
        $path=$request->file('file')->storeAs('uploads', $fileName, 'public');
        return response()->json(['location'=>"/storage/$path"]);
    }
}
