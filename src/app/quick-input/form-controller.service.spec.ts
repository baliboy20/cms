import { TestBed } from '@angular/core/testing';

import { FormControllerService } from './form-controller.service';

describe('FormControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormControllerService = TestBed.get(FormControllerService);
    expect(service).toBeTruthy();
  });
});
