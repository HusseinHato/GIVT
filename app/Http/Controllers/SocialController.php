<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
use App\Providers\RouteServiceProvider;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class SocialController extends Controller
{
    public function googleRedirect()
    {
        return Socialite::driver('google')->redirect();
    }

    public function googleCallback()
    {
        $user = Socialite::driver('google')->user();

        $this->googleAuth($user);

        return redirect()->route('hal.utama');
    }

    protected function googleAuth($incomingUser)
    {
        $user = User::where('google_id', $incomingUser->id)->first();
        if(!$user){
            $user = new User();
            $user->name = $incomingUser->name;
            $user->email = $incomingUser->email;
            $user->google_id =$incomingUser->id;
            $user->save();
        }
        Auth::login($user);
    }


}
