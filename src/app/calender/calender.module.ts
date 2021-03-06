import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CalendarModule } from 'ion2-calendar';
import { CalenderPageRoutingModule } from './calender-routing.module';

import { CalenderPage } from './calender.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarModule,
    CalenderPageRoutingModule
  ],
  declarations: [CalenderPage]
})
export class CalenderPageModule {}
