import { TestBed } from '@angular/core/testing';

import { ExerciseAutocomplateService } from './exercise.autocomplate.service';

describe('ExerciseAutocomplateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExerciseAutocomplateService = TestBed.get(ExerciseAutocomplateService);
    expect(service).toBeTruthy();
  });
});
