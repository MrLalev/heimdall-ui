import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserCardComponent } from './user-card/user-card.component';
import { UsersListComponent } from './users-list/users-list.component';
import { AvatarModule } from '../../../node_modules/ngx-avatar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvatarModule
  ],
  declarations: [
    UserCardComponent,
    UsersListComponent
  ],
  exports: [
    UserCardComponent,
    UsersListComponent
  ]
})

export class SharedModule {}

