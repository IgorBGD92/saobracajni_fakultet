import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../../../app.component';

@Component({
  selector: 'app-report-predmet-id',
  templateUrl: './report-predmet-id.component.html',
  styleUrls: ['./report-predmet-id.component.css']
})
export class ReportPredmetIdComponent implements OnInit {
  id:number;
  response1: number;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  search(){
    
    this.http.get(API_URL+'reportProsek/'+this.id).subscribe((response: number)=>{
      this.response1= response;
      console.log(this.response1);
    })
  }
}
