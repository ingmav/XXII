<?php

namespace App\Http\Controllers\API\Modulos;

use Illuminate\Http\Request;
use Illuminate\Http\Response as HttpResponse;
use Illuminate\Database\Eloquent\Collection;

use App\Http\Requests;

use App\Http\Controllers\Controller;
use \Validator,\Hash, \Response, \DB;

use App\Models\Trabajador;

class FuncionarioSaludController extends Controller
{
    
    public function ConsultaSsa(Request $request, $id)
    {
        try{
            $response_data = [];
            $params = $request->all();
            $trabajador = Trabajador::with('datoslaborales', 'datoslaboralesnomina', 'credencial')->where("id", "=", $id)->first();
            if($trabajador->credencial != null)
            {
                if($trabajador->credencial->foto == 1)
                {
                    $trabajador->credencial->foto_trabajador = base64_encode(\Storage::get('public\\FotoTrabajador\\'.$trabajador->id.'.'.$trabajador->credencial->extension));
                }
            }
            
            $response_data['data'] = $trabajador;
            return response()->json($response_data,HttpResponse::HTTP_OK);
        }catch(\Exception $e){
            return response()->json(['error'=>['message'=>$e->getMessage(),'line'=>$e->getLine()]], HttpResponse::HTTP_CONFLICT);
        }
    }

   
}
