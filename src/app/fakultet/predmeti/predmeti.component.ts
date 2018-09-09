import { OnInit, Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Message, ConfirmationService } from "primeng/api";
import { API_URL } from "../../app.component";
import { Predmet } from "./predmet.model";
import { PredmetService } from "./predmetService";

@Component({
  selector: 'app-predmeti',
  templateUrl: './predmeti.component.html',
  styleUrls: ['./predmeti.component.css']
})
export class PredmetiComponent implements OnInit {

  displayDialog: boolean;

  predmet: Predmet = new Predmet();

  selectedPredmet: Predmet;
  msgs: Message[] = [];

  newPredmet: boolean;

  predmeti: Predmet[];

  cols: any[];

  constructor(private predmetService: PredmetService, private http: HttpClient, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.predmetService.getPredmetiSmall().subscribe((predmeti: Predmet[]) => {
      this.predmeti = predmeti;
    });

    this.cols = [
      { field: 'predmetId', header: 'ID' },
      { field: 'naziv', header: 'Naziv' },
      { field: 'profesor', header: 'Profesor' },
      { field: 'godinaSlusanja', header: 'Godina slusanja' },
      { field: 'semestar', header: 'Semestar' },

    ];
  }

  showDialogToAdd() {
    this.newPredmet = true;
    this.predmet = new Predmet();
    this.displayDialog = true;
  }

  save() {
    let predmeti = [...this.predmeti];
    if (this.newPredmet) {

      this.http.post(API_URL + "predmeti", this.predmet).subscribe(data => { this.fetchData() });
      this.msgs = [{ severity: 'info', summary: 'Uspeh!', detail: 'Predmet upisan!' }];
    }
    else
      this.http.put(API_URL + '/predmeti/' + this.predmet.predmetId, this.predmet).subscribe(data => { this.fetchData() });

    this.predmeti = predmeti;
    this.predmet = null;
    this.msgs = [{ severity: 'info', summary: 'Uspeh!', detail: 'Predmet izmenjen!' }];
    // this.displayDialog = false;

  }
  fetchData() {
    this.predmetService.getPredmetiSmall().subscribe((predmeti: Predmet[]) => {
      this.predmeti = predmeti;
    });
  }

  confirm() {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.http.delete(API_URL + 'predmeti/' + this.selectedPredmet.predmetId).subscribe(data => { this.fetchData() });
        this.msgs = [{ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' }];
        this.displayDialog = false;
        this.ngOnInit();

      },
      reject: () => {
        this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
        this.displayDialog = false;
      }
    });
  }

  onRowSelect(event) {
    this.newPredmet = false;
    this.predmet = this.clonePredmet(event.data);
    this.displayDialog = true;
  }

  clonePredmet(c: Predmet): Predmet {
    let predmet = new Predmet();
    for (let prop in c) {
      predmet[prop] = c[prop];
    }
    return predmet;
  }
}
