import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { EmpresaComponent } from './empresa/empresa.component';
import { SolucoesComponent } from './solucoes/solucoes.component';
import { PontosAtendimentoComponent } from './pontos-atendimento/pontos-atendimento.component';
import { ContatoComponent } from './contato/contato.component';
import { ECpfComponent } from './solucoes/e-cpf/e-cpf.component';
import { ECnpjComponent } from './solucoes/e-cnpj/e-cnpj.component';
import { MidiasComponent } from './solucoes/midias/midias.component';
import { ComoInstalarComponent } from './oomo-instalar/como-instalar.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'empresa', component: EmpresaComponent },
  { path: 'solucoes', component: SolucoesComponent },
  { path: 'solucoes/e-cpf', component: ECpfComponent },
  { path: 'solucoes/e-cnpj', component: ECnpjComponent },
  { path: 'solucoes/midias-hardware', component: MidiasComponent },
  { path: 'local-atendimento', component: PontosAtendimentoComponent },
  { path: 'como-instalar', component: ComoInstalarComponent },
  { path: 'contato', component: ContatoComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: false })
  ],
  exports: [
      RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
