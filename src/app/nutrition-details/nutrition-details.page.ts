import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nutrition-details',
  templateUrl: './nutrition-details.page.html',
  styleUrls: ['./nutrition-details.page.scss'],
})
export class NutritionDetailsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
slideOpts = {
  slidesPerView: 2.3,
  spaceBetween: 15,
  speed: 400,
  loop:true,
  autoplay:true,
}
}
