import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-museumpage',
  templateUrl: './museumpage.page.html',
  styleUrls: ['./museumpage.page.scss'],
})
export class MuseumpagePage implements OnInit {

  srcImg = "";

  constructor(public alertController: AlertController) { }

  ngOnInit() {

  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Museum App',
      subHeader: 'Do you want submit',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {

        }
      }, {
        text: 'Ok',
        cssClass: 'success',
        handler: () => {

        }
      }]
    });
    await alert.present();
  }
}
