import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { AvatarModule } from 'ngx-avatar';

import { HomePage } from './home.page';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../../components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeRoutingModule,
    AvatarModule,
    SharedModule,
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
