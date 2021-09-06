import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalexercisedetailPage } from './calexercisedetail.page';

const routes: Routes = [
  {
    path: '',
    component: CalexercisedetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalexercisedetailPageRoutingModule {}
