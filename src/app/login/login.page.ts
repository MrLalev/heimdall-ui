import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../api/auth.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild('slider') slider: ElementRef;
  
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

  constructor(private authService: AuthService, private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSingIn() {
    const email = this.singInForm.controls['email'].value;
    const password = this.singInForm.controls['password'].value;
    if (this.singInForm.valid) {
      this.authService.authorize(email, password);
    }
  }

  onChangeSlide(slide) {
    switch (slide) {
      case 'SINGUP':
          this.activeSlide = slide;
          this.slider['slideNext']();
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
