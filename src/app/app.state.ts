import { AuthUserStoreModel, SocialStoreModel, ProfileStoreModel } from './store/models/sore.model';

export interface AppState {
  readonly AuthState: AuthUserStoreModel;
  readonly SocialState: SocialStoreModel;
  readonly ProfileState: ProfileStoreModel;
}
