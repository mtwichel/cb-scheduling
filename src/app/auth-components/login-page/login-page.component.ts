import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    public authService: AuthService,
    private fb: FormBuilder,
    public dialog: MatDialog) {}

  signup() {
    this.authService.signup(this.username, this.password);
  }

  login() {
    this.authService.login(this.username, this.password );
  }

  logout() {
    this.authService.logout();
  }

  forgotPassword() {
    this.authService.forgotPassword(this.username);
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [
        Validators.email,
      ]],
      password: '', // TODO add password validation
    });
   }

   get username(): string {
    return this.loginForm.controls['username'].value;
   }

   get password() {
    return this.loginForm.controls['password'].value;
   }
}
