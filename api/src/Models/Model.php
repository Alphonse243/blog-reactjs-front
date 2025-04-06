<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model as BaseModel;

class Model extends BaseModel 
{
    // Utilisation des timestamps par défaut
    public $timestamps = true;
    
    // Désactive la protection contre l'assignation en masse par défaut
    protected $guarded = [];
}
