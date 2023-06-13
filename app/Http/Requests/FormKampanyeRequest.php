<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class FormKampanyeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Auth::check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'deskripsi' => 'required',
            'judul' => 'required|max:255|string|regex:/^[a-zA-Z0-9\s]+$/',
            'target' => 'required|integer|gt:0',
            'tgl_mulai' => 'required|date',
            'tgl_berakhir' => 'required|date',
            'gambar' => 'required|image|file|max:1024',
            'kategori' => 'required|string'
        ];
    }

    // public function messages(): array
    // {
    //     return [
    //         'judul.required' => 'Harap isi nama kampanye',
    //         'target.required' => 'Harap isi target yang diharapkan',
    //         'target.gt' => 'Target yang diharapkan harus lebih dari 0',
    //         'tgl_berakhir.gt' => 'Lama Kampanye minimal 1 Hari',
    //         'tgl_berakhir.required' => 'Harap isi Lama Kampanye (Dalam Hari)'
    //     ];
    // }
}
