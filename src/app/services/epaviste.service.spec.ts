import { TestBed } from '@angular/core/testing';

import { EpavisteService } from './epaviste.service';

describe('EpavisteService', () => {
  let service: EpavisteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpavisteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
