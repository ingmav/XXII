<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Trabajador extends Model
{
    use SoftDeletes;
    //protected $fillable = ['descripcion'];
    protected $table = 'trabajador';

    public function datoslaborales(){
        return $this->hasOne('App\Models\RelDatosLaborales')->with('clues_fisico', 'cr_fisico');
    }
    
    public function datoslaboralesnomina(){
        return $this->hasOne('App\Models\RelDatosLaboralesNomina')->with('clues', 'cr.directorio', 'codigo');
    }

    public function sexo(){
        return $this->belongsTo('App\Models\Sexo');
    }

    //Ver trabajador
    public function rel_datos_laborales(){
        return $this->hasOne('App\Models\RelDatosLaborales')->with('actividad','actividad_voluntaria','area_trabajo','cr_fisico','clues_fisico','programa','rama', 'jornada');
    }

    public function rel_datos_laborales_nomina(){
        return $this->hasOne('App\Models\RelDatosLaboralesNomina')->with('codigo', 'clues', 'cr', 'tipoNomina');#'area_trabajo','cr_fisico','programa','rama');
    }

    public function credencial(){
        return $this->hasOne('App\Models\Credencializacion');
    }
}
