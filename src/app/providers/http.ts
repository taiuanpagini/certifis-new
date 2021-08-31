/*--------------
V 1.0.0 - Criado por Larner Diogo - PADRONIZADO

DESCIÇÃO:
Serviço global de requisicoes http


COMPONENTS
***********************************************************/
import { Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import * as _ from 'lodash';

/***********************************************************
SERVICES
***********************************************************/
// import { AlertService } from './alert';
import { GlobalsService } from './globals';
import { StorageService } from './storage';
import { ConnectService } from './connect';

@Injectable()
export class HttpService {

    URL_api: string;
    URL_REQUEST: string;
    inProcessForm: boolean;

    constructor(
        public http: Http,
        public GlobalsService: GlobalsService,
        private StorageService: StorageService,
        // public AlertService: AlertService,
        private ConnectService: ConnectService
    ) {
        this.URL_api = this.GlobalsService.URL_api;
    }

    /************
    CONVERSOR HEADER (JSON > STRING)
    *************/
    replace(obj) {
        return _.cloneDeepWith(obj, val => val.toString());
    }

    /************
    HEADER
    *************/
    getHeader(headerConfig) {
        let headers = new Headers();

        //HEADER COM AUTHORIZATION
        (headerConfig.tokenTable) ? this.ConnectService.configConnect['tokenTable'] = headerConfig.tokenTable : null;
        (headerConfig.tokenFieldName) ? this.ConnectService.configConnect['tokenFieldName'] = headerConfig.tokenFieldName : null;
        
        //CARREGANDO DADOS DO USUARIO
        if(this.StorageService.getItem('dataUser')){
            let dadosUser = JSON.parse(this.StorageService.getItem('dataUser'));
            this.ConnectService.configConnect['token'] = dadosUser.t;
        }

        //HEADER OBJETO
        (headerConfig.stsValue) ? this.ConnectService.configConnect['stsValue'] = headerConfig.stsValue : null;
        (headerConfig.deleteValue) ? this.ConnectService.configConnect['deleteValue'] = headerConfig.deleteValue : null;

        //CARREGANDO DADOS NO HEADER
        console.log(JSON.stringify(this.ConnectService.configConnect));
        headers.append('Authorization', JSON.stringify(this.ConnectService.configConnect));
        return headers;
    }

    /************
    POST
    *************/
    JSON_POST(url, fields, use_url_api: boolean, header: any): Promise<any> {
        if (use_url_api === true) { this.URL_REQUEST = this.URL_api + url } else { this.URL_REQUEST = url }
        return this.http.post(this.URL_REQUEST, fields, { headers: this.getHeader(header) }).toPromise()
    }

    /************
    GET
    *************/
    JSON_GET(url, use_url_api: boolean, header: any): Promise<any> {
        if (use_url_api === true) { this.URL_REQUEST = this.URL_api + url } else { this.URL_REQUEST = url }
        return this.http.get(this.URL_REQUEST, { headers: this.getHeader(header) }).toPromise()
    }

    /************
    PUT
    *************/
    JSON_PUT(url, fields, use_url_api: boolean, header: any): Promise<any> {
        if (use_url_api === true) { this.URL_REQUEST = this.URL_api + url } else { this.URL_REQUEST = url }
        return this.http.put(this.URL_REQUEST, fields, { headers: this.getHeader(header) }).toPromise()
    }

    /************
    DELETE
    *************/
    JSON_DELETE(url, use_url_api: boolean, header: any): Promise<any> {
        if (use_url_api === true) { this.URL_REQUEST = this.URL_api + url } else { this.URL_REQUEST = url }
        return this.http.delete(this.URL_REQUEST, { headers: this.getHeader(header) }).toPromise()
    }

    /************
    UPLOAD
    *************/
    JSON_UPLOAD_POST(url, fields, use_url_api: boolean): Promise<any> {
        if (use_url_api === true) { this.URL_REQUEST = this.URL_api + url } else { this.URL_REQUEST = url }
        return this.http.post(this.URL_REQUEST, fields).toPromise()
    }

    JSON_UPLOAD_PUT(url, fields, use_url_api: boolean): Promise<any> {
        if (use_url_api === true) { this.URL_REQUEST = this.URL_api + url } else { this.URL_REQUEST = url }
        return this.http.put(this.URL_REQUEST, fields).toPromise()
    }

    // /************
    // GERAR XML
    // *************/
    // gerarXML(json) {
    //     this.inProcessForm = true;
    //     this.AlertService.alertLoadingShow();
    //     this.JSON_POST('/generate/xls', { json: json }, true, true)
    //         .then(res => {
    //             this.inProcessForm = false;
    //             this.GlobalService.AlertService.alertSuccess('XML Gerado com sucesso!');
    //             window.location.href = `${this.GlobalService.urlApi}/contents/xls/${res._body}`;

    //         }).catch(error => {
    //             this.inProcessForm = false;
    //             this.AlertService.alertLoadingClose();
    //             this.GlobalService.AlertService.alertError(error);
    //         })
    // }

    // /************
    // GERAR PDF
    // *************/
    // gerarPDF(json) {
    //     this.inProcessForm = true;
    //     this.AlertService.alertLoadingShow();
    //     this.JSON_POST('/generate/pdf', { json: json }, true, true)
    //         .then(res => {
    //             this.inProcessForm = false;
    //             this.GlobalService.AlertService.alertSuccess('PDF Gerado com sucesso!');
    //             window.open(`${this.GlobalService.urlApi}/contents/pdf/${res._body}`);
    //         }).catch(error => {
    //             this.AlertService.alertLoadingClose();
    //             this.inProcessForm = false;
    //             this.GlobalService.AlertService.alertError(error);
    //         })
    // }

}
