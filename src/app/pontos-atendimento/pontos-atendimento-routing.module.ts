import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PontosAtendimentoComponent } from './pontos-atendimento.component';

const routes: Routes = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'parque-aquatico', component: PontosAtendimentoComponent }
    ])
  ],
  exports: [RouterModule]
})
export class PontosAtendimentoRoutingModule { }
