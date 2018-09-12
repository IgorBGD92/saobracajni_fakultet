import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Message, ConfirmationService } from "primeng/api";
import { Student } from '../student.model';
import { StudentService } from '../studentService';
import { API_URL } from '../../../app.component';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {
  displayDialog: boolean;

  showIspiti: boolean;
  @Input()
  student: Student = new Student();

  selectedStudent: Student;
  msgs: Message[] = [];

  newStudent: boolean;

  isSaving:boolean;

  students: Student[];
  constructor(private activatedRoute: ActivatedRoute, private studentService: StudentService, private http: HttpClient, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    // this.http.get(API_URL + 'studenti').subscribe((students: Student[]) => {
    //     this.students = students;
    // });
    this.activatedRoute.params.subscribe(param => {
      if(param['id']){
      this.student.id = +param['id'];
      console.log(this.student.id);}
      else{
        console.log(this.student.id);

      }
    });
    if(this.student.id){
    this.studentService.find(this.student.id).subscribe((student: Student) => {
      this.student = student;
    });}

  }
  
  previousState() {
    window.history.back();
  }

  onSave(event) {
    console.log(event.data);
    console.log('Kliknut Save!');
    if (window.confirm('Are you sure you want to create this Student?')) {
      // this.student = event.newData;
      this.save();
      // event.confirm.resolve(event.newData);
    } else {
      window.alert('Invalid input data! Student was NOT created.');
    }
  }

  save() {
    this.isSaving = true;
    if (this.student.id) {
        this.subscribeToSaveResponse(this.studentService.update(this.student, this.student.id));
    } else {
        this.subscribeToSaveResponse(this.studentService.create(this.student));
    }
}
private subscribeToSaveResponse(result: Observable<HttpResponse<Student>>) {
  result.subscribe((res: HttpResponse<Student>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
}

private onSaveSuccess() {
  this.isSaving = false;
  this.previousState();
}

private onSaveError() {
  this.isSaving = false;
}
}
