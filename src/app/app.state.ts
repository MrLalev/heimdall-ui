import { AuthUserStoreModel, SocialStoreModel, ProfileStoreModel, DropdownsStoreModel } from './store/models/sore.model';

export interface AppState {
  readonly AuthState: AuthUserStoreModel;
  readonly SocialState: SocialStoreModel;
  readonly ProfileState: ProfileStoreModel;
  readonly DropdownsState: DropdownsStoreModel;
}
