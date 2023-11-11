import { TestBed } from '@angular/core/testing';

import { ScheduleToggleService } from './schedule-toggle.service';

describe('ScheduleToggleService', () => {
  let service: ScheduleToggleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScheduleToggleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
