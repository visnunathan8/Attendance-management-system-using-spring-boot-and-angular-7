import { TestBed } from '@angular/core/testing';

import { DepartmentdetailService } from './departmentdetail.service';

describe('DepartmentdetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DepartmentdetailService = TestBed.get(DepartmentdetailService);
    expect(service).toBeTruthy();
  });
});
