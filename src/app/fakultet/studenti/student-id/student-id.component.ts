import { Component, OnInit } from '@angular/core';
import { API_URL } from '../../../app.component';
import { Student } from '../student.model';
import { HttpClient } from '@angular/common/http';
import { ConfirmationService, Message } from 'primeng/api';


@Component({
  selector: 'app-student-id',
  templateUrl: './student-id.component.html',
  styleUrls: ['./student-id.component.css'],
})
export class StudentIdComponent implements OnInit {

  id:number; 
  response: Student;
  msgs: Message[] = [];
  value: string="asdasd";

  constructor(private http: HttpClient,private confirmationService: ConfirmationService) { }

  ngOnInit() {
  } 
  search(){
    this.http.get(API_URL+'studenti/'+this.id).subscribe((response: Student)=>{
      this.response= response;
      console.log(this.response);
    })
  }
obrisi(){
  this.http.delete(API_URL+'studenti/'+this.id).subscribe();
  console.log('Student obrisan!');
}


confirm2() {
  this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.http.delete(API_URL+'studenti/'+this.id).subscribe();
          this.msgs = [{severity:'info', summary:'Confirmed', detail:'Record deleted'}];
      },
      reject: () => {
          this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
      }
  });
}
}






