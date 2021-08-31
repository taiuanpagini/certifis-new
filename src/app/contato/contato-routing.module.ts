import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContatoComponent } from './contato.component';

const routes: Routes = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'parque-aquatico', component: ContatoComponent }
    ])
  ],
  exports: [RouterModule]
})
export class ContatoRoutingModule { }
