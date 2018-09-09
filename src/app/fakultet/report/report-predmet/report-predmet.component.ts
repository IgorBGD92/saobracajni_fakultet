import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { API_URL } from '../../../app.component';
import { Student } from '../../studenti/student.model';

@Component({
  selector: 'app-report-predmet',
  templateUrl: './report-predmet.component.html',
  styleUrls: ['./report-predmet.component.css']
})
export class ReportPredmetComponent implements OnInit {

  
  
  predmet:string;
 
  response1: Student[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  search(){
    let params = new HttpParams()
                .set('predmet', this.predmet)
    this.http.get(API_URL+'reportPredmet',{params}).subscribe((response: Student[])=>{
      this.response1= response;
      console.log(this.response1);
    })
  }
  obrisi(id:number){
    console.log(id);
    this.http.delete(API_URL+'studenti/'+id).subscribe();
    console.log('Student obrisan!');
  }
}
