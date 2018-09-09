import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FakultetComponent } from './fakultet/fakultet.component';
import { StudentiComponent } from './fakultet/studenti/studenti.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PredmetiComponent } from './fakultet/predmeti/predmeti.component';
import { AppComponent } from './app.component';
import { PolozeniIspitiComponent } from './fakultet/polozeni-ispiti/polozeni-ispiti.component';
import { IspitIdComponent } from './fakultet/polozeni-ispiti/ispit-id/ispit-id.component';
import { PredmetIdComponent } from './fakultet/predmeti/predmet-id/predmet-id.component';
import { ReportComponent } from './fakultet/report/report.component';
import { GeneralReportComponent } from './fakultet/report/general-report/general-report.component';
import { ReportPredmetComponent } from './fakultet/report/report-predmet/report-predmet.component';
import { ReportProsekComponent } from './fakultet/report/report-prosek/report-prosek.component';


const routes: Routes=[
  {path:'',redirectTo: '/fakultet',pathMatch:'full'},
  //{path:'home', component:AppComponent},
  {path:'fakultet', component:FakultetComponent},
  {path:'studenti', component: StudentiComponent,
  children:[
    {path:'polozeni_ispiti', component: PolozeniIspitiComponent}
  ]
      },
  {path:'predmeti', component: PredmetiComponent},
  {path:'report', component:ReportComponent,
  children:[
    {path:'general_report', component:GeneralReportComponent},
    {path:'report_predmet', component:ReportPredmetComponent},
    {path:'report_prosek', component:ReportProsekComponent}
  ]},
  {path: '**',component: PageNotFoundComponent},
  //{path:'polozeniIspiti', component}
];

@NgModule({

  imports:[RouterModule.forRoot(routes)],

  exports: [ RouterModule ],
  
  
  declarations: []
})
export class AppRoutingModule { }
