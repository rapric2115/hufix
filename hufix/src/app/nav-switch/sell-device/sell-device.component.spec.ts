import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellDeviceComponent } from './sell-device.component';

describe('SellDeviceComponent', () => {
  let component: SellDeviceComponent;
  let fixture: ComponentFixture<SellDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
