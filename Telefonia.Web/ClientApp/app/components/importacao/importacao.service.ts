﻿import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ImportacaoService {

    constructor(private http: Http) { }

    //Get Logs
    ObterDados(dataInicial: string) {

        var datePipe = new DatePipe("en-US");
        var strData = datePipe.transform(dataInicial, 'yyyyMMddT000000');

        return this.http.get("/api/importacao/" + strData).map(data => data.json());
    }
}