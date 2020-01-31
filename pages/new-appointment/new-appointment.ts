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
      "patient":{
        name:'Paciente',
        age:'edad',
        gender:'genero'
      },
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
    let addModal = this.modalCtrl.create('CreateSignalPage');
    addModal.onDidDismiss(signal => {
      if (signal) {
        this.newAppointment.signals.push(signal);
      }
    })
    addModal.present();
  }

  addItem() {
    let addModal = this.modalCtrl.create('CreateSymptomPage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.newAppointment.symptoms.push(item);
      }
    })
    addModal.present();
  }


  addPatient() {
    let addModal = this.modalCtrl.create('CreatePatientPage');
    addModal.onDidDismiss(patient => {
      if (patient) {
        this.newAppointment.patient.name = patient.name;
        this.newAppointment.patient.age = patient.age;
        this.newAppointment.patient.gender = patient.gender;
      }
    })
    addModal.present();
  }




}
