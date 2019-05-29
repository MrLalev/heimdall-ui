import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class HomePage implements OnInit, OnDestroy {
  authData: Observable<AuthUserStoreModel>;
  authDataSub: Subscription;
  routeSub: Subscription;
  routeName: string;
  activeRoute: string;

  constructor(private store: Store<AppState>, private router: Router) {
    this.authData = this.store.pipe(select('UserState'));
    this.routeName = this.router.url.replace('/home/', '').replace('/', '> ').toUpperCase();
    this.activeRoute = this.router.url.replace('/home/', '').split('/')[0];
  }

  ngOnInit(): void {
    this.authDataSub = this.authData.subscribe(async s => {
      if (!s.user) {
        this.router.navigate(['/login']);
      }
    });

    this.routeSub = this.router.events.subscribe((url) => console.log(url));
  }

  handleLogOut() {
    this.store.dispatch(AuthActions.logOutUserAction());
  }

  ngOnDestroy() {
    this.authDataSub.unsubscribe();
    this.routeSub.unsubscribe();
  }
}
