import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AuthUserStoreModel } from '../../store/models/auth.model';
import { AppState } from '../../app.state';
import * as AuthActions from '../../store/actions/auth.actions';
import * as UserActions from '../../store/actions/user.actions';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { getToastSettings } from '../../utils/helpers';
import { PAGE_ROUTES } from '../../utils/page-routes';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {
  @ViewChild('slider') slider: ElementRef;
  authData: Observable<AuthUserStoreModel>;
  authDataSub: Subscription;

  slideOpts = {
    effect: 'flip',
    allowTouchMove: false,
  };

  singInForm = this.fb.group({
    email: [''],
    password: [''],
  });

  createUserForm = this.fb.group({
    first_name: ['', [Validators.required]],
    last_name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5)]],
  });

  slides = {
    logIn: 'LOGIN',
    singUp: 'SINGUP',
  };

  activeSlide = this.slides.logIn;

  constructor(private fb: FormBuilder, private store: Store<AppState>, private router: Router, private toastController: ToastController) {
    this.authData = this.store.pipe(select('UserState'));
  }

  ngOnInit() {
    this.authDataSub = this.authData.subscribe(async s => {
      if (s.user) {
        this.singInForm.reset();
        this.router.navigate([`/${PAGE_ROUTES.HOME}`]);
      }
      if (s.message) {
        const toast = await this.toastController.create(getToastSettings(s.message));
        toast.present();
        this.createUserForm.reset();
        this.activeSlide = this.slides.logIn;
        this.slider['slidePrev']();
      }
      if (s.error) {
        const toast = await this.toastController.create(getToastSettings(s.error));
        toast.present();
      }
    });
  }

  ngOnDestroy() {
    this.authDataSub.unsubscribe();
  }

  onSingIn() {
    const email = this.singInForm.controls['email'].value;
    const password = this.singInForm.controls['password'].value;

    this.store.dispatch(AuthActions.authUserAction({ payload: { email, password } }));
  }

  onCreateUser() {
    if (this.createUserForm.valid) {
      const first_name = this.createUserForm.controls['first_name'].value;
      const last_name = this.createUserForm.controls['last_name'].value;
      const email = this.createUserForm.controls['email'].value;
      const password = this.createUserForm.controls['password'].value;

      this.store.dispatch(UserActions.createUserAction({ payload: { first_name, last_name, email, password } }));
    } else {
      if (this.createUserForm.controls['email'].errors && this.createUserForm.controls['email'].errors.email) {
        this.store.dispatch(AuthActions.authUserErrorAction({ payload: 'Error: Invalid email address.' }));
      } else if (this.createUserForm.controls['password'].errors && this.createUserForm.controls['password'].errors.minlength) {
        this.store.dispatch(AuthActions.authUserErrorAction({ payload: 'Error: The password should be at least 5 characters long.' }));
      } else {
        this.store.dispatch(AuthActions.authUserErrorAction({ payload: 'Error: Please enter value for all of the fields.' }));
      }
    }
  }

  onChangeSlide(slide) {
    switch (slide) {
      case 'SINGUP':
          this.activeSlide = slide;
          this.slider['slideNext']();
          this.store.dispatch(AuthActions.authUserErrorAction(null));
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
