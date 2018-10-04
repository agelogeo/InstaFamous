import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import {LoginPage} from "../pages/login/login";
import {MyAccountProvider} from "../providers/my-account/my-account";
import {Storage} from "@ionic/storage";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(public myaccount:MyAccountProvider,
              storage: Storage,platform: Platform,
              statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();


    });

    /*storage.get('access_token').then((val) => {
      this.myaccount.access_token = val;
      alert(val);
      console.log('Your access_token is : ', val);
    });*/
  }
}
