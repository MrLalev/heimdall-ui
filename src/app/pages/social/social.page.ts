import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../app.state';
import { SocialStoreModel } from '../../store/models/sore.model';
import { Observable } from 'rxjs';
import { getStateSnapshot } from '../../store/selectors/base-selector';
import * as UserActions from '../../store/actions/user.actions';
import { FROM_STORE } from '../../utils/constants';

@Component({
  selector: 'app-social',
  templateUrl: 'social.page.html',
  styleUrls: ['social.page.scss'],
})
export class SocialPage implements OnInit {
  socialData: Observable<SocialStoreModel>;

  constructor(private store: Store<AppState>) {
    this.socialData = this.store.pipe(select(FROM_STORE.SOCIAL_DATA));
  }

  ngOnInit(): void {
    const socialData = getStateSnapshot(this.store, FROM_STORE.SOCIAL_DATA);
    if (socialData.users.length === 0) {
      this.store.dispatch(UserActions.fetchUsersAction({ payload: { page : 0, perPage: 10, where: ''}}));
    }
  }

  onFetchUsers(event) {
    const socialData = getStateSnapshot(this.store, FROM_STORE.SOCIAL_DATA);
    // tslint:disable-next-line:max-line-length
    this.store.dispatch(UserActions.fetchUsersAction({ payload: { page : ++socialData.page, perPage: socialData.perPage, where: socialData.where}}));
  }
}
