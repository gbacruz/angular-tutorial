import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';

import { Appointment } from '../../models/appointment';
import { Appointments } from '../../providers';
@IonicPage()
@Component({
  selector: 'page-historial',
  templateUrl: 'historial.html',
})
export class HistorialPage {
  currentAppointments: Appointment[];

  constructor(public navCtrl: NavController, public appointments: Appointments, public modalCtrl: ModalController) {
    this.currentAppointments = this.appointments.query();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistorialPage');
  }

  openAppointment(appointment:Appointment){
    this.navCtrl.push('AppointmentDetailPage', {
      appointment: appointment
    });
  }

  newAppointment(){
    this.navCtrl.push('NewAppointmentPage');
  }


}
