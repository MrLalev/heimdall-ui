import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../app.state';
import * as AuthActions from '../../store/actions/auth.actions';
import { Observable, Subscription } from 'rxjs';
import { AuthUserStoreModel } from '../../store/models/auth.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  authData: Observable<AuthUserStoreModel>;
  authDataSub: Subscription;

  constructor(private store: Store<AppState>, private router: Router) {
    this.authData = this.store.pipe(select('UserState'));
  }

  ngOnInit(): void {
    this.authDataSub = this.authData.subscribe(async s => {
      if (!s.user) {
        this.router.navigate(['/login']);
      }
    });
  }

  handleLogOut() {
    this.store.dispatch(AuthActions.logOutUserAction());
  }
}
