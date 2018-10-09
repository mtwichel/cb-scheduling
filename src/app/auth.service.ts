import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
// import { ForgotPasswordDialogComponent } from '../../components/auth-components/forgot-password-dialog/forgot-password-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  constructor(
    private firebaseAuth: AngularFireAuth,
    public snackBar: MatSnackBar,
    public dialog: MatDialog) {
    this.user = firebaseAuth.authState;
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
        // TODO redirect to main screen
      })
      .catch(err => {
        console.log('Something went wrong:', err);
        if (err.code === 'auth/email-already-in-use') {
          this.snackBar.open(
            `That email is already in use.`,
            'Forgot Password',
          ).onAction().subscribe(() => {
            this.forgotPassword(email);
          });
        }
      });
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }

  resetPassword(email: string) {
    this.firebaseAuth.auth.sendPasswordResetEmail(email)
    .then(value => {
      console.log('Reset Password Succesful!', value);
      this.snackBar.open(`Password Reset Email Sent to: ${email}`, null, {
        duration: 8000,
      });
    })
    .catch(err => {
      console.log('Something went wrong:', err.message);
    });
  }

  forgotPassword(email: string) {
    // this.dialog.open(ForgotPasswordDialogComponent, {
    //   width: '250px',
    //   data: { email: email }
    // }).afterClosed().subscribe(result => {
    //   console.log(result);
    //   if (result) {
    //     this.resetPassword(result);
    //   }
    // });
  }

}
