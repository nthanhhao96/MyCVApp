import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FirebaseProvider } from './services/firebase/firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const environment = {  // firebase configuration
  production: false,
  firebase: {
    apiKey: 'AIzaSyDUHtNuw-ORml7lqULxSZkKDSGDfZSl3CY',
    authDomain: 'cvapp-73907.firebaseapp.com',
    databaseURL: 'https://cvapp-73907.firebaseio.com',
    projectId: 'cvapp-73907',
    storageBucket: 'cvapp-73907.appspot.com',
    messagingSenderId: '58700572869'
  }
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    FirebaseProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
// Hao Nguyen - 1601800
