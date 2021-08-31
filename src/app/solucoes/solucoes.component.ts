import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GlobalsService } from '../providers/globals';

declare var $: any;
@Component({
  selector: 'app-solucoes',
  templateUrl: './solucoes.component.html',
  styleUrls: ['./solucoes.component.scss']
})
export class SolucoesComponent implements OnInit {

  constructor(
    private title: Title,
    private GlobalsService: GlobalsService
    ) { }

  ngOnInit() {
    this.title.setTitle('Certifis Certificação Digital - Conheça nossas soluções');
    $(".loader").fadeOut("slow");
    $(".loaders").delay(300).fadeOut("slow");
  }

}
