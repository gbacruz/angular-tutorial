import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { Appointment } from '../../models/appointment';
import { Appointments } from '../../providers';
import { Item } from '../../models/item';


@IonicPage()
@Component({
  selector: 'page-new-appointment',
  templateUrl: 'new-appointment.html',
})
export class NewAppointmentPage {
  currAppointments: Appointment[];
  newAppointment: any;
  symptom:Item[]=[];
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public appointments:Appointments,
              public modalCtrl: ModalController,
              public viewCtrl: ViewController
              ) {
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

  addSymptom(){
    var synp = {
      "zone":"cabeza",
      "intensity":"bajo",
      "indicator":"lobulo derecho",
      "desc":"",
      "synp":"dolor"
    };
    this.newAppointment.symptoms.push(synp);
  }


  addSignal(){
    var signal = {
      "element":"Temperatura",
      "measure":"67",
      "units":"grados centigrados",
      "time":"un par de horas",
    };
    this.newAppointment.signals.push(signal);
  }


    addItem() {
    let addModal = this.modalCtrl.create('CreateSymptomPage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.newAppointment.symptoms.add(item);
      }
    })
    addModal.present();
  }



}
