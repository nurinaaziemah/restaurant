import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {AngularFireAuth} from 'angularfire2/auth';
import { NavController, AlertController } from '@ionic/angular';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

 form:FormGroup;
  constructor(public navCtrl: NavController,
               private fire: AngularFireAuth,
               private alertCtrl: AlertController) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, {
        updateOn:'blur',
        validators: [Validators.required]
      }),
      password: new FormControl(null, {
        updateOn:'blur',
        validators: [Validators.required]
      }),
    })
  }

  async presentAlert(message:string) {
    const alert = await this.alertCtrl.create({
      header: 'Info!',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
 
  login(){
    this.fire.auth.signInWithEmailAndPassword(this.form.value.email, this.form.value.password)
    .then(data => {
      console.log('got some data', this.fire.auth.currentUser.displayName);
      this.presentAlert('Success! You\'ve logged in');
      this.navCtrl.navigateRoot(['/pages/home'] )
    })
    .catch(error => {
      this.presentAlert('There must be an error with the credentials. Please try to log-in again!');
    })
  }

}
