import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForumfilterPageRoutingModule } from './forumfilter-routing.module';

import { ForumfilterPage } from './forumfilter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForumfilterPageRoutingModule
  ],
  declarations: [ForumfilterPage]
})
export class ForumfilterPageModule {}
