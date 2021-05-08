import { TestBed } from '@angular/core/testing';

import { RapportPreliminaireService } from './rapport-preliminaire.service';

describe('RapportPreliminaireService', () => {
  let service: RapportPreliminaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RapportPreliminaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
