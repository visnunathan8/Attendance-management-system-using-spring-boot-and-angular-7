import { TestBed } from '@angular/core/testing';

import { AttendancedetailService } from './attendancedetail.service';

describe('AttendancedetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AttendancedetailService = TestBed.get(AttendancedetailService);
    expect(service).toBeTruthy();
  });
});
