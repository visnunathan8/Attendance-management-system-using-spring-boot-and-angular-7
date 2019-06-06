import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayempComponent } from './holidayemp.component';

describe('HolidayempComponent', () => {
  let component: HolidayempComponent;
  let fixture: ComponentFixture<HolidayempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolidayempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
