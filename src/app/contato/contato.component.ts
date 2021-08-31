import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs/Rx';
import { SnotifyService } from 'ng-snotify';
import { HttpService } from '../providers/http';

declare var $: any;
@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {

  model: any = {};

  constructor(
    private title: Title,
    private snotifyService: SnotifyService,
    private HttpService: HttpService
    ) { }

  ngOnInit() {
    this.title.setTitle('Certifis Certificação Digital - Fale Conosco');
    $(".loader").fadeOut("slow");
    $(".loaders").delay(300).fadeOut("slow");
  }

  enviarEmail(form) {
    console.log(form.value);
    form.value['Assunto'] = "Contato Via Site";
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
