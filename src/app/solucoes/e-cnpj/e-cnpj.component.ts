import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GlobalsService } from 'src/app/providers/globals';

declare var $:any;
@Component({
  selector: 'app-e-cnpj',
  templateUrl: './e-cnpj.component.html',
  styleUrls: ['./e-cnpj.component.scss']
})
export class ECnpjComponent implements OnInit {

  arSolucoes = [
    {
      id: 0,
      tipo: "e-CNPJ",
      nome: "A1 | Arquivo",
      validade: "1",
      valor: "195,00",
      parcela: "12",
      valorParcela: "23,50",
      botao: "https://www.mercadopago.com/mlb/checkout/start?pref_id=182681852-3328b4e1-620a-4d50-996f-0dd890e8a806"
    },
    {
      id: 1,
      tipo: "e-CNPJ",
      nome: "A3 | Cartão",
      validade: "1",
      valor: "235,00",
      parcela: "12",
      valorParcela: "29,50",
      botao: "https://www.mercadopago.com/mlb/checkout/start?pref_id=182681852-d61e933e-ed5a-40c7-a789-8c71000fdb11"
    },
    {
      id: 2,
      tipo: "e-CNPJ",
      nome: "A3 | Token",
      validade: "1",
      valor: "295,00",
      parcela: "12",
      valorParcela: "42,90",
      botao: "https://www.mercadopago.com/mlb/checkout/start?pref_id=182681852-45f18c92-0bee-435b-b6b8-de605b0e77f0"
    },
    {
      id: 3,
      tipo: "e-CNPJ",
      nome: "A3 | Cartão",
      validade: "2",
      valor: "290,00",
      parcela: "12",
      valorParcela: "33,50",
      botao: "https://www.mercadopago.com/mlb/checkout/start?pref_id=182681852-9a46c3c6-d3c4-4283-be99-90d3966b75ab"
    },
    {
      id: 4,
      tipo: "e-CNPJ",
      nome: "A3 | Token",
      validade: "2",
      valor: "390,00",
      parcela: "12",
      valorParcela: "50,90",
      botao: "https://www.mercadopago.com/mlb/checkout/start?pref_id=182681852-4b743dff-2d7f-4dce-91b1-02f1b037d24a"
    },
    {
      id: 5,
      tipo: "e-CNPJ",
      nome: "A3 | Cartão",
      validade: "3",
      valor: "365,00",
      parcela: "12",
      valorParcela: "33,50",
      botao: "https://www.mercadopago.com/mlb/checkout/start?pref_id=182681852-9a46c3c6-d3c4-4283-be99-90d3966b75ab"
    },
    {
      id: 6,
      tipo: "e-CNPJ",
      nome: "A3 | Token",
      validade: "3",
      valor: "485,00",
      parcela: "12",
      valorParcela: "50,90",
      botao: "https://www.mercadopago.com/mlb/checkout/start?pref_id=182681852-4b743dff-2d7f-4dce-91b1-02f1b037d24a"
    }
  ]

  idSolucao: any;

  constructor(
    private title: Title,
    private GlobalsService: GlobalsService
    ) { }

  ngOnInit() {
    this.title.setTitle('Certifis Certificação Digital - Nossas soluções eCNPJ');
    $(".loader").fadeOut("slow");
    $(".loaders").delay(300).fadeOut("slow");
    this.idSolucao = 0;
  }

  getSolucao(id) {
    this.idSolucao = this.arSolucoes[id].id
  }

}
