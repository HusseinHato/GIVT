<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FormUpdateKampanyeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
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
            'tgl_berakhir' => 'required|date',
            'gambar' => 'nullable|image|file|max:1024',
            'kategori' => 'required|string'
        ];
    }
}
