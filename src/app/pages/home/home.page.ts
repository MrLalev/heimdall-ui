import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../app.state';
import * as AuthActions from '../../store/actions/auth.actions';
import * as UserActions from '../../store/actions/user.actions';
import { Observable, Subscription } from 'rxjs';
import { AuthUserStoreModel } from '../../store/models/sore.model';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { PAGE_ROUTES, FROM_STORE } from '../../utils/constants';
import { MenuController, ModalController } from '@ionic/angular';
import { getStateSnapshot } from '../../store/selectors/base-selector';
import { ProfileComponent } from '../../components/modals/profile/profile.component';

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

  // tslint:disable-next-line:max-line-length
  constructor(private store: Store<AppState>, private router: Router, private menu: MenuController, private modalController: ModalController) {
    this.authData = this.store.pipe(select(FROM_STORE.AUTH_DATA));
    this.routeName = this.router.url.replace('/home/', '').toUpperCase();
    this.activeRoute = this.router.url.replace('/home/', '').split('/')[0];
  }

  ngOnInit(): void {
    this.authDataSub = this.authData.subscribe(async s => {
      if (!s.user) {
        this.router.navigate([`/${PAGE_ROUTES.LOGIN}`]);
      }
    });

    this.routeSub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.routeName = this.router.url.replace('/home/', '').toUpperCase();
        this.activeRoute = this.router.url.replace('/home/', '').split('/')[0];
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

  onProfileSelect = async() => {
    const authState = getStateSnapshot(this.store, FROM_STORE.AUTH_DATA);
    this.store.dispatch(UserActions.fetchUserProfileAction({ payload: authState.user._id }));
    const modal = await this.modalController.create({
      component: ProfileComponent,
      componentProps: { isPermitted: true }
    });
    this.menu.close('main');
    return await modal.present();
  }
}
