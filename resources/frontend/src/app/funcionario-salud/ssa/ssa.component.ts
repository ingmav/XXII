import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { debounceTime, finalize, switchMap, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { SharedService } from 'src/app/shared/shared.service';
import { ConfirmActionDialogComponent } from '../../utils/confirm-action-dialog/confirm-action-dialog.component';
import { FuncionarioSsaService } from '../funcionario-ssa.service';

@Component({
  selector: 'app-ssa',
  templateUrl: './ssa.component.html',
  styleUrls: ['./ssa.component.css']
})
export class SsaComponent implements OnInit {

  encript:string = "";
  nombre_trabajador:string = "";
  cargo:string = "";
  imagenTrabajador:string = "";

  constructor(
    private sharedService: SharedService, 
    private funcionarioSsaService: FuncionarioSsaService,
    private authService: AuthService, 
    private route: ActivatedRoute, 
    private fb: FormBuilder,
    public dialog: MatDialog,
    public mediaObserver: MediaObserver,
    public router: Router 
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.encript = params.get('id');
      
      if(this.encript != ""){
        //console.log("entra");
        this.cargarTrabajador(this.encript); 
      }
    });
  }

  cargarTrabajador(encriptado:string)
  {
    this.funcionarioSsaService.getTrabajadorSsa(encriptado, {}).subscribe(
      response => {
        console.log(response);
        this.nombre_trabajador = response.nombre+" "+response.apellido_paterno+" "+response.apellido_materno;
        this.cargo = response.credencial.cargo.descripcion;
        this.imagenTrabajador = "data:image/jpeg;base64,"+response.credencial.foto_trabajador;
      },
      errorResponse =>{
        //this.isLoadingCredential = false;
        var errorMessage = "Ocurrió un error.";
        if(errorResponse.status == 409){
          errorMessage = errorResponse.error.error.message;
        }
        this.sharedService.showSnackBar(errorMessage, null, 3000); 
      }
    );
  }
}
