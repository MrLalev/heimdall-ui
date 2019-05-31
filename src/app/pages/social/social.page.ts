import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../app.state';
import { SocialStoreModel } from '../../store/models/sore.model';
import { Observable } from 'rxjs';
import { getStateSnapshot } from '../../store/selectors/base-selector';
import * as UserActions from '../../store/actions/user.actions';

@Component({
  selector: 'app-social',
  templateUrl: 'social.page.html',
  styleUrls: ['social.page.scss'],
})
export class SocialPage implements OnInit {
  socialData: Observable<SocialStoreModel>;

  constructor(private store: Store<AppState>) {
    this.socialData = this.store.pipe(select('SocialState'));
  }

  ngOnInit(): void {
    const socialData = getStateSnapshot(this.store, 'SocialState');
    if (socialData.users.length === 0) {
      this.store.dispatch(UserActions.fetchUsersAction({ payload: { page : 0, perPage: 10, where: {}}}));
    }

    this.socialData.subscribe(s => console.log(s.users));
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      // if (data.length == 1000) {
      //   event.target.disabled = true;
      // }
    }, 500);
  }
}