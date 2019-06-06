import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptattenComponent } from './deptatten.component';

describe('DeptattenComponent', () => {
  let component: DeptattenComponent;
  let fixture: ComponentFixture<DeptattenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeptattenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptattenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
