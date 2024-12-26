<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    use HasFactory;

    // Nama tabel di database jika tidak default
    protected $table = 'patients';

    // Field yang boleh diisi
    protected $fillable = [
        'name',
        'phone',
        'address',
        'status',
        'in_date_at',
        'out_date_at',
    ];
}

