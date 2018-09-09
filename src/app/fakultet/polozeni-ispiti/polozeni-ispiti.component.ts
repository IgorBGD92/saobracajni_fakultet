import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { PolozeniIspiti } from './polozeni-ispiti.model';
import { Message, ConfirmationService } from 'primeng/api';
import { API_URL } from '../../app.component';
import { PolozeniIspitiService } from './polozeniIspitiService';
import { SelectItem } from 'primeng/api';
import { Student } from '../studenti/student.model';
import { StudentService } from '../studenti/studentService';
import { Predmet } from '../predmeti/predmet.model';
import { PredmetService } from '../predmeti/predmetService';



@Component({
  selector: 'app-polozeni-ispiti',
  templateUrl: './polozeni-ispiti.component.html',
  styleUrls: ['./polozeni-ispiti.component.css']
})
export class PolozeniIspitiComponent implements OnInit {

  displayDialog: boolean;


  ispit: PolozeniIspiti = new PolozeniIspiti();

  selectedPolozeniIspiti: PolozeniIspiti;
  msgs: Message[] = [];

  newPolozeniIspiti: boolean;

  ispiti: PolozeniIspiti[];

  cols: any[];

  niz: any[];

  studenti: Student[];
  selectedStudent: Student;

  predmeti: Predmet[];
  selectedPredmet: Predmet;

  cities1: SelectItem[];
  student1:Student;
  
  ispitiId: PolozeniIspiti[];

  constructor(private ispitiService: PolozeniIspitiService, private http: HttpClient, private confirmationService: ConfirmationService, private studentService: StudentService, private predmetService: PredmetService) { }


  ngOnInit() {
    this.ispitiService.getPolozeniIspitiSmall().subscribe((ispiti: PolozeniIspiti[]) => {
      this.ispiti = ispiti;
    })
    this.studentService.getStudentsSmall().subscribe((students: Student[]) => {
      this.studenti = students;
    })
    this.predmetService.getPredmetiSmall().subscribe((predmeti: Predmet[]) => {
      this.predmeti = predmeti;
    })
  
  

    this.cols = [
      // { field: 'polozeniIspitId', header: 'ID' },
      // { field: 'student', subfield: 'name', subfield2: 'surname', header: 'Student' },
      { field: 'predmet', subfield: 'naziv', header: 'Predmet' },
      { field: 'ocena', header: 'Ocena' },
      { field: 'datumPolaganja', header: 'Datum polaganja' },
      

    ];
 
  }
  fetchData() {
    this.ispitiService.getPolozeniIspitiSmall().subscribe((ispiti: PolozeniIspiti[]) => {
      this.ispiti = ispiti;
    });
}

  showDialogToAdd() {
    this.newPolozeniIspiti = true;
    this.ispit = new PolozeniIspiti();
    this.selectedPredmet = null;
    this.selectedStudent = null;
    this.displayDialog = true;
  }

  save() {
    let ispiti = [...this.ispiti];
    if (this.newPolozeniIspiti) {
      this.ispit.student = this.selectedStudent;
      this.ispit.predmet = this.selectedPredmet;
      this.http.post(API_URL + "polozeni_ispiti", this.ispit).subscribe(data => {this.fetchData()});
      this.msgs = [{ severity: 'info', summary: 'Dodavanje uspesno!', detail: 'Student sacuvan!' }];

    }
    else{
    this.ispit.student = this.selectedStudent;
    this.ispit.predmet = this.selectedPredmet;
      this.http.put(API_URL + '/polozeni_ispiti' + "/ispit/" + this.ispit.polozeniIspitId, this.ispit).subscribe(data => {this.fetchData()});
    this.msgs = [{ severity: 'info', summary: 'Izmena uspesna!', detail: 'Polozeni ispit je izmenjen!' }];
  
    this.ispiti = ispiti;
    this.ispit = null;

  }

  }

  confirm() {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.http.delete(API_URL + 'polozeni_ispiti' + "/ispit/" + this.ispit.polozeniIspitId).subscribe(data => {this.fetchData()});
        this.msgs = [{ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' }];
        this.displayDialog = false;


      },
      reject: () => {
        this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
        this.displayDialog = false;
      }
    });
  }

  onRowSelect(event) {
    this.newPolozeniIspiti = false;
    this.ispit = this.clonePredmet(event.data);
    this.displayDialog = true;
    this.selectedPredmet = this.ispit.predmet;
    this.selectedStudent = this.ispit.student;
  }

  clonePredmet(c: PolozeniIspiti): PolozeniIspiti {
    let ispit = new PolozeniIspiti();
    for (let prop in c) {
      ispit[prop] = c[prop];
    }
    return ispit;
  }

}