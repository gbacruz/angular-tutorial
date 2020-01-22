import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Appointments } from '../../providers'
/**
 * Generated class for the AppointmentDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-appointment-detail',
  templateUrl: 'appointment-detail.html',
})
export class AppointmentDetailPage {
  appointment: any;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              appoinments: Appointments){
                var curr_appointment = navParams.get('appointment');
                this.appointment = curr_appointment || appoinments.defaultAppointment;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointmentDetailPage');
  }

  pop(){
    this.navCtrl.setRoot('HistorialPage');
}

}
