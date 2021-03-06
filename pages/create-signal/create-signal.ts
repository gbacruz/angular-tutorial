import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-create-signal',
  templateUrl: 'create-signal.html',
})
export class CreateSignalPage {

  isReadyToSave: boolean;
  signal: any;
  form: FormGroup;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public formBuilder: FormBuilder
  ) {
    this.form = formBuilder.group({
      elemento:['', Validators.required],
      measure:['', Validators.required],
      units:['', Validators.required],
      time_signal:['', Validators.required],
    });
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
  }

  /*ionViewDidLoad() {
    console.log('ionViewDidLoad CreateSignalPage');
  }
  */

  done() {
    if (!this.form.valid) { return; }
    this.viewCtrl.dismiss(this.form.value);
  }

  cancel(){
    this.viewCtrl.dismiss();
  }

}
