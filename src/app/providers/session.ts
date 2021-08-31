/*--------------

DESCIÇÃO:
Manipula requisições com token


COMPONENTS
***********************************************************/
import {Injectable, ViewChild} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {StorageService} from "./storage";
import { HttpService } from './http';
import { Router } from '@angular/router';

@Injectable()
export class SessionService {

    constructor(
        public DomSanitizer: DomSanitizer,
        private StorageService: StorageService,
        private HttpService: HttpService,
        private Router: Router
    ) { }

    /****
     VALIDA TOKEN
    *****/
    getValidaToken() {
        let headerConfig = {
            tokenTable: "usuarios",
            stsValue: "A",
            deleteValue: "N"
        }
        return this.HttpService.JSON_GET(`/auth/login/token/usuarios`, true, headerConfig)
    }

    logout() {
        this.StorageService.clear();
        return this.Router.navigate(['/login']);
    }

}
