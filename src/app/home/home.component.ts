import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { HttpService } from '../providers/http';
import { GlobalsService } from '../providers/globals';
import { StorageService } from '../providers/storage';
import { ConnectService } from '../providers/connect';
import { SnotifyService } from 'ng-snotify';

declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  customOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  model: any = {
    Assunto: "Newsletter Via Site"
  };

  //public sliderOptions: any = {items: 3, dots: false, nav: true, loop: true, responsive:{ 0:{ items: 1, margin: 60 }, 600:{ items: 2, margin: 20 }, 767:{ items: 2, margin: 40 }, 991:{ items: 2 }, 1200:{ items: 3 }}};
  public sliderOptions: any = {items: 3, dots: false, nav: true, loop: true, responsive:{ 0:{ items: 1, margin: 60 }, 600:{ items: 2, margin: 20 }, 767:{ items: 3, margin: 40 }, 991:{ items: 3 }, 1200:{ items: 3 }}};
  public sliderOptionsForn: any = {items: 1, dots: false, nav: true, loop: true, responsive:{ 0:{ items: 1, margin: 60 }, 600:{ items: 1, margin: 20 }, 767:{ items: 1, margin: 40 }, 991:{ items: 1 }, 1200:{ items: 1 }}};

  arParceiros = [
    {
      link: "#",
      alt: "J & L Contabilidade",
      img: "/assets/images/jlcontabilidade.png"
    },
    {
      link: "#",
      alt: "Nunes Contabilidade Empresarial",
      img: "/assets/images/nunes.png"
    },
    {
      link: "#",
      alt: "Exime Contabilidade",
      img: "/assets/images/eximecontabilidade.png"
    },
    {
      link: "#",
      alt: "Soldi Corretora de Seguros",
      img: "/assets/images/soldi.png"
    },
    {
      link: "#",
      alt: "Crescere Consultoria",
      img: "/assets/images/crescere.png"
    },
    {
      link: "#",
      alt: "Cezar e Ávila Advogados",
      img: "/assets/images/cezaravila.png"
    }
  ]

  arFornecedores = [
    {
      link: "https://safemidias.com.br/",
      alt: "Safe Mídias",
      img: "/assets/images/safemidias.png"
    }
  ]

  arSolucoes = [
    {
      titulo: "e-CPF",
      descricao: "O e-CPF é um documento criado para facilitar o relacionamento entre a Receita Federal do Brasil e contribuintes brasileiros. Este documento eletrônico é utilizado para garantir a autenticidade e assegurar informações dos remetentes e destinatários de dados e documentos que são repassados pela internet.",
      link: "/solucoes/e-cpf",
      icone: "far fa-credit-card"
    },
    {
      titulo: "e-CNPJ",
      descricao: "O e-CNPJ é uma versão digital do seu CNPJ, é um documento eletrônico em formato de certificado. Ele quem garante integridade e autenticidade das transações realizadas na internet por pessoas jurídicas.",
      link: "/solucoes/e-cnpj",
      icone: "far fa-credit-card"
    },
    {
      titulo: "Mídias / Hardwares",
      descricao: "Conheça as mídias que temos disponíveis para venda.",
      link: "/solucoes/midias-hardware",
      icone: "far fa-hdd"
    }
  ]

  constructor(
    private title: Title,
    public HttpService: HttpService,
    public GlobalsService: GlobalsService,
    public StorageService: StorageService,
    public ConnectService: ConnectService,
    private snotifyService: SnotifyService
  ) { }

  ngOnInit() {
    $(window).load(function() {
      $(".loader").fadeOut("slow", function(){
      $(".loaders").delay(300).fadeOut("slow");
      });
    });
  }

  enviarEmail(form) {
    console.log(form.value);
    const successAction = Observable.create(observer => {
      
      observer.next({
        body: 'Enviando Mensagem.....',
      });
      this.HttpService.JSON_POST('/send/mail', form.value, true, false)
      .then(
        (res) => {
          console.log(res.json());
          setTimeout(() => {
            observer.next({
              title: 'Obrigado',
              body: 'Em breve entraremos em contato!!',
              config: {
                closeOnClick: true,
                timeout: 3000,
                showProgressBar: true
              }
            });
            observer.complete();
          }, 3000);
          form.reset();
        },
        (error) => {
          console.log(error);
          //this.AlertService.alertError(JSON.parse(error._body));
        }
      )
    });
    this.snotifyService.async('Sucesso!', successAction);
  }

}
