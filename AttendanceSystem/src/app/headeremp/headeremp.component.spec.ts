import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderempComponent } from './headeremp.component';

describe('HeaderempComponent', () => {
  let component: HeaderempComponent;
  let fixture: ComponentFixture<HeaderempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
