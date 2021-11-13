<?php

namespace App\Models;

use App\Scope\SimpleSearchGenerator;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DemoContent extends Model
{
    use HasFactory;
    use SimpleSearchGenerator;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = ['name', 'type', 'price', 'production_date', 'status'];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'production_date' => 'datetime',
    ];
}
