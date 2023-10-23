import { TestBed } from '@angular/core/testing';

import { FindCEPService } from './find-cep.service';

describe('FindCEPService', () => {
  let service: FindCEPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindCEPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
