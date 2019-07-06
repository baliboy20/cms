import { TestBed } from '@angular/core/testing';

import { GenericSubformBuilderService } from './generic-subform-builder.service';

describe('EmailBuilderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenericSubformBuilderService = TestBed.get(GenericSubformBuilderService);
    expect(service).toBeTruthy();
  });
});
