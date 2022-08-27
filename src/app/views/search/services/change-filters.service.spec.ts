import { TestBed } from '@angular/core/testing';

import { ChangeFiltersService } from './change-filters.service';

describe('ChangeFiltersService', () => {
  let service: ChangeFiltersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeFiltersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
