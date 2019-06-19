import { AuthEffects } from './auth.effect';
import { UserEffects } from './user.effect';
import { DropdownsEffects } from './dropdowns.effects';
import { ExerciseEffects } from './exercise.effect';

export const effects: any[] = [AuthEffects, UserEffects, DropdownsEffects, ExerciseEffects];

export * from './auth.effect';
export * from './user.effect';
export * from './dropdowns.effects';
export * from './exercise.effect';
