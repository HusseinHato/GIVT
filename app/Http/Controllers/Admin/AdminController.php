<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Kampanye;
use App\Models\Donasi;

class AdminController extends Controller
{
    //

    public function dashboard(){
        return Inertia::render('Admin/Dashboard', [
            //
            'jmlhuser' => User::all()->count(),
            'jmlhkamp' => Kampanye::all()->count(),
            'totaldonasi' => Donasi::where('status', 'Paid')->sum('jumlah')
        ]);
    }
}
