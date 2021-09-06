import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-start-workout',
  templateUrl: './start-workout.page.html',
  styleUrls: ['./start-workout.page.scss'],
})
export class StartWorkoutPage implements OnInit {

  constructor(
    public modalCtrl: ModalController,
    public alertController: AlertController
  ) { }
  popcontent : boolean = false;
  popcontent1 : boolean = false;  
  popnote : boolean = false;

  popClick()
  {
    this.popcontent = !this.popcontent
  }

  popClick1()
  {
    this.popcontent1 = !this.popcontent1
  }

  popupNote()
  {
    this.popnote = !this.popnote
  }


  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'popClass',
      header: 'Warm Up',
      message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
