<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FormUpdateBeritaRequest extends FormRequest
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
            'judul' => 'nullable|max:255|string|regex:/^[a-zA-Z0-9\s]+$/',
            'gambar' => 'nullable|image|file',
            'body' => 'nullable',
            'kampanye_id' => 'nullable'
        ];
    }
}
