import { TestBed } from '@angular/core/testing';

import { SimpleToggleService } from './simple-toggle.service';

describe('SimpleToggleService', () => {
  let service: SimpleToggleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleToggleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
