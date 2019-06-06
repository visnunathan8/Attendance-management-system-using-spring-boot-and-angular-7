import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveapproveComponent } from './leaveapprove.component';

describe('LeaveapproveComponent', () => {
  let component: LeaveapproveComponent;
  let fixture: ComponentFixture<LeaveapproveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveapproveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveapproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
