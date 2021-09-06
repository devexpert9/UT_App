import { Component, OnInit } from '@angular/core';
import { StartWorkoutPage } from '../start-workout/start-workout.page';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-exercise-details',
  templateUrl: './exercise-details.page.html',
  styleUrls: ['./exercise-details.page.scss'],
})
export class ExerciseDetailsPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: StartWorkoutPage,
      cssClass: 'StartWorkoutPage'
    });
    return await modal.present();
  }

}
