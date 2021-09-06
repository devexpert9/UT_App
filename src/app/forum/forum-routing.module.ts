import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForumPage } from './forum.page';

const routes: Routes = [
  {
    path: '',
    component: ForumPage
  },
  {
    path: 'forumcomments',
    loadChildren: () => import('./forumcomments/forumcomments.module').then( m => m.ForumcommentsPageModule)
  },
  {
    path: 'forumfilter',
    loadChildren: () => import('./forumfilter/forumfilter.module').then( m => m.ForumfilterPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForumPageRoutingModule {}
