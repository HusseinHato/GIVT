<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('kampanyes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->timestamps();
            $table->dateTime('tgl_mulai');
            $table->datetime('tgl_berakhir');
            $table->integer('target');
            $table->integer('dana_terkumpul')->default(0);
            // $table->string('gambar');
            $table->string('judul');
            $table->text('deskripsi');
            $table->boolean('terverifikasi');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('Kampanye');
    }
};
