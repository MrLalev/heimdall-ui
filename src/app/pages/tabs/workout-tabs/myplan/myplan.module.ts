import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';

import { MyplanPage } from './myplan.page';
import { SharedModule } from '../../../../components/shared.module';

const routes: Routes = [
  {
    path: '',
    component: MyplanPage
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
  declarations: [MyplanPage]
})
export class MyplanPageModule {}
