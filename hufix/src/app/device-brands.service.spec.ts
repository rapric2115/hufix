import { TestBed } from '@angular/core/testing';

import { DeviceBrandsService } from './device-brands.service';

describe('DeviceBrandsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeviceBrandsService = TestBed.get(DeviceBrandsService);
    expect(service).toBeTruthy();
  });
});
