<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

#[Fillable("title", "author", "isbn")]
class Book extends Model
{
    use HasFactory;
}
