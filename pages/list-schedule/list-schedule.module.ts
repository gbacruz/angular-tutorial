import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListSchedulePage } from './list-schedule';

@NgModule({
  declarations: [
    ListSchedulePage,
  ],
  imports: [
    IonicPageModule.forChild(ListSchedulePage),
  ],
})
export class ListSchedulePageModule {}
