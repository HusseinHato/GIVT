<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Kampanye;
use Carbon\Carbon;

class UpdateAktifKampanye extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'kampanye:updateaktif';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update apakah kampanye aktif';

    /**
     * Execute the console command.
     */
    public function handle(): void
    {
        //

        $currentDate = Carbon::now();

        // Lakukan query untuk mengambil data yang memenuhi kriteria tanggal tertentu
        $dataToUpdate = Kampanye::where('tgl_berakhir', '<=', $currentDate)->get();

        // Update data
        foreach ($dataToUpdate as $data) {
            $data->update([
                'aktif' => false
            ]);
        }

        $this->info('Data updated successfully.');
    }
}
