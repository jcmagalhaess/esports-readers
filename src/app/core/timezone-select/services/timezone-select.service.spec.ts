import { TestBed } from '@angular/core/testing';

import { TimezoneSelectService } from './timezone-select.service';

describe('TimezoneSelectService', () => {
  let service: TimezoneSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimezoneSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
