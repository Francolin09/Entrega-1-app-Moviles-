import { TestBed } from '@angular/core/testing';

import { LogeosService } from './logeos.service';

describe('LogeosService', () => {
  let service: LogeosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogeosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
