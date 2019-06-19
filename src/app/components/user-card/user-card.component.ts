import { Component, OnInit, Input } from '@angular/core';
import { UserModel } from '../../store/models/user.model';
import { Router } from '@angular/router';
import { PAGE_ROUTES } from '../../utils/constants';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import * as UserActions from '../../store/actions/user.actions';
import { ModalController } from '@ionic/angular';
import { ProfileComponent } from '../modals/profile/profile.component';

@Component({
  selector: 'app-user-card',
  templateUrl: 'user-card.component.html',
  styleUrls: ['user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  @Input() user: UserModel;

  constructor(private router: Router, private store: Store<AppState>, private modalController: ModalController) {}

  ngOnInit(): void {}

  onProfileSelect = async(userId) => {
    this.store.dispatch(UserActions.fetchUserProfileAction({ payload: userId }));
    const modal = await this.modalController.create({
      component: ProfileComponent,
      componentProps: {}
    });
    return await modal.present();
  }
}
