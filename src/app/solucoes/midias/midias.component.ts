import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GlobalsService } from 'src/app/providers/globals';

declare var $:any;
@Component({
  selector: 'app-midias',
  templateUrl: './midias.component.html',
  styleUrls: ['./midias.component.scss']
})
export class MidiasComponent implements OnInit {

  arSolucoes = [
    {
      id: 0,
      tipo: "Mídia",
      nome: "Cartão",
      valor: "40,00",
      parcela: "12",
      valorParcela: "20,00",
      imagem: "assets/images/cartao.png",
      botao: "https://www.mercadopago.com/mlb/checkout/start?pref_id=182681852-44cdb3ad-c1f0-4c37-b15d-dd63f89eeece"
    },
    {
      id: 1,
      tipo: "Hardware",
      nome: "Token",
      valor: "145,00",
      parcela: "12",
      valorParcela: "14,50",
      imagem: "assets/images/token.jpg",
      botao: "https://www.mercadopago.com/mlb/checkout/start?pref_id=182681852-f70469c7-9990-418b-bd53-bd9e0298b8a7"
    },
    {
      id: 2,
      tipo: "Hardware",
      nome: "Leitora de Cartão",
      valor: "125,00",
      parcela: "12",
      valorParcela: "12,50",
      imagem: "assets/images/img-solucoes.jpg",
      botao: "https://www.mercadopago.com/mlb/checkout/start?pref_id=182681852-a226a54a-53a9-4ba2-834b-54e96e01562d"
    }
  ]

  idSolucao: any;

  constructor(
    private title: Title,
    private GlobalsService: GlobalsService
    ) { }

  ngOnInit() {
    this.title.setTitle('Certifis Certificação Digital - Nossas Soluções Mídia');
    $(".loader").fadeOut("slow");
    $(".loaders").delay(300).fadeOut("slow");
    this.idSolucao = 0;
  }

  getSolucao(id) {
    this.idSolucao = this.arSolucoes[id].id
  }

}
