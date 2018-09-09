import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportPredmetComponent } from './report-predmet.component';

describe('ReportPredmetComponent', () => {
  let component: ReportPredmetComponent;
  let fixture: ComponentFixture<ReportPredmetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportPredmetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportPredmetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
