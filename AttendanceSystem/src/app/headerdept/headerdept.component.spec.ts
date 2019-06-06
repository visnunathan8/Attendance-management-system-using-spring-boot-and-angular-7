import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderdeptComponent } from './headerdept.component';

describe('HeaderdeptComponent', () => {
  let component: HeaderdeptComponent;
  let fixture: ComponentFixture<HeaderdeptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderdeptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderdeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
