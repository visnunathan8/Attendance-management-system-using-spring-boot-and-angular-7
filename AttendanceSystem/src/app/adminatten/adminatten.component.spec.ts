import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminattenComponent } from './adminatten.component';

describe('AdminattenComponent', () => {
  let component: AdminattenComponent;
  let fixture: ComponentFixture<AdminattenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminattenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminattenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
