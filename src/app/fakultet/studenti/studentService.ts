import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { API_URL } from '../../app.component';
import { Student } from './student.model';

@Injectable()
export class StudentService {
    students:Student[];

    constructor(private http: HttpClient) {}

    getStudentsSmall() {
        return  this.http.get(API_URL + 'studenti'); 
}}