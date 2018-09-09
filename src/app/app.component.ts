import { Component } from '@angular/core';
import { Student } from './fakultet/studenti/student.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  student: Student;
  inputText: string="Unesi id studenta";
  constructor(){

  }
  title = 'fakultet';
}

export const API_URL = 'http://localhost:8080/';
