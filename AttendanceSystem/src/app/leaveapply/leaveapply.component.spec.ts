import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveapplyComponent } from './leaveapply.component';

describe('LeaveapplyComponent', () => {
  let component: LeaveapplyComponent;
  let fixture: ComponentFixture<LeaveapplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveapplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveapplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
