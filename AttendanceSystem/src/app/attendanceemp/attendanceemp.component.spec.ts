import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceempComponent } from './attendanceemp.component';

describe('AttendanceempComponent', () => {
  let component: AttendanceempComponent;
  let fixture: ComponentFixture<AttendanceempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendanceempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
