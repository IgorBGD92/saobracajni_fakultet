import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../studentService';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { ConfirmationService } from 'primeng/api';
import { Student } from '../student.model';
import { PolozeniIspiti } from '../../polozeni-ispiti/polozeni-ispiti.model';
import { Observable } from 'rxjs';
import { PolozeniIspitiService } from '../../polozeni-ispiti/polozeniIspitiService';
import { Predmet } from '../../predmeti/predmet.model';
import { PredmetService } from '../../predmeti/predmetService';

@Component({
  selector: 'app-student-ispit-dodaj',
  templateUrl: './student-ispit-dodaj.component.html',
  styleUrls: ['./student-ispit-dodaj.component.css']
})
export class StudentIspitDodajComponent implements OnInit {
  student:Student=new Student();
  @Input() bla:number;
  ispit:PolozeniIspiti=new PolozeniIspiti();
  isSaving:boolean;
  predmet:Predmet=new Predmet();
  predmeti:Predmet[];
  id:number;


  constructor(private predmetService: PredmetService,private activatedRoute: ActivatedRoute,private studentService: StudentService, private http: HttpClient, private confirmationService: ConfirmationService,private ispitiService:PolozeniIspitiService) { }
 
  ngOnInit() {
    this.activatedRoute.params.subscribe(param => {
      
      if(this.bla){
      this.ispit.polozeniIspitId = this.bla;
      this.id=+param['id'];
      console.log(this.ispit.polozeniIspitId)
      }
      else{
        this.id=param['id'];
        console.log(this.id)
      }
      this.studentService.find(this.id).subscribe((student: Student) => {
        this.student = student;
        console.log(this.student.name)
      })
    });


    if(this.ispit.polozeniIspitId){
      this.ispitiService.find(this.ispit.polozeniIspitId).subscribe((ispit: PolozeniIspiti) => {
        this.ispit = ispit;
        this.predmet=this.ispit.predmet;
      });}

      this.predmetService.getPredmetiSmall().subscribe((predmeti: Predmet[]) => {
        this.predmeti = predmeti;
      })
      console.log(this.bla+"sdasdasd")
      
  }
  onSave(event) {
    console.log(event.data);
    console.log('Kliknut Save!');
    if (window.confirm('Da li ste sigurno da zelite da dodate ovaj ispit?')) {
      // this.student = event.newData;
      this.save();
      // event.confirm.resolve(event.newData);
    } else {
      window.alert('Invalid input data! Ispit was NOT created.');
    }
  }

  save() {  
    this.isSaving = true;
    if (this.ispit.polozeniIspitId) {
      console.log(JSON.stringify(this.ispit))
        this.subscribeToSaveResponse(this.ispitiService.update(this.ispit, this.ispit.polozeniIspitId));
    } else {
      this.ispit.student=this.student;
        this.ispit.predmet=this.predmet;
        console.log(this.ispit)
        this.subscribeToSaveResponse(this.ispitiService.create(this.ispit));
    }
}
private subscribeToSaveResponse(result: Observable<HttpResponse<PolozeniIspiti>>) {
  result.subscribe((res: HttpResponse<PolozeniIspiti>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
}

private onSaveSuccess() {
  this.isSaving = false;
  this.previousState();
}

private onSaveError() {
  this.isSaving = false;
}
previousState() {
  // window.history.back();
  window.location.reload();
}


}
