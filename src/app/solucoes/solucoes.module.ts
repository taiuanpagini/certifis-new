import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolucoesRoutingModule } from './solucoes-routing.module';
import { ECpfComponent } from './e-cpf/e-cpf.component';
import { ECnpjComponent } from './e-cnpj/e-cnpj.component';
import { MidiasComponent } from './midias/midias.component';
import { HeaderComponent } from '../layouts/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    SolucoesRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SolucoesModule { }
