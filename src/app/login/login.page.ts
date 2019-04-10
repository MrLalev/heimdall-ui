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
    // allowTouchMove: false,
  };

  singInForm = this.fb.group({
    email: [''],
    password: [''],
  });

  slides = {
    singIn: 'SINGIN',
    register: 'REGISTER',
  };

  activeSlide = this.slides.singIn;
  isTabChangeByTouchEvent = true;

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
    this.isTabChangeByTouchEvent = false;
    switch (slide) {
      case 'REGISTER':
          this.activeSlide = slide;
          this.slider['slideNext']();
        break;
      case 'SINGIN':
          this.activeSlide = slide;
          this.slider['slidePrev']();
        break;
      default:
        this.activeSlide = this.slides.singIn;
        this.slider['slidePrev']();
        break;
    }

  }

  onTouchSlideChange() {
    if (this.isTabChangeByTouchEvent) {
      switch (this.activeSlide) {
        case 'REGISTER':
            this.activeSlide = this.slides.singIn;
            this.slider['slidePrev']();
          break;
        case 'SINGIN':
            this.activeSlide = this.slides.register;
            this.slider['slideNext']();
          break;
        default:
          break;
      }
    } else {
      this.isTabChangeByTouchEvent = true;
    }
  }

}
