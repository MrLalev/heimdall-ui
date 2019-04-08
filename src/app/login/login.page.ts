import { Component, OnInit } from '@angular/core';
import { UserService } from '../api/user.service';
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

  constructor(private userService: UserService, private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSingIn() {
    const email = this.singInForm.controls['email'].value;
    const password = this.singInForm.controls['password'].value;
    if (this.singInForm.valid) {
      this.userService.authorize(email, password);
    }
  }

}
