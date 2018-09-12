import { OnInit, Component } from "@angular/core";
import { HttpClient, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Message, ConfirmationService, LazyLoadEvent } from "primeng/api";
import { StudentService } from "./studentService";
import { Student } from "./student.model";
import { API_URL } from "../../app.component";
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';



@Component({
    selector: 'app-studenti',
    templateUrl: './studenti.component.html',
    styleUrls: ['./studenti.component.css']
})
export class StudentiComponent implements OnInit {
    displayDialog: boolean;

    showIspiti: boolean;

    student: Student = new Student();

    page:number=0;
    size:number=5;
    //  pages:number;

     datasource: Student[];

     totalRecords: number;

    selectedStudent: Student;

    loading: boolean;
    
    msgs: Message[] = [];

    newStudent: boolean;

    students: Student[];

    cols: any[];
 
    id:number;

    


    constructor(private studentService: StudentService, private http: HttpClient, private confirmationService: ConfirmationService) { }
 
    ngOnInit() {
        // this.http.get(API_URL + 'studenti').subscribe((students: Student[]) => {
        //     this.students = students;
        // });
    //  this.getStudents();
     
     this.getStudents();
    this.loading = true;
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
   
    // fetchData() {
    //     this.http.get(API_URL + 'studenti').subscribe((students: Student[]) => {
    //         this.students = students;
    //     });
    // }

    previousState() {
        window.history.back();
      }

    delete(id:number) {

        if (window.confirm('Da li ste sigurni da zelite da obrisete ovog studenta?')) {
            // this.student = event.newData;
            this.studentService.delete( id).subscribe(); 
            console.log("delete confirmed"+id)
            this.previousState();
            // event.confirm.resolve(event.newData);
          } 

       
    }
    getStudents(){
        this.studentService.getStudents(this.page,this.size).subscribe(
            students=>{
                this.datasource=students['content'];
                this.totalRecords=students['totalElements'];
                console.log(this.datasource)
            })
        }
    
                 
    loadStudentsLazy(event: LazyLoadEvent) {
        this.loading = true;

        //in a real application, make a remote request to load data using state metadata from event
        this.size= event.rows;
        this.page=event.first/event.rows ;
        this.getStudents();
        //event.sortField = Field name to sort with
        //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
        //filters: FilterMetadata object having field as key and filter value, filter matchMode as value

        //imitate db connection over a network
        setTimeout(() => {
            if (this.datasource) {
                this.students = this.datasource;
                this.loading = false;
            }
        }, 1000);
    }  
   
}



