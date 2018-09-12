import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import{HttpClientModule, HttpClient} from '@angular/common/http';
import {TabMenuModule} from 'primeng/tabmenu';
import {MenuItem} from 'primeng/api';
import {TableModule} from 'primeng/table';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {CalendarModule} from 'primeng/calendar';
import {DataScrollerModule} from 'primeng/datascroller';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { FakultetComponent } from './fakultet/fakultet.component';
import { StudentiComponent } from './fakultet/studenti/studenti.component';
import { AppRoutingModule } from './/app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PredmetiComponent } from './fakultet/predmeti/predmeti.component';
import { PolozeniIspitiComponent } from './fakultet/polozeni-ispiti/polozeni-ispiti.component';
import { IspitIdComponent } from './fakultet/polozeni-ispiti/ispit-id/ispit-id.component';


import { PredmetIdComponent } from './fakultet/predmeti/predmet-id/predmet-id.component';
import { ReportComponent } from './fakultet/report/report.component';
import { GeneralReportComponent } from './fakultet/report/general-report/general-report.component';
import { ReportPredmetComponent } from './fakultet/report/report-predmet/report-predmet.component';
import { ReportProsekComponent } from './fakultet/report/report-prosek/report-prosek.component';
import { ProsekStudentComponent } from './fakultet/report/report-prosek/prosek-student/prosek-student.component';
import { ReportPredmetIdComponent } from './fakultet/report/report-prosek/report-predmet-id/report-predmet-id.component';
import {ButtonModule} from 'primeng/button';
import {ConfirmationService} from 'primeng/api';
import {MessagesModule, DialogModule } from 'primeng/primeng';
import { DataTableModule } from 'primeng/primeng';
import { StudentService } from './fakultet/studenti/studentService';
import { PredmetService } from './fakultet/predmeti/predmetService';
import { PolozeniIspitiService } from './fakultet/polozeni-ispiti/polozeniIspitiService';
import {DropdownModule} from 'primeng/dropdown';
import {AccordionModule} from 'primeng/accordion';
import {MatMenuModule} from '@angular/material/menu';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { Ng2CompleterModule } from "ng2-completer";
import { StudentUpdateComponent } from './fakultet/studenti/student-update/student-update.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { StudentIspitiComponent } from './fakultet/studenti/student-ispiti/student-ispiti.component';
import { StudentIspitDodajComponent } from './fakultet/studenti/student-ispit-dodaj/student-ispit-dodaj.component';






@NgModule({
  declarations: [
    AppComponent,
    FakultetComponent,
    StudentiComponent,
    PageNotFoundComponent,
    PredmetiComponent,
    PolozeniIspitiComponent,
    
    IspitIdComponent,
    
    PredmetIdComponent,
    
    ReportComponent,
    GeneralReportComponent,
    ReportPredmetComponent,
    ReportProsekComponent,
    ProsekStudentComponent,
    ReportPredmetIdComponent,
    StudentUpdateComponent,
    StudentIspitiComponent,
    StudentIspitDodajComponent,
    
    
    
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TableModule,
    ConfirmDialogModule,
    ButtonModule,
    MessagesModule,
    BrowserAnimationsModule,
    DataTableModule,
    DialogModule,
    CalendarModule,
    DropdownModule,
    DataScrollerModule,
    AccordionModule,
    Ng2SmartTableModule,
    Ng2CompleterModule,
    AngularFontAwesomeModule,
    NgbModule

    
    
    
  ],
  providers: [ConfirmationService, StudentService,PredmetService,PolozeniIspitiService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    
  }
  ngOnInit(){
    
  }
}
