import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-forumfilter',
  templateUrl: './forumfilter.page.html',
  styleUrls: ['./forumfilter.page.scss'],
})
export class ForumfilterPage implements OnInit {

  constructor(public modalController: ModalController) {}
  
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  ngOnInit() {
  }

}
