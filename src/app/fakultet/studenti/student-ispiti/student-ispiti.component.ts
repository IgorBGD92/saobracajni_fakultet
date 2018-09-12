import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Student } from '../student.model';
import { StudentService } from '../studentService';
import { filter } from 'rxjs/operators';
import { PolozeniIspiti } from '../../polozeni-ispiti/polozeni-ispiti.model';
import { PolozeniIspitiService } from '../../polozeni-ispiti/polozeniIspitiService';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../../app.component';

@Component({
  selector: 'app-student-ispiti',
  templateUrl: './student-ispiti.component.html',
  styleUrls: ['./student-ispiti.component.css']
})
export class StudentIspitiComponent implements OnInit {

  student=new Student;
  
  ispit: PolozeniIspiti = new PolozeniIspiti();
  cols: any[];
 addNew:boolean=true;
  ispiti: PolozeniIspiti[];
  prosecnaOcena:number;
  


  constructor(private http:HttpClient,private activatedRoute: ActivatedRoute, private studentService: StudentService, private router: Router, private ispitiService: PolozeniIspitiService) { }

  ngOnInit() {


    this.activatedRoute.params.subscribe(param => {
      this.student.id = +param['id'];
      console.log(this.student.id);
    });
    this.studentService.find(this.student.id).subscribe((student: Student) => {
      this.student = student;
    })
    this.ispitiService.getIspitByStudent(this.student.id).subscribe((ispiti: PolozeniIspiti[]) => {
      this.ispiti = ispiti;
    })
    this.cols = [
     
      { field: 'predmet', subfield: 'naziv', header: 'Predmet' },
      { field: 'ocena', header: 'Ocena' },
      { field: 'datumPolaganja', header: 'Datum polaganja' },


    ];
    console.log(this.student);

  }
 
  prosek(){
    this.http.get(API_URL+"studenti/"+this.student.id+"/prosek").subscribe((prosecnaOcena:number)=>{
      this.prosecnaOcena=prosecnaOcena;
    }); 
  }
  previousState() {
    window.history.back();
  }
  delete(id:number) {

    if (window.confirm('Da li sigurno zelite da obrisete ovaj ispit?')) {
        // this.student = event.newData;
        this.ispitiService.delete( id).subscribe(); 
        console.log("delete confirmed"+id)
        this.previousState();
        // event.confirm.resolve(event.newData);
      } 
}
toggle(ispitId:number){
  this.ispit.polozeniIspitId=ispitId;
  this.addNew=!this.addNew;
  console.log(this.ispit.polozeniIspitId)
}
toggle1(){
  this.addNew=!this.addNew;
  
}

}
