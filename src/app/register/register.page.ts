import { Component, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  @ViewChild('username') user;
  @ViewChild('password') password;

  constructor(private alertctrl: AlertController, private fire: AngularFireAuth) { }

  alert(message: string) {
    this.alertctrl.create({
      header: 'Info!',
      subHeader: message,
      buttons: ['Ok']
    }).then(alert => alert.present());
  }

  RegisterUser() {
    this.fire.auth.createUserWithEmailAndPassword(this.user.value, this.password.value).then(data => { // authenticate with firebase
      console.log('got data', data);
      this.alert('Congratulation! You\'re signed up');
    })
      .catch(error => {
        console.log('got an error ', error);
      });
  }

}
// Hao Nguyen - 1601800
