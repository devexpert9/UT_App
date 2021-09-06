import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getstarted',
  templateUrl: './getstarted.page.html',
  styleUrls: ['./getstarted.page.scss'],
})
export class GetstartedPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
slideOpts3 = {
  slidesPerView: 1.85,
  initialSlide: 1,
  spaceBetween: 10,
  speed: 400,
  autoplay:false,
  centeredSlides: true,
}
}
