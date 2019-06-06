import { TestBed } from '@angular/core/testing';

import { UseraccountService } from './useraccount.service';

describe('UseraccountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UseraccountService = TestBed.get(UseraccountService);
    expect(service).toBeTruthy();
  });
});
