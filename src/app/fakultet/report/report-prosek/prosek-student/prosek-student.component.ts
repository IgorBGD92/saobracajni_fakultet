import { Component, OnInit } from '@angular/core';
import { API_URL } from '../../../../app.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-prosek-student',
  templateUrl: './prosek-student.component.html',
  styleUrls: ['./prosek-student.component.css']
})
export class ProsekStudentComponent implements OnInit {

  id:number;
  response1: number;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  search(){
    
    this.http.get(API_URL+'studenti/'+this.id+'/prosek').subscribe((response: number)=>{
      this.response1= response;
      console.log(this.response1);
    })
  }
}
