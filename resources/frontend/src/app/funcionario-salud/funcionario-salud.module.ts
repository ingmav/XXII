import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { FuncionarioSaludRoutingModule } from './funcionario-salud-routing.module';
import { SsaComponent } from './ssa/ssa.component';


@NgModule({
  declarations: [SsaComponent],
  imports: [
    CommonModule,
    SharedModule,
    FuncionarioSaludRoutingModule
  ]
})
export class FuncionarioSaludModule { }
