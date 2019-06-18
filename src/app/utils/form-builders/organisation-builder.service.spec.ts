import { TestBed } from '@angular/core/testing';

import { OrganisationBuilderService } from './organisation-builder.service';

describe('OrganisationBuilderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrganisationBuilderService = TestBed.get(OrganisationBuilderService);
    expect(service).toBeTruthy();
  });
});
