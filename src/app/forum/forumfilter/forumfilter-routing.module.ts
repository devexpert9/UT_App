import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForumfilterPage } from './forumfilter.page';

const routes: Routes = [
  {
    path: '',
    component: ForumfilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForumfilterPageRoutingModule {}
