import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredmetIdComponent } from './predmet-id.component';

describe('PredmetIdComponent', () => {
  let component: PredmetIdComponent;
  let fixture: ComponentFixture<PredmetIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredmetIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredmetIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
