import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MuseumpagePageRoutingModule } from './museumpage-routing.module';

import { MuseumpagePage } from './museumpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MuseumpagePageRoutingModule
  ],
  declarations: [MuseumpagePage]
})
export class MuseumpagePageModule {}
