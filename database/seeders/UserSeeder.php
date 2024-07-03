<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Actions\Fortify\CreateNewUser;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        /*Admin*/
        $admin = User::factory()->withPersonalTeam()->create([
            'name' => 'Super Admin',
            'email' => 'admin@tailadmin.dev',
            'password' => bcrypt('admin'),
        ]);

        /*Editor*/
        $editor = User::factory()->withPersonalTeam()->create([
            'name' => 'Editor',
            'email' => 'editor@tailadmin.dev',
            'password' => bcrypt('editor'),
        ]);

        /*Simple User*/
        $simpleUser = User::factory()->withPersonalTeam()->create([
            'name' => 'Super User',
            'email' => 'user@tailadmin.dev',
            'password' => bcrypt('user'),
        ]);

        /*Assign Role*/
        $admin->assignRole('Super Admin');
        $editor->assignRole('Editor');
        $simpleUser->assignRole('Simple User');
    }
}
