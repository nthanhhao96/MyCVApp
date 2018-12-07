import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {

  constructor(private alertCtrl: AlertController) {

  }
  // Project 1 alert box
  presentAlert1() {
    this.alertCtrl.create({
      header: 'JavaScript project',
      subHeader: 'This project had allowed me to get hands-on experience with JavaSript frameworks',
      message: 'I have utilized the API from Finkino and a weather website to create a functioning Web app. <a>https://github.com/nthanhhao96/WeatherMovies-ReactProject</a>',
      buttons: ['Close']
    }).then(alert => alert.present());
  }

  // Project 2 alert box
  presentAlert2() {
    this.alertCtrl.create({
      header: 'Project 2',
      subHeader: 'MEAN Project',
      message: 'This project allowed to fully understand the MEAN stack through creating a Web application. <a>https://github.com/nthanhhao96/MEANproject</a>',
      buttons: ['close']
    }).then(alert => alert.present());
  }

  // Project 3 alert box
  presentAlert3() {
    this.alertCtrl.create({
      header: 'Project 3',
      subHeader: 'Java Project',
      message: 'This project allowed to utilize my understanding of OO programming through creating an ATM application. <a>https://github.com/nthanhhao96/OttoMachine</a>',
      buttons: ['close']
    }).then(alert => alert.present());
  }

  // Team Project 1 alert box
  presentAlertT1() {
    this.alertCtrl.create({
      header: 'Internship project',
      subHeader: 'This project had allowed me to work with React.js for a company called Vntrip',
      message: 'My host institue was VnTrip - a startup that specialize in hospitality and transportation.',
      buttons: ['Close']
    }).then(alert => alert.present());
  }

  // Team Project 2 alert box
  presentAlertT2() {
    this.alertCtrl.create({
      header: 'Cooperated JavaScript project',
      subHeader: 'In this project, I have learnt to use JavaScript to create bac-end Web function',
      message: 'In cooperation with another student, we managed to create our own music player Web application with just JavaScript. <a>https://github.com/nthanhhao96/music-app</a>',
      buttons: ['Close']
    }).then(alert => alert.present());
  }

  ngOnInit() {
  }

}
// Hao Nguyen - 1601800

