import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { API_URL } from '../../app.component';
import { Predmet } from './predmet.model';

@Injectable()
export class PredmetService {
    predmeti:Predmet[];

    constructor(private http: HttpClient) {}

    getPredmetiSmall() {
        return  this.http.get(API_URL + 'predmeti'); 
}}