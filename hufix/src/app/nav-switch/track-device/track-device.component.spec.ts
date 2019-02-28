import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackDeviceComponent } from './track-device.component';

describe('TrackDeviceComponent', () => {
  let component: TrackDeviceComponent;
  let fixture: ComponentFixture<TrackDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
