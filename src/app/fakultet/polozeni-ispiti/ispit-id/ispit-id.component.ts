import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PolozeniIspiti } from '../polozeni-ispiti.model';
import { API_URL } from '../../../app.component';

@Component({
  selector: 'app-ispit-id',
  templateUrl: './ispit-id.component.html',
  styleUrls: ['./ispit-id.component.css']
})
export class IspitIdComponent implements OnInit {

  id:number;
  response1: PolozeniIspiti[];
  response: PolozeniIspiti[];

  constructor(private http: HttpClient) { }

  ngOnInit() { 
  }
  search(){
    this.http.get(API_URL+'/polozeni_ispiti/'+this.id).subscribe((response: PolozeniIspiti[])=>{
      this.response= response;
      console.log(this.response);
    })
  }
  obrisi(id:number,id1:number){
    console.log(id);
    this.http.delete(API_URL+'studenti/'+id+'/polozeni_ispiti/'+id1).subscribe();
    console.log('Ispit obrisan!');
  }

}
