import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { OwlModule } from 'ngx-owl-carousel';
import { EmpresaComponent } from './empresa/empresa.component';
import { SolucoesComponent } from './solucoes/solucoes.component';
import { PontosAtendimentoComponent } from './pontos-atendimento/pontos-atendimento.component';
import { ContatoComponent } from './contato/contato.component';
import { ComoInstalarComponent } from './oomo-instalar/como-instalar.component';
import { StorageService } from './providers/storage';
import { GlobalsService } from './providers/globals';
import { HttpService } from './providers/http';
import { ConnectService } from './providers/connect';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { Http, HttpModule } from '@angular/http';
import { NgxMaskModule } from 'ngx-mask';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './layouts/header/header.component';
import { ECpfComponent } from './solucoes/e-cpf/e-cpf.component';
import { ECnpjComponent } from './solucoes/e-cnpj/e-cnpj.component';
import { MidiasComponent } from './solucoes/midias/midias.component';
import { CarouselModule } from 'ngx-owl-carousel-o'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmpresaComponent,
    SolucoesComponent,
    PontosAtendimentoComponent,
    ComoInstalarComponent,
    ContatoComponent,
    HeaderComponent,
    ECpfComponent,
    ECnpjComponent,
    MidiasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    OwlModule,
    SnotifyModule,
    NgxMaskModule.forRoot(),
    NgbModule,
    CarouselModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    StorageService,
    GlobalsService,
    HttpService,
    ConnectService,
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
