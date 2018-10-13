import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const url: string = state.url;

      const result = new Promise<boolean>((resolve, reject) => {
        this.auth.user.subscribe(user => {
          if (user) {
            resolve(true);
          } else {
            this.auth.redirectUrl = url;
            this.router.navigate(['/login']);
            resolve(false);
          }
        });
    });

    return result;
  }
}

@Injectable({
  providedIn: 'root'
})
export class LoggedOutGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const url: string = state.url;

      const result = new Promise<boolean>((resolve, reject) => {
        this.auth.user.subscribe(user => {
          if (user) {
            this.router.navigate(['/home']);
            resolve(false);
          } else {
            resolve(true);
          }
        });
    });

    return result;
  }
}
