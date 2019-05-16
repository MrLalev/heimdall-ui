import { AuthModel } from './store/models/auth.model';

export interface AppState {
  readonly auth: AuthModel;
}
