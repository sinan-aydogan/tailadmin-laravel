<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class DemoLoginController extends Controller
{
    /**
     * Log the user in as one of the whitelisted demo accounts, without a password.
     */
    public function store(Request $request): RedirectResponse
    {
        abort_unless(config('app.demo_mode'), 404);

        $request->validate([
            'email' => ['required', 'email'],
        ]);

        $user = User::whereIn('email', config('app.demo_users', []))
            ->where('email', $request->string('email'))
            ->first();

        if (! $user) {
            throw ValidationException::withMessages([
                'email' => __('auth.failed'),
            ]);
        }

        Auth::login($user);
        $request->session()->regenerate();

        return redirect()->intended(config('fortify.home'));
    }
}
