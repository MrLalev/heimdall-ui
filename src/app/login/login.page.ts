import { Component, OnInit } from '@angular/core';
import { AuthService } from '../api/auth.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  slideOpts = {
    effect: 'flip'
  };

  singInForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

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

}
