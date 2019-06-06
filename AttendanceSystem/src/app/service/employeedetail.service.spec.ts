import { TestBed } from '@angular/core/testing';

import { EmployeedetailService } from './employeedetail.service';

describe('EmployeedetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeedetailService = TestBed.get(EmployeedetailService);
    expect(service).toBeTruthy();
  });
});
