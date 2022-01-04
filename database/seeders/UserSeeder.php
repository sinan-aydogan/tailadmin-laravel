<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Actions\Fortify\CreateNewUser;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /*Admin*/
        tap(User::create([
            'name' => 'Super Admin',
            'email' => 'admin@tailadmin.dev',
            'password' => bcrypt('admin'),
        ]), function (User $user) {
            (new CreateNewUser())->createTeam($user);
        });
    }
}
