import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportProsekComponent } from './report-prosek.component';

describe('ReportProsekComponent', () => {
  let component: ReportProsekComponent;
  let fixture: ComponentFixture<ReportProsekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportProsekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportProsekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
