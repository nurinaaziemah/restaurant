import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
  import { AngularFireAuth } from 'angularfire2/auth';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth'

const firebaseAuth = {
  apiKey: "AIzaSyCuKgIUzv4kI8vBNJeDvdG-Lu2wnRsl0QA",
  authDomain: "rest-auth-18422.firebaseapp.com",
  databaseURL: "https://rest-auth-18422.firebaseio.com",
  projectId: "rest-auth-18422",
  storageBucket: "rest-auth-18422.appspot.com",
  messagingSenderId: "449683911853",
  appId: "1:449683911853:web:797adbeb12e9f90d2b0224",
  measurementId: "G-GSV07VQX8J"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(firebaseAuth), AngularFireAuthModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AngularFireAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
