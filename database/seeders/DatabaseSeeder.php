<?php

namespace Database\Seeders;

use App\Models\User;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            PermissionSeeder::class,
            RoleSeeder::class,
            UserSeeder::class
        ]);

        if (User::count() <= 3) {
            User::factory(50)->create();
        }

        if (\App\Models\DemoContent::count() === 0) {
            \App\Models\DemoContent::factory(100)->create();
        }
    }
}
