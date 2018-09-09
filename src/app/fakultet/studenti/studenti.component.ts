import { OnInit, Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Message, ConfirmationService } from "primeng/api";
import { StudentService } from "./studentService";
import { Student } from "./student.model";
import { API_URL } from "../../app.component";



@Component({
    selector: 'app-studenti',
    templateUrl: './studenti.component.html',
    styleUrls: ['./studenti.component.css']
})
export class StudentiComponent implements OnInit {
    displayDialog: boolean;

    showIspiti:boolean;

    student: Student = new Student();

    selectedStudent: Student;
    msgs: Message[] = [];

    newStudent: boolean;

    students: Student[];

    cols: any[];
   

    constructor(private studentService: StudentService, private http: HttpClient, private confirmationService: ConfirmationService) { }

    ngOnInit() {
        this.studentService.getStudentsSmall().subscribe((students: Student[]) => {
            this.students = students;
        });

        this.cols = [
            { field: 'id', header: 'ID' },
            { field: 'name', header: 'Name' },
            { field: 'surname', header: 'Surname' },
            { field: 'code', header: 'Code' },
            { field: 'description', header: 'Description' },
            { field: 'creationDate', header: 'Creation date' },
            { field: 'lastUpdatedBy', header: 'Last updated by' },
            { field: 'lastUpdateDate', header: 'Last update date' },
            { field: 'createdBy', header: 'Created by' },
            { field: 'rowStatus', header: 'Row status' }
        ];
    }
    showDialogToAdd() {
        this.newStudent = true;
        this.student = new Student();
        this.displayDialog = true;
    }

    save() {
        let students = [...this.students];
        if (this.newStudent) {

            this.http.post(API_URL + "studenti", this.student).subscribe(data => { this.fetchData() });
            this.msgs = [{ severity: 'info', summary: 'Student upisan!', detail: ' ID studenta je ' + this.student.id }];

        }
        else{
            this.http.put(API_URL + '/studenti/' + this.student.id, this.student).subscribe(data => { this.fetchData() });

        this.students = students;
        this.student = null;
        this.msgs = [{ severity: 'info', summary: 'Uspeh!', detail: ' Student izmenjen!'}];
        // this.displayDialog = false;
        }
    }
    fetchData() {
        this.studentService.getStudentsSmall().subscribe((students: Student[]) => {
            this.students = students;
        });
    }



    confirm() {
        this.confirmationService.confirm({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            accept: () => {
                this.http.delete(API_URL + 'studenti/' + this.selectedStudent.id).subscribe(data => { this.fetchData() });
                this.msgs = [{ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' }];
                this.displayDialog = false;
                this.fetchData();

            },
            reject: () => {
                this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
                this.displayDialog = false;
            }
        });
    }

    onRowSelect(event) {
        this.newStudent = false;
        this.student = this.cloneStudent(event.data);
        this.displayDialog = true;
    }

    cloneStudent(c: Student): Student {
        let student = new Student();
        for (let prop in c) {
            student[prop] = c[prop];
        }
        return student;
    }
    show(){
        this.showIspiti=true;
        
    }
  
}
