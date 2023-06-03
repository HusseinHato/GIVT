<?php

namespace Database\Seeders;
use App\Models\User;
use App\Models\Admin;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        User::create([
            'name' => 'User Dummy',
            'email' => 't@gmail.com',
            'password' => bcrypt('1')
        ]);

        Admin::create([
            'name' => 'Admin1',
            'email' => 'a@gmail.com',
            'password' => bcrypt('2')
        ]);

        $this->call([
            KampanyeSeeder::class,

        ]);

    }
}
