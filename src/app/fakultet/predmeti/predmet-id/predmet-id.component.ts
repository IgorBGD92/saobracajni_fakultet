import { Component, OnInit } from '@angular/core';
import { Predmet } from '../predmet.model';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../../app.component';

@Component({
  selector: 'app-predmet-id',
  templateUrl: './predmet-id.component.html',
  styleUrls: ['./predmet-id.component.css']
})
export class PredmetIdComponent implements OnInit {

  id:number;
  response: Predmet;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  } 
  search(){
    this.http.get(API_URL+'/predmeti/'+this.id).subscribe((response: Predmet)=>{
      this.response= response;
      console.log(this.response);
    })
  }
  obrisi(id:number){
    console.log(id);
    this.http.delete(API_URL+'predmeti/'+id).subscribe();
    console.log('Predmet obrisan!');
  }

}
