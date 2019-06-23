import { TestBed } from '@angular/core/testing';

import { HardcodedAutheticationService } from './hardcoded-authetication.service';

describe('HardcodedAutheticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HardcodedAutheticationService = TestBed.get(HardcodedAutheticationService);
    expect(service).toBeTruthy();
  });
});
