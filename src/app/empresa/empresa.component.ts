import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

declare var $: any;
declare var WOW: any;
@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss']
})
export class EmpresaComponent implements OnInit {

  constructor(private title: Title) { }
  
  ngOnInit() {
    this.title.setTitle('Certifis Certificação Digital - Conheça a Empresa');
    $(".loader").fadeOut("slow");
    $(".loaders").delay(300).fadeOut("slow"); 
  }

}
