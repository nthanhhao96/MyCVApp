import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { FirebaseProvider } from './firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public auth: FirebaseProvider) {}

  canActivate(): boolean {
    return this.auth.isAuthenticated();
  }
}
// Hao Nguyen - 1601800
