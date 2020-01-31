import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the CreatePatientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-patient',
  templateUrl: 'create-patient.html',
})
export class CreatePatientPage {
  isReadyToSave: boolean;
  patient: any;
  form: FormGroup;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public formBuilder: FormBuilder
  ) 
  {
    this.form = formBuilder.group({
      name:['', Validators.required],
      age:['', Validators.required],
      gender:['', Validators.required]
    });
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePatientPage');
  }

  done() {
    if (!this.form.valid) { return; }
    this.viewCtrl.dismiss(this.form.value);
  }

  cancel(){
    this.viewCtrl.dismiss();
  }



}
