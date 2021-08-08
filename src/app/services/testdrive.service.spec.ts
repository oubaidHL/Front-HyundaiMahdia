import { TestBed } from '@angular/core/testing';

import { TestdriveService } from './testdrive.service';

describe('TestdriveService', () => {
  let service: TestdriveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestdriveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
