<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class AdminAuthController extends Controller
{
    public function getLogin(){
        return Inertia::render('Admin/Login', [
            //

        ]);
    }

    public function postLogin(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        // dd(Auth::guard('admin')->attempt(['email' => $request->input('email'),  'password' => $request->input('password')]));

        if(Auth::guard('admin')->attempt(['email' => $request->input('email'),  'password' => $request->input('password')])){
            $user = auth()->guard('admin')->user();

            // dd($user);
            return redirect(route('adminDashboard'));
        } else {
            return back()->with('message','Whoops! invalid email and password.');
        }


    }

    public function adminLogout(Request $request)
    {
        // dd($request);
        auth()->guard('admin')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect(route('adminLogin'));
    }
}
