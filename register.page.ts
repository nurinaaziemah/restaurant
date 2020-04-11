import { Component, OnInit, ViewChild  } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import { NavController, AlertController, } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  form: FormGroup;
 constructor(private fire: AngularFireAuth,
              public navCtrl: NavController,
              public alertCtrl: AlertController
              ) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, {
        updateOn:'blur',
        validators: [Validators.required]
      }),
      email: new FormControl(null, {
        updateOn:'blur',
        validators: [Validators.required]
      }),
      password: new FormControl(null, {
        updateOn:'blur',
        validators: [Validators.required]
      }),
      cpassword: new FormControl(null, {
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

  registerUser(){
    this.fire.auth.createUserWithEmailAndPassword(this.form.value.email, this.form.value.password)
    .then(data => {
      if(this.form.value.password !== this.form.value.cpassword ){
        return this.presentAlert("Passwords dont match"); 
      }else{
        console.log('got data', data);
        this.presentAlert('Success! You\'ve registered your account ');
        this.navCtrl.navigateRoot(['/tabs/homepage'] )
      }
      
    })
    .catch(error => {
     return
     
    });
  }
}
