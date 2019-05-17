import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AuthStoreModel } from '../../store/models/auth.model';
import { AppState } from '../../app.state';
import * as AuthActions from '../../store/actions/auth.actions';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {
  @ViewChild('slider') slider: ElementRef;
  authData: Observable<AuthStoreModel>;
  authDataSub: Subscription;

  slideOpts = {
    effect: 'flip',
    allowTouchMove: false,
  };

  singInForm = this.fb.group({
    email: [''],
    password: [''],
  });

  slides = {
    logIn: 'LOGIN',
    singUp: 'SINGUP',
  };

  activeSlide = this.slides.logIn;

  constructor(private authService: AuthService, private fb: FormBuilder, private store: Store<AppState>, private router: Router) {
    this.authData = this.store.pipe(select('auth'));
  }

  ngOnInit() {
    this.authDataSub = this.authData.subscribe(s => {
      if (s.user) {
        this.router.navigate(['/home']);
      }
    });
  }

  ngOnDestroy() {
    this.authDataSub.unsubscribe();
  }

  onSingIn() {
    const email = this.singInForm.controls['email'].value;
    const password = this.singInForm.controls['password'].value;

    this.store.dispatch(new AuthActions.SendAuthData({ email, password}));
  }

  onChangeSlide(slide) {
    switch (slide) {
      case 'SINGUP':
          this.activeSlide = slide;
          this.slider['slideNext']();
          this.store.dispatch(new AuthActions.SetAuthError(null));
        break;
      case 'LOGIN':
          this.activeSlide = slide;
          this.slider['slidePrev']();
        break;
      default:
        this.activeSlide = this.slides.logIn;
        this.slider['slidePrev']();
        break;
    }
  }
}
