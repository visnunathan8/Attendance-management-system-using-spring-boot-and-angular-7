import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddemployeeComponent } from './addemployee.component';

describe('AddemployeeComponent', () => {
  let component: AddemployeeComponent;
  let fixture: ComponentFixture<AddemployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddemployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
