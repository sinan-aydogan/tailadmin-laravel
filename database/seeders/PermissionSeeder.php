<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $permissions = ['create', 'edit-all', 'delete-all', 'view-all', 'edit-own', 'delete-own', 'view-own'];

        foreach ($permissions as $permission) {
            Permission::create([
                'name' => $permission
            ]);
        }

    }
}
