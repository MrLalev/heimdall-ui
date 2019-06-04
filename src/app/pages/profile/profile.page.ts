import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { getStateSnapshot } from '../../store/selectors/base-selector';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { FROM_STORE } from '../../utils/constants';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
})
export class ProfilePage implements OnInit, OnDestroy {
  private isPermitted: Boolean = false;
  private previousRoute: String = '/home';
  private routeSub: Subscription;

  constructor(private route: ActivatedRoute, private store: Store<AppState>, private router: Router) {}

  ngOnInit(): void {
    const authState = getStateSnapshot(this.store, FROM_STORE.AUTH_DATA);
    this.routeSub = this.route.params.subscribe(params => {
        if (authState.user._id === params.id) {
          this.isPermitted = true;
        }
        this.previousRoute = history.state.previousRoute;
    });
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
