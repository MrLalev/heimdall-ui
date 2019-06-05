import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { getStateSnapshot } from '../../store/selectors/base-selector';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../app.state';
import { FROM_STORE } from '../../utils/constants';
import { ProfileStoreModel } from '../../store/models/sore.model';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
})
export class ProfilePage implements OnInit, OnDestroy {
  private isPermitted: Boolean = false;
  private previousRoute: String = '/home';
  private routeSub: Subscription;
  profileData: Observable<ProfileStoreModel>;

  constructor(private route: ActivatedRoute, private store: Store<AppState>, private router: Router) {
    this.profileData = this.store.pipe(select(FROM_STORE.PROFILE_STATE));
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
        this.previousRoute = history.state.previousRoute;
        this.isPermitted = history.state.isPermitted ? history.state.isPermitted : false;
    });

    this.profileData.subscribe(s =>  console.log(getStateSnapshot(this.store, FROM_STORE.PROFILE_STATE)));
  }

  ngOnDestroy() {
    this.isPermitted = false;
    this.routeSub.unsubscribe();
  }

  onBackSelect(event) {
    event.stopPropagation();
    this.router.navigate([this.previousRoute]);
  }
}
