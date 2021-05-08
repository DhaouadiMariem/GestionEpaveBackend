import { TestBed } from '@angular/core/testing';

import { EpaveService } from './epave.service';

describe('EpaveService', () => {
  let service: EpaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
