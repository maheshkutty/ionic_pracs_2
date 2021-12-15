import { Component } from '@angular/core';
import { IonicSwiper } from '@ionic/angular';
import SwiperCore, { Autoplay, Zoom } from 'swiper';

SwiperCore.use([IonicSwiper, Autoplay, Zoom]);

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  onSwiper(swiper) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

}
