import { TestBed } from '@angular/core/testing';

import { ZajednickiService } from './zajednicki.service';

describe('ZajednickiService', () => {
  let service: ZajednickiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZajednickiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
