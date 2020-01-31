import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the CreateSymptomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-symptom',
  templateUrl: 'create-symptom.html',
})
export class CreateSymptomPage {

  isReadyToSave: boolean;
  item: any;
  form: FormGroup;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public formBuilder: FormBuilder
              ) 
    {
      this.form = formBuilder.group({
        zone:['', Validators.required],
        intensity:['', Validators.required],
        indicator:[''],
        desc:[''],
        synp:['', Validators.required]
      });
      this.form.valueChanges.subscribe((v) => {
        this.isReadyToSave = this.form.valid;
      });
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateSymptomPage');
  }
  done() {
    if (!this.form.valid) { return; }
    this.viewCtrl.dismiss(this.form.value);
  }

  cancel(){
    this.viewCtrl.dismiss();
  }

}
