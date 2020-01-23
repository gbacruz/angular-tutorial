import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewAppointmentPage } from './new-appointment';

@NgModule({
  declarations: [
    NewAppointmentPage,
  ],
  imports: [
    IonicPageModule.forChild(NewAppointmentPage),
  ],
})
export class NewAppointmentPageModule {}
