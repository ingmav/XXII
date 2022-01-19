import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioSsaService {

  //url           = `${environment.base_url}/trabajador-salud`;
  url           = `http://sirh.saludchiapas.gob.mx/api/ver-foto`;
  constructor(private http: HttpClient) { }

  getTrabajadorSsa(id, payload):Observable<any> {
    
    return this.http.get<any>(this.url+ "/"+id, {params: payload}).pipe(
        map( response => {
          return response;
        })
    );
}
}
