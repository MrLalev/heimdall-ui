import { AuthEffects } from './auth.effect';
import { UserEffects } from './user.effect';

export const effects: any[] = [AuthEffects, UserEffects];

export * from './auth.effect';
export * from './user.effect';
