import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

declare var $: any;

@Component({
  selector: 'app-pontos-atendimento',
  templateUrl: './pontos-atendimento.component.html',
  styleUrls: ['./pontos-atendimento.component.scss']
})
export class PontosAtendimentoComponent implements OnInit {

  arPontosAtendimento = [
    {
      id: 0,
      nome: "Acre",
      qtd: 1,
      cidades: [
        { nome: "Rio Branco" }
      ]
    },
    {
      id: 1,
      nome: "Amapá",
      qtd: 1,
      cidades: [
        { nome: "Macapá" }
      ]
    },
    {
      id: 2,
      nome: "Amazonas",
      qtd: 1,
      cidades: [
        { nome: "Manaus" }
      ]
    },
    {
      id: 3,
      nome: "Alagoas",
      qtd: 1,
      cidades: [
        { nome: "Maceió" }
      ]
    },
    {
      id: 4,
      nome: "Bahia",
      qtd: 2,
      cidades: [
        { nome: "Tanhaçu" },
        { nome: "Camaçari"}
      ]
    },
    {
      id: 5,
      nome: "Ceará",
      qtd: 1,
      cidades: [
        { nome: "Fortaleza" }
      ]
    },
    {
      id: 6,
      nome: "Distrito Federal",
      qtd: 2,
      cidades: [
        { nome: "Brasília" },
        { nome: "Taguatinga" }
      ]
    },
    {
      id: 7,
      nome: "Espírito Santo",
      qtd: 2,
      cidades: [
        { nome: "Cariacia" },
        { nome: "Vitória" }
      ]
    },
    {
      id: 8,
      nome: "Goiás",
      qtd: 4,
      cidades: [
        { nome: "Orizona" },
        { nome: "Goiânia" },
        { nome: "Planaltina" },
        { nome: "Trindade" }
      ]
    },
    {
      id: 9,
      nome: "Maranhão",
      qtd: 1,
      cidades: [
        { nome: "São Luiz" }
      ]
    },
    {
      id: 10,
      nome: "Mato Grosso",
      qtd: 18,
      cidades: [
        { nome: "Aripuana" },
        { nome: "Brasnorte" },
        { nome: "Colniza" },
        { nome: "Cuiabá" },
        { nome: "Guarantã do Norte" },
        { nome: "Juara" },
        { nome: "Juina" },
        { nome: "Porto dos Gaúchos" },
        { nome: "Nova Mutum" },
        { nome: "Carlinda" },
        { nome: "Nova Canaã do Norte" },
        { nome: "Tarupah" },
        { nome: "Rondonópolis" },
        { nome: "Sapezal" },
        { nome: "Sinop" },
        { nome: "Tabaporã" },
        { nome: "Tangará da Serra" },
        { nome: "Várzea Grande" },
      ]
    },
    {
      id: 11,
      nome: "Mato Grosso do Sul",
      qtd: 2,
      cidades: [
        { nome: "Angelica" },
        { nome: "Ivinhema" }
      ]
    },
    {
      id: 12,
      nome: "Minas Gerais",
      qtd: 2,
      cidades: [
        { nome: "Uberaba" },
        { nome: "Betim" }
      ]
    },
    {
      id: 13,
      nome: "Pará",
      qtd: 4,
      cidades: [
        { nome: "Abaetetuba" },
        { nome: "Moju" },
        { nome: "Belém" },
        { nome: "Porto de Moz" }
      ]
    },
    {
      id: 14,
      nome: "Paraná",
      qtd: 6,
      cidades: [
        { nome: "Curitiba" },
        { nome: "Pinhais" },
        { nome: "Telemaco" },
        { nome: "Cruzeiro do Sul" },
        { nome: "Cascavél" },
        { nome: "Coronel Vivida" }
      ]
    },
    {
      id: 15,
      nome: "Pernambuco",
      qtd: 1,
      cidades: [
        { nome: "Lajedo" }
      ]
    },
    {
      id: 16,
      nome: "Piauí",
      qtd: 1,
      cidades: [
        { nome: "Teresina" }
      ]
    },
    {
      id: 17,
      nome: "Rio de Janeiro",
      qtd: 6,
      cidades: [
        { nome: "Madureira" },
        { nome: "São Gonçalo" },
        { nome: "Maricá" },
        { nome: "Mesquita" },
        { nome: "Trindade" },
        { nome: "Rio de Janeiro" }
      ]
    },
    {
      id: 18,
      nome: "Rio Grande do Sul",
      qtd: 5,
      cidades: [
        { nome: "Caxias do Sul" },
        { nome: "Leopoldo" },
        { nome: "Porto Velho" },
        { nome: "Quaraí" },
        { nome: "Feliz" }
      ]
    },
    {
      id: 19,
      nome: "Rondônia",
      qtd: 2,
      cidades: [
        { nome: "Cacoal" },
        { nome: "Porto Velho" }
      ]
    },
    {
      id: 20,
      nome: "Santa Catarina",
      qtd: 11,
      cidades: [
        { nome: "Joinville" },
        { nome: "Garuva" },
        { nome: "Gaspar" },
        { nome: "Pouso Redondo" },
        { nome: "Itapoá" },
        { nome: "Fraiburgo" },
        { nome: "Florianópolis" },
        { nome: "Balneário Camboriú" },
        { nome: "Blumenau" },
        { nome: "Itajaí" },
        { nome: "Araquari" }
      ]
    },
    {
      id: 21,
      nome: "São Paulo",
      qtd: 5,
      cidades: [
        { nome: "Aguai" },
        { nome: "São Paulo" },
        { nome: "Rancharia" },
        { nome: "Avaré" },
        { nome: "Canitar" }
      ]
    },
    {
      id: 22,
      nome: "Tocantins",
      qtd: 1,
      cidades: [
        { nome: "Tocantinópolis" },
        { nome: "Palmas" }
      ]
    }
  ]

  idPonto: any;

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Certifis Certificação Digital - Locais de Atendimento');
    $(".loader").fadeOut("slow");
    $(".loaders").delay(300).fadeOut("slow");
  }

  getPonto(id) {
    this.idPonto = this.arPontosAtendimento[id].id
  }

}
