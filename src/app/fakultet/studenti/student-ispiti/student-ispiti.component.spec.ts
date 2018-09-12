import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentIspitiComponent } from './student-ispiti.component';

describe('StudentIspitiComponent', () => {
  let component: StudentIspitiComponent;
  let fixture: ComponentFixture<StudentIspitiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentIspitiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentIspitiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
