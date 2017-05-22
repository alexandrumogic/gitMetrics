/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CommitsService } from './commits.service';

describe('CommitsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommitsService]
    });
  });

  it('should ...', inject([CommitsService], (service: CommitsService) => {
    expect(service).toBeTruthy();
  }));
});
