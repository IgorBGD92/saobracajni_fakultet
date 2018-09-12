import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentIspitDodajComponent } from './student-ispit-dodaj.component';

describe('StudentIspitDodajComponent', () => {
  let component: StudentIspitDodajComponent;
  let fixture: ComponentFixture<StudentIspitDodajComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentIspitDodajComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentIspitDodajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
