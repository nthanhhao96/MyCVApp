import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.page.html',
  styleUrls: ['./curriculum.page.scss'],
})
export class CurriculumPage implements OnInit {

  constructor(private toastCtrl: ToastController) {

  }

  // Udemy button clicked
  async showCourse() {
    const toast = await this.toastCtrl.create({
      message: 'Modern React with Redux: Master the fundamentals as developing apps with React Router, Webpack, and ES6',
      duration: 6000,
      position: 'bottom',
      showCloseButton: true,
      closeButtonText: 'Close'
    });

    toast.present();
  }

  // ICT SummerSchool button clicked
  async showCourse2() {
    const toast2 = await this.toastCtrl.create({
      message: 'ICT Summer School at Metropolia USA: Introduction to Back-End Server Application Development using JEE.',
      duration: 6000,
      position: 'bottom',
      showCloseButton: true,
      closeButtonText: 'Close'
    });

    toast2.present();
  }

  ngOnInit() {
  }

}
// Hao Nguyen - 1601800
