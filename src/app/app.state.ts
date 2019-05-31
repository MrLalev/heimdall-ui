import { AuthUserStoreModel } from './store/models/auth.model';

export interface AppState {
  readonly AuthState: AuthUserStoreModel;
}
