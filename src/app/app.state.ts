import { AuthStoreModel } from './store/models/auth.model';

export interface AppState {
  readonly auth: AuthStoreModel;
}
