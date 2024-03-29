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
            'judul' => 'required|max:255|string|regex:/^[a-zA-Z0-9\s]+$/',
            'body' => 'required|string',
            'gambar' => 'required|image|file|max:1024'
        ];
    }

    public function messages(): array
{
    return [
        'judul.required' => 'Harap isi judul post'
    ];
}
}
