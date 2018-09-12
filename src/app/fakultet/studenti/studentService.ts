import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { API_URL } from '../../app.component';
import { Student } from './student.model';
import { Observable } from 'rxjs';

type EntityResponseType = HttpResponse<Student>;
type EntityArrayResponseType = HttpResponse<Student[]>;

@Injectable({ providedIn: 'root' })
export class StudentService {
   
    students:Student[];

    constructor(private http: HttpClient) {}

    getStudentsSmall() {
        return this.http.get(API_URL+"studenti")
                    ;
    }

    create(student: Student): Observable<EntityResponseType> {
        return this.http.post<Student>(API_URL+"studenti", student, { observe: 'response' });
    }
   
 getAll():Observable<EntityResponseType>{
        return this.http.get<Student>(API_URL+"studenti",{observe:'response'});
    }

    getStudents(page:number,size:number){
        return this.http.get<Student>(API_URL+"studenti?page="+page+"&size="+size);
    }
    update(student: Student,id:number): Observable<EntityResponseType> {
        return this.http.put<Student>(API_URL+"studenti/"+id, student, { observe: 'response' });
    }

    find(id: number) {
        return this.http.get<Student>(API_URL+"studenti/"+id);
    }

    

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<Student>(API_URL+"studenti/"+id, { observe: 'response' });
    }
    
}