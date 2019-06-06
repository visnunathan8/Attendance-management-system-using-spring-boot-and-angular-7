import { TestBed } from '@angular/core/testing';

import { LeavedetailService } from './leavedetail.service';

describe('LeavedetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LeavedetailService = TestBed.get(LeavedetailService);
    expect(service).toBeTruthy();
  });
});
