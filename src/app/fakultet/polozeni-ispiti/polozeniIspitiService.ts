import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { API_URL } from '../../app.component';
import { PolozeniIspiti } from './polozeni-ispiti.model';
import { Observable } from 'rxjs';
type EntityResponseType = HttpResponse<PolozeniIspiti>;
type EntityArrayResponseType = HttpResponse<PolozeniIspiti[]>;


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
getIspitByStudent(id:number){
    return this.http.get(API_URL + 'polozeni_ispiti/'+id);   
}
delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(API_URL+"polozeni_ispiti/ispit/"+id, { observe: 'response' });
}
create(ispit: PolozeniIspiti): Observable<EntityResponseType> {
    return this.http.post<PolozeniIspiti>(API_URL+"polozeni_ispiti", ispit, { observe: 'response' });
}
update(ispit: PolozeniIspiti,id:number): Observable<EntityResponseType> {
    return this.http.put<PolozeniIspiti>(API_URL+"polozeni_ispiti/ispit/"+id, ispit, { observe: 'response' });
}
find(id: number) {
    return this.http.get<PolozeniIspiti>(API_URL+"polozeni_ispiti/ispit/"+id);
}
}