import { Component, OnInit } from '@angular/core';
import { Report } from '../report.model';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../../app.component';
import { PolozeniIspiti } from '../../polozeni-ispiti/polozeni-ispiti.model';

@Component({
  selector: 'app-general-report',
  templateUrl: './general-report.component.html',
  styleUrls: ['./general-report.component.css']
})
export class GeneralReportComponent implements OnInit {

  id:number;  
  response1: Report[];
  response2: PolozeniIspiti[];
  cols: any[];
  reports:Report[];
  rowGroupMetadata:any;


  constructor(private http: HttpClient) { }

  ngOnInit() {
    
    this.http.get(API_URL + 'report').subscribe((response1: Report[])=>{
          this.response1= response1;
          console.log(this.response1);
        })
        this.http.get(API_URL + 'report').subscribe((reports: Report[])=>{
          this.reports= reports;
          this.updateRowGroupMetaData();
      });
      this.cols = [
        { field: 'student', subfield: 'name', subfield2: 'surname', header: 'Predmet' },
        { field: 'predmet', subfield: 'naziv', header: 'Predmet' },
        { field: 'ocena', header: 'Ocena' },
        { field: 'datumPolaganja', header: 'Datum polaganja' },
  
      ];
  }
  
  onSort() {
    this.updateRowGroupMetaData();
}
  obrisi(id:number,polozeniIspitId:number){
    console.log(id);
    this.http.delete(API_URL+'studenti/'+id+'/polozeni_ispiti/'+polozeniIspitId).subscribe();
    console.log('Ispit obrisan!'); 
  }
  updateRowGroupMetaData() {
    this.rowGroupMetadata = {};
    if (this.reports) {
        for (let i = 0; i < this.reports.length; i++) {
            let rowData = this.reports[i];
            let ime = rowData.ime;
            if (i == 0) {
                this.rowGroupMetadata[ime] = { index: 0, size: 1 };
            }
            else {
                let previousRowData = this.reports[i - 1];
                let previousRowGroup = previousRowData.ime;
                if (ime === previousRowGroup)
                    this.rowGroupMetadata[ime].size++;
                else
                    this.rowGroupMetadata[ime] = { index: i, size: 1 };
            }
        }
    }
}
brojIspita():number{
  
return 1;
}

}

