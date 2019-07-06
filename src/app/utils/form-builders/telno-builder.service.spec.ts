import { TestBed } from '@angular/core/testing';

import { TelnoBuilderService } from './telno-builder.service';

describe('TelnoBuilderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TelnoBuilderService = TestBed.get(TelnoBuilderService);
    expect(service).toBeTruthy();
  });
});
