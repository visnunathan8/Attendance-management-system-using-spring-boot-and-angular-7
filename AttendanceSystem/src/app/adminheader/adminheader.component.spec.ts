import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminheaderComponent } from './adminheader.component';

describe('AdminheaderComponent', () => {
  let component: AdminheaderComponent;
  let fixture: ComponentFixture<AdminheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
