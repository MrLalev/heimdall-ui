import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AvatarModule } from 'ngx-avatar';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GraphQLModule } from './graphql.module';

import { authReducer } from './store/reducers/auth.reducer';
import { effects } from './store/effects';
import { socialReducer } from './store/reducers/social.reducer';
import { profileReducer } from './store/reducers/profile.reducer';
import { dropdownsReducer } from './store/reducers/dropdowns.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    StoreModule.forRoot({
      AuthState: authReducer,
      SocialState: socialReducer,
      ProfileState: profileReducer,
      DropdownsState: dropdownsReducer,
    }),
    EffectsModule.forRoot(effects),
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    AvatarModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
