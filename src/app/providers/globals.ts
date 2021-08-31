/*--------------

DESCIÇÃO:
Funcoes e compartilhamentos globais


COMPONENTS
***********************************************************/
import {Injectable, ViewChild} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {StorageService} from "./storage";

@Injectable()
export class GlobalsService {

    public URL_api = 'https://innsere-rest.herokuapp.com/api/mysql';
    inProcessForm: boolean;

    constructor(
        public DomSanitizer: DomSanitizer,
        private StorageService: StorageService
    ) { }

}
