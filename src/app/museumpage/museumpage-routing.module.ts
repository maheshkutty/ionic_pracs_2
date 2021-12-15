import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MuseumpagePage } from './museumpage.page';

const routes: Routes = [
  {
    path: '',
    component: MuseumpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MuseumpagePageRoutingModule {}
