import { TestBed } from '@angular/core/testing';

import { AdStreamService } from './ad-stream.service';

describe('AdStreamService', () => {
  let service: AdStreamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdStreamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
