import { TestBed } from '@angular/core/testing';

import { WebsiteBuilderService } from './website-builder.service';

describe('WebsiteBuilderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebsiteBuilderService = TestBed.get(WebsiteBuilderService);
    expect(service).toBeTruthy();
  });
});
