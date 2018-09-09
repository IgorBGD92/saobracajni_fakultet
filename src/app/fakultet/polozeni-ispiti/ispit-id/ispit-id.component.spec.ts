import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IspitIdComponent } from './ispit-id.component';

describe('IspitIdComponent', () => {
  let component: IspitIdComponent;
  let fixture: ComponentFixture<IspitIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IspitIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IspitIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
