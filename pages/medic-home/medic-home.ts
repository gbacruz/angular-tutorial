import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MedicHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medic-home',
  templateUrl: 'medic-home.html',
})
export class MedicHomePage {
  myappointments:any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
    this.myappointments = [{
        patient:{
            name:'Aldo Mares'
          },
        syntoms:{},
        signals:{},
        medications:{},
        attendans:{},
        diagnostic:'No hay diagnostico',
        info:{
          startdate:'09/02/2020'
        }
      },
      {
        patient:{
            name:'Aldo Land'
          },
        syntoms:{},
        signals:{},
        medications:{},
        attendans:{},
        diagnostic:'No hay diagnostico',
        info:{
          startdate:'09/02/2020'
        }
      }

    ];
  
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicHomePage');
  }

  logOut(){
    alert('aa');
    this.navCtrl.push('LoginPage');

  }

}
