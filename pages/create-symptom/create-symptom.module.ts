import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateSymptomPage } from './create-symptom';

@NgModule({
  declarations: [
    CreateSymptomPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateSymptomPage),
  ],
})
export class CreateSymptomPageModule {}
