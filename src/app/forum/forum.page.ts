import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ForumfilterPage } from './forumfilter/forumfilter.page';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.page.html',
  styleUrls: ['./forum.page.scss'],
})
export class ForumPage implements OnInit {

  constructor(public modalController: ModalController) {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: ForumfilterPage,
      cssClass: 'filtermodal'
    });
    return await modal.present();
  }

  ngOnInit() {
  }

}
