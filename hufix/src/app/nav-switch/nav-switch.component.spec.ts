import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSwitchComponent } from './nav-switch.component';

describe('NavSwitchComponent', () => {
  let component: NavSwitchComponent;
  let fixture: ComponentFixture<NavSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
