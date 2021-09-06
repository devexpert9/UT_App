import { Component, OnInit } from '@angular/core';
import { ExercisesFilterPage } from '../exercises-filter/exercises-filter.page';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.page.html',
  styleUrls: ['./exercises.page.scss'],
})
export class ExercisesPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: ExercisesFilterPage,
      cssClass: 'ExercisesFilterPage'
    });
    return await modal.present();
  }

}
