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
  presentAlert() {
    this.alertCtrl.create({
      header: 'Internship 1 project',
      subHeader: 'This project had allowed me to work with React.js for a company called Vntrip',
      message:  'My host institue was VnTrip - a startup that specialize in hospitality and transportation.',
      buttons: ['Close']
    }).then(alert => alert.present());
  }

  // Project 2 alert box
  presentAlert2() {
    this.alertCtrl.create({
      header: 'Project 2',
      subHeader: 'MEAN Project',
      message: 'This project allowed to fully understand the MEAN stack through creating a Web application.',
      buttons: ['close']
    }).then(alert => alert.present());
  }

  // Project 3 alert box
  presentAlert3() {
    this.alertCtrl.create({
      header: 'Project 3',
      subHeader: 'Java Project',
      message: 'This project allowed to utilize my understanding of OO programming through creating an ATM application.',
      buttons: ['close']
    }).then(alert => alert.present());
  }

  ngOnInit() {
  }

}
// <!-- Hao Nguyen - 1601800 -->

