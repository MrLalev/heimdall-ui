import { Component, OnInit, Input } from '@angular/core';
import { UserModel } from '../../store/models/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: 'users-list.component.html',
  styleUrls: ['users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  @Input() users: Array<UserModel>;

  constructor() {}

  ngOnInit(): void {}

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      // if (data.length == 1000) {
      //   event.target.disabled = true;
      // }
    }, 500);
  }
}
