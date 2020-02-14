import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { User } from '../../providers';
import { TutorialPage } from '../';
import { MedicHomePage } from '../';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  users: any;
  pagelog: any;
  account: { email: string, password: string } = {
    email: 'medico',
    password: 'test'
  };

  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {


      this.users = {
        'paciente':{
          'profile':'patient'
          },
        'medico':{
         'profile':'medic' 
        }
      };

      this.pagelog = {
        'medic': MedicHomePage,
        'patient':TutorialPage
      };



    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
  }

  // Attempt to login in through our User service
  doLogin() {
    this.user.login(this.account).subscribe((resp) => {
      alert(this.account);
      //this.navCtrl.push(TutorialPage);
    }, (err) => {
      if(this.users[this.account.email]){
        var a = this.loginErrorString;
        var profilep = this.users[this.account.email].profile;
        var pagego = this.pagelog[profilep];
        this.navCtrl.push(pagego);
      }
      else{
      //this.navCtrl.push(TutorialPage);
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: 'Usuario no valido',
        duration: 3000,
        position: 'top'
      });
      toast.present();

      }
    });
  }
}
