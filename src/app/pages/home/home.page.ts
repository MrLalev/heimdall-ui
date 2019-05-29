import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../app.state';
import * as AuthActions from '../../store/actions/auth.actions';
import { Observable, Subscription } from 'rxjs';
import { AuthUserStoreModel } from '../../store/models/auth.model';
import { Router, NavigationStart } from '@angular/router';
import { PAGE_ROUTES } from '../../utils/page-routes';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  readonly PAGE_ROUTES = PAGE_ROUTES;
  authData: Observable<AuthUserStoreModel>;
  authDataSub: Subscription;
  routeSub: Subscription;
  routeName: string;
  activeRoute: string;

  constructor(private store: Store<AppState>, private router: Router, private menu: MenuController) {
    this.authData = this.store.pipe(select('UserState'));
    this.routeName = this.router.url.replace('/home/', '').replace('/', '> ').toUpperCase();
    this.activeRoute = this.router.url.replace('/home/', '').split('/')[0];
  }

  ngOnInit(): void {
    this.authDataSub = this.authData.subscribe(async s => {
      if (!s.user) {
        this.router.navigate([`/${PAGE_ROUTES.LOGIN}`]);
      }
    });

    this.routeSub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.routeName = event.url.replace('/home/', '').replace('/', '> ').toUpperCase();
        this.activeRoute = event.url.replace('/home/', '').split('/')[0];
      }
    });
  }

  handleRouteChange(route) {
    if (route !== this.activeRoute) {
      this.router.navigate([`/${PAGE_ROUTES.HOME}/${route}`]);
      this.menu.close('main');
    }
  }

  handleLogOut() {
    this.store.dispatch(AuthActions.logOutUserAction());
  }

  ngOnDestroy() {
    this.authDataSub.unsubscribe();
    this.routeSub.unsubscribe();
  }
}
