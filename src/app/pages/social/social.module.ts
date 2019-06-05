import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { AvatarModule } from 'ngx-avatar';

import { SocialPage } from './social.page';
import { SharedModule } from '../../components/shared.module';

const routes: Routes = [
  {
    path: '',
    component: SocialPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    SocialPage,
  ]
})
export class SocialPageModule {}
