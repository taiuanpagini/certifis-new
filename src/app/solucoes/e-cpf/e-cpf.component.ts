import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GlobalsService } from 'src/app/providers/globals';

declare var $:any;
@Component({
  selector: 'app-e-cpf',
  templateUrl: './e-cpf.component.html',
  styleUrls: ['./e-cpf.component.scss']
})
export class ECpfComponent implements OnInit {

  arSolucoes = [
    {
      id: 0,
      tipo: "e-CPF",
      nome: "A1 | Arquivo",
      validade: "1",
      valor: "135,00",
      parcela: "12",
      valorParcela: "16,00",
      botao: "https://www.mercadopago.com/mlb/checkout/start?pref_id=182681852-8a44464d-7985-4c4e-bf95-40fa9c1bc707"
    },
    {
      id: 1,
      tipo: "e-CPF",
      nome: "A3 | Cartão",
      validade: "1",
      valor: "175,00",
      parcela: "12",
      valorParcela: "20,00",
      botao: "https://www.mercadopago.com/mlb/checkout/start?pref_id=182681852-a55c6bcd-1347-41fb-9841-e7d5da45e91c"
    },
    {
      id: 2,
      tipo: "e-CPF",
      nome: "A3 | Token",
      validade: "1",
      valor: "235,00",
      parcela: "12",
      valorParcela: "36,50",
      botao: "https://www.mercadopago.com/mlb/checkout/start?pref_id=182681852-8f6c43ea-c074-49e1-a69c-8d58a0854951"
    },
    {
      id: 3,
      tipo: "e-CPF",
      nome: "A3 | Cartão",
      validade: "2",
      valor: "220,00",
      parcela: "12",
      valorParcela: "29,00",
      botao: "https://www.mercadopago.com/mlb/checkout/start?pref_id=182681852-1b0e7ab9-32b8-42a5-96d3-9b2da8350d5e"
    },
    {
      id: 4,
      tipo: "e-CPF",
      nome: "A3 | Token",
      validade: "2",
      valor: "320,00",
      parcela: "12",
      valorParcela: "40,90",
      botao: "https://www.mercadopago.com/mlb/checkout/start?pref_id=182681852-901680ed-b52f-49c2-b239-5437ae217837"
    },
    {
      id: 5,
      tipo: "e-CPF",
      nome: "A3 | Cartão",
      validade: "3",
      valor: "280,00",
      parcela: "12",
      valorParcela: "40,90",
      botao: "https://www.mercadopago.com/mlb/checkout/start?pref_id=182681852-901680ed-b52f-49c2-b239-5437ae217837"
    },
    {
      id: 6,
      tipo: "e-CPF",
      nome: "A3 | Token",
      validade: "3",
      valor: "395,00",
      parcela: "12",
      valorParcela: "40,90",
      botao: "https://www.mercadopago.com/mlb/checkout/start?pref_id=182681852-901680ed-b52f-49c2-b239-5437ae217837"
    }
  ]

  idSolucao: any;

  constructor(
    private title: Title,
    private GlobalsService: GlobalsService
    ) { }

  ngOnInit() {
    this.title.setTitle('Certifis Certificação Digital - Nossas Soluções e-CPF');
    $(".loader").fadeOut("slow");
    $(".loaders").delay(300).fadeOut("slow");
    this.idSolucao = 0;
  }

  getSolucao(id) {
    this.idSolucao = this.arSolucoes[id].id
  }

}
