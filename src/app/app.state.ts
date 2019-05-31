import { AuthUserStoreModel, SocialStoreModel } from './store/models/sore.model';

export interface AppState {
  readonly AuthState: AuthUserStoreModel;
  readonly SocialState: SocialStoreModel;
}
