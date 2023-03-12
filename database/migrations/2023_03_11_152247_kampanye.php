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
        Schema::create('Kampanye', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->date('tgl_mulai');
            $table->date('tgl_berakhir');
            $table->integer('target');
            $table->integer('dana_terkumpul');
            $table->string('gambar');
            $table->string('judul');
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
