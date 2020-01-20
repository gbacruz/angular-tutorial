import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';

import { Appointment } from '../../models/appointment';
import { Appointments } from '../../providers';
import { Items } from '../../providers';



/**
 * Generated class for the HistorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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

}
