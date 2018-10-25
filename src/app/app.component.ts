import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  // Sidemenu
  public appPage = [
    {
      title: 'Home',
      url: '',
      icon: 'home'
}, {
  title: 'Targeted CV',
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
} ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
// Hao Nguyen - 1601800

