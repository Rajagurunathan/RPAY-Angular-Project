import { TestBed } from '@angular/core/testing';

import { RpayapiService } from './rpayapi.service';

describe('RpayapiService', () => {
  let service: RpayapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RpayapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
