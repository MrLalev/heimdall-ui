import { Component, OnInit, Input } from '@angular/core';
import { UserModel } from '../../store/models/user.model';
import { Router } from '../../../../node_modules/@angular/router';
import { PAGE_ROUTES } from '../../utils/constants';

@Component({
  selector: 'app-user-card',
  templateUrl: 'user-card.component.html',
  styleUrls: ['user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  @Input() user: UserModel;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onProfileSelect() {
    this.router.navigate([`/${PAGE_ROUTES.PROFILE}`, this.user._id], { state: { previousRoute: this.router.url } });
  }
}
