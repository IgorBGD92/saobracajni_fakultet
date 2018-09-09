import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { API_URL } from '../../app.component';
import { PolozeniIspiti } from './polozeni-ispiti.model';

@Injectable()
export class PolozeniIspitiService {
    ispiti:PolozeniIspiti[];

    constructor(private http: HttpClient) {}

    getPolozeniIspitiSmall() {
        return  this.http.get(API_URL + 'polozeni_ispiti'); 
}
getPolozeniStudent(id:number){
    return this.http.get(API_URL + 'polozeni_ispiti'+id);
}
}