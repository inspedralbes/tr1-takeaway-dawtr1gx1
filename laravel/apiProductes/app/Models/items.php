<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class items extends Model
{
    use HasFactory;

    protected $fillable=[
        'itemName',
        'price',
        'stock',
        'description',
        'imageRoute',
        'sale',
        'itemCategory',
        'description'
    ];
}
