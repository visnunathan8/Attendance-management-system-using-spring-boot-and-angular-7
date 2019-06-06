import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminempComponent } from './adminemp.component';

describe('AdminempComponent', () => {
  let component: AdminempComponent;
  let fixture: ComponentFixture<AdminempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
