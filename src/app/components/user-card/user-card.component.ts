import { Component, OnInit, Input } from '@angular/core';
import { UserModel } from '../../store/models/user.model';
import { Router } from '@angular/router';
import { PAGE_ROUTES } from '../../utils/constants';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import * as UserActions from '../../store/actions/user.actions';

@Component({
  selector: 'app-user-card',
  templateUrl: 'user-card.component.html',
  styleUrls: ['user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  @Input() user: UserModel;

  constructor(private router: Router, private store: Store<AppState>) {}

  ngOnInit(): void {}

  onProfileSelect(userId) {
    this.store.dispatch(UserActions.fetchUserProfileAction({ payload: userId }));
    this.router.navigate([`/${PAGE_ROUTES.PROFILE}`], { state: { previousRoute: this.router.url } });
  }
}
