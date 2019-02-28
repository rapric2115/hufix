import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDetailsMobileComponent } from './form-details-mobile.component';

describe('FormDetailsMobileComponent', () => {
  let component: FormDetailsMobileComponent;
  let fixture: ComponentFixture<FormDetailsMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDetailsMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDetailsMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
