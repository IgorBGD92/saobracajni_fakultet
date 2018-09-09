import { Component, OnInit, Input } from '@angular/core';
import { Student } from './studenti/student.model';
import{HttpClientModule, HttpClient} from '@angular/common/http';
import { API_URL } from '../app.component';

@Component({
  selector: 'app-fakultet',
  templateUrl: './fakultet.component.html',
  styleUrls: ['./fakultet.component.css']
})
export class FakultetComponent implements OnInit {

  @Input('student') student: Student;
  id:number;
  response: Student;
  constructor(private http: HttpClient) {
   
   }

  ngOnInit() {
    // let obs=this.http.get('http://localhost:8080/studenti');
   // return http.get<Student>('http://localhost:8080/studenti')
    // obs.subscribe(()=>console.log('Got the response'));
    //this.studentService.getAll().subscribe(()=>console.log('Got the response'));
   
  }
  
  
}
