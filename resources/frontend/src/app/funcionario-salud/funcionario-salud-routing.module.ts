import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SsaComponent } from './ssa/ssa.component';

const routes: Routes = [
  { path: 'ssa/:id', component: SsaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionarioSaludRoutingModule { }
