import { Component, OnInit } from '@angular/core';
import { ToastController, ActionSheetController } from '@ionic/angular';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  feedBackForm = new FormGroup({
    name: new FormControl(''),
    ename: new FormControl(''),
  });
  constructor(public toastController: ToastController, public actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }

  async showmsg(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Feedback',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
          this.showmsg("Your reponse is deleted")
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
          this.showmsg("Your reponse is shared")
        }
      }, 
      {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
          this.showmsg("Operations cencelled")
        }
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }



  submitForm(e) {

  }
}
