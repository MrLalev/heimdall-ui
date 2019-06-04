import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { UserModel } from '../../store/models/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: 'users-list.component.html',
  styleUrls: ['users-list.component.scss'],
})
export class UsersListComponent implements OnInit, OnChanges {
  @Input() users: Array<UserModel>;
  @Output() fetchData: EventEmitter<any> = new EventEmitter();
  @Output() refreshData: EventEmitter<any> = new EventEmitter();
  loadingEvent: any = null;
  refreshEvent: any = null;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (this.loadingEvent) {
      this.loadingEvent.target.complete();
      this.loadingEvent = null;
    }

    if (this.refreshEvent) {
      this.refreshEvent.target.complete();
      this.refreshEvent = null;
    }
  }

  loadData(event) {
    setTimeout(() => {
      this.fetchData.emit(event);
      this.loadingEvent = event;
    }, 500);
  }

  doRefresh(event) {
    setTimeout(() => {
      this.refreshData.emit(event);
      this.refreshEvent = event;
    }, 500);
  }
}
