import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProsekStudentComponent } from './prosek-student.component';

describe('ProsekStudentComponent', () => {
  let component: ProsekStudentComponent;
  let fixture: ComponentFixture<ProsekStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProsekStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProsekStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
