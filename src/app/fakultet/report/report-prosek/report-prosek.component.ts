import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { API_URL } from '../../../app.component';

@Component({
  selector: 'app-report-prosek',
  templateUrl: './report-prosek.component.html',
  styleUrls: ['./report-prosek.component.css']
})
export class ReportProsekComponent implements OnInit {

  predmet:string;
 id:number;
  response1: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  search(){
    let params = new HttpParams()
                .set('predmet', this.predmet)
    this.http.get(API_URL+'reportProsek',{params}).subscribe((response: any)=>{
      this.response1= response;
      console.log(this.response1);
    })
  }
  
} 
