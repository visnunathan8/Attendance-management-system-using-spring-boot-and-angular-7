import { TestBed } from '@angular/core/testing';

import { HolidaydetailService } from './holidaydetail.service';

describe('HolidaydetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HolidaydetailService = TestBed.get(HolidaydetailService);
    expect(service).toBeTruthy();
  });
});
