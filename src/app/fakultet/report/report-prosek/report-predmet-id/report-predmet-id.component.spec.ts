import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportPredmetIdComponent } from './report-predmet-id.component';

describe('ReportPredmetIdComponent', () => {
  let component: ReportPredmetIdComponent;
  let fixture: ComponentFixture<ReportPredmetIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportPredmetIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportPredmetIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
