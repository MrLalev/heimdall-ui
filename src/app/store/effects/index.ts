import { AuthEffects } from './auth.effect';
import { UserEffects } from './user.effect';
import { DropdownsEffects } from './dropdowns.effects';

export const effects: any[] = [AuthEffects, UserEffects, DropdownsEffects];

export * from './auth.effect';
export * from './user.effect';
export * from './dropdowns.effects';
