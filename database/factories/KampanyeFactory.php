<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Carbon\Carbon;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class KampanyeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    public function definition(): array
    {
        $now = Carbon::now();
        $added = Carbon::now()->addDays(rand(1,100));
        return [
            //
            'judul' => fake()->words(rand(3,7), true),
            'deskripsi' => fake()->paragraph(rand(1,10)),
            'target' => rand(1,10)*1_000_000,
            'tgl_mulai' => $now,
            'tgl_berakhir' => $added,
            'gambar' => 'gambar-kampanye/chikerndrip.JPG',
            'user_id' => 1,
            'kategori' => fake()->randomElement(['Pendidikan', 'Kemanusiaan'])
        ];
    }
}
