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
        $admin = tap(User::create([
            'name' => 'Super Admin',
            'email' => 'admin@tailadmin.dev',
            'password' => bcrypt('admin'),
        ]), function (User $user) {
            (new CreateNewUser())->createTeam($user);
        });

        /*Editor*/
        $editor = tap(User::create([
            'name' => 'Editor',
            'email' => 'editor@tailadmin.dev',
            'password' => bcrypt('editor'),
        ]), function (User $user) {
            (new CreateNewUser())->createTeam($user);
        });

        /*Simple User*/
        $simpleUser = tap(User::create([
            'name' => 'Super User',
            'email' => 'user@tailadmin.dev',
            'password' => bcrypt('user'),
        ]), function (User $user) {
            (new CreateNewUser())->createTeam($user);
        });

        /*Assign Role*/
        $admin->assignRole('Super Admin');
        $editor->assignRole('Editor');
        $simpleUser->assignRole('Simple User');
    }
}
