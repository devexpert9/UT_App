import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForumcommentsPage } from './forumcomments.page';

const routes: Routes = [
  {
    path: '',
    component: ForumcommentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForumcommentsPageRoutingModule {}
