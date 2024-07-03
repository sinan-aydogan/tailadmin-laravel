<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddGroupColumnsToPermissionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(): void
    {
        Schema::table('permissions', function (Blueprint $table) {
            $table->foreignIdFor(\App\Models\PermissionGroup::class)
                ->after('guard_name')
                ->nullable();

            $table->string('description')
                ->after('name')
                ->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(): void
    {
        Schema::table('permissions', function (Blueprint $table) {
            $table->dropForeign(['permission_group_id']);
            $table->dropColumn('permission_group_id');
            $table->dropColumn('description');
        });
    }
}
