import { TestBed } from '@angular/core/testing';

import { CampaignBuilderService } from './campaign-builder.service';

describe('CampaignBuilderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CampaignBuilderService = TestBed.get(CampaignBuilderService);
    expect(service).toBeTruthy();
  });
});
