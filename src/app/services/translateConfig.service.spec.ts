/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TranslateConfigService } from './translateConfig.service';

describe('Service: TranslateConfig', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TranslateConfigService]
    });
  });

  it('should ...', inject([TranslateConfigService], (service: TranslateConfigService) => {
    expect(service).toBeTruthy();
  }));
});
