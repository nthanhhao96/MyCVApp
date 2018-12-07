import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  items: Observable<any[]>;

  // Sidemenu
  public appPage = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    }, {
      title: 'Personal Profile',
      url: '/cv',
      icon: 'star'
    }, {
      title: 'Project Work',
      url: '/projects',
      icon: 'laptop'
    }, {
      title: 'Extra Curriculum activities',
      url: '/curriculum',
      icon: 'school'
    }];
  constructor(
    private fire: AngularFireAuth,
    private router: Router,
    db: AngularFirestore,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.items = db.collection('items').valueChanges();
    this.initializeApp();
  }

  logout() {
    this.fire.auth.signOut();
    this.router.navigate(['/login']);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
// Hao Nguyen - 1601800

