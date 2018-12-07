import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppModule } from '../../app.module';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: AppModule,
})
export class FirebaseProvider {

  constructor(private fire: AngularFireAuth) {
  }

  isAuthenticated() {
    const user = this.fire.auth.currentUser;
    if (user) {
      return true;
    } else {
      return false;
    }
  }

}
// Hao Nguyen - 1601800

