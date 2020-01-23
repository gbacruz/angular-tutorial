import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Appointment } from '../../models/appointment';
import { Appointments } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-new-appointment',
  templateUrl: 'new-appointment.html',
})
export class NewAppointmentPage {
  currAppointments: Appointment[];
  newAppointment: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public appointments:Appointments) {
    this.currAppointments = this.appointments.query();
    var item = {
      "name": "Checeo General",
      "start": '01/07/2017',
      "end": '01/07/2017',
      "symptoms":[],
      "signals":[],
      "medication":[],
    };
    this.newAppointment = new Appointment(item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewAppointmentPage');
  }

  goHome(){
    this.navCtrl.push('TutorialPage');
  }



}
