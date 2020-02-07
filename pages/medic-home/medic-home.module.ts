import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicHomePage } from './medic-home';

@NgModule({
  declarations: [
    MedicHomePage,
  ],
  imports: [
    IonicPageModule.forChild(MedicHomePage),
  ],
})
export class MedicHomePageModule {}
