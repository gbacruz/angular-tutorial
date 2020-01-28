import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateSignalPage } from './create-signal';

@NgModule({
  declarations: [
    CreateSignalPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateSignalPage),
  ],
})
export class CreateSignalPageModule {}
