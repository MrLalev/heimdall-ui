import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ProfileStoreModel } from '../../../store/models/sore.model';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../app.state';
import { FROM_STORE } from '../../../utils/constants';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  @Input() isPermitted: Boolean = false;
  profileData: Observable<ProfileStoreModel>;

  constructor(private store: Store<AppState>, private modalController: ModalController) {
    this.profileData = this.store.pipe(select(FROM_STORE.PROFILE_STATE));
  }

  ngOnInit(): void {
  }

  dismiss() {
    this.modalController.dismiss();
  }
}
