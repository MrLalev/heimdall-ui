import { TestBed } from '@angular/core/testing';

import { ExerciseAutocompleteService } from './exercise.autocomplate.service';

describe('ExerciseAutocompleteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExerciseAutocompleteService = TestBed.get(ExerciseAutocompleteService);
    expect(service).toBeTruthy();
  });
});
