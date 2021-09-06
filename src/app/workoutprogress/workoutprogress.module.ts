import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkoutprogressPageRoutingModule } from './workoutprogress-routing.module';

import { WorkoutprogressPage } from './workoutprogress.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkoutprogressPageRoutingModule
  ],
  declarations: [WorkoutprogressPage]
})
export class WorkoutprogressPageModule {}
