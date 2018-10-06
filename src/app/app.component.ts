import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import {LoginPage} from "../pages/login/login";
import {MyAccountProvider} from "../providers/my-account/my-account";
import {Storage} from "@ionic/storage";
import {TermsPage} from "../pages/terms/terms";
import {PrivacyPage} from "../pages/privacy/privacy";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = LoginPage;

  // Status : 0 - anonymous , 1 - user , 2 - always on
  pages: Array<{title: string, component: any , icon : string , status : number}>;

  constructor(public myaccount:MyAccountProvider,
              storage: Storage,platform: Platform,
              statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();


    });

    this.pages = [
      { title: 'Home', component: TabsPage , icon : 'home' , status : 1},
      { title: 'Privacy', component: PrivacyPage , icon : 'lock' , status : 2},
      { title: 'Terms', component: TermsPage , icon : 'paper' , status : 2},
      { title: 'Tutorial', component: TermsPage , icon : 'help-circle' , status : 2},
      { title: 'Contact Us', component: TermsPage , icon : 'mail' , status : 1},
      { title: 'Share', component: TermsPage , icon : 'share' , status : 2},
      { title: 'Log In', component: LoginPage , icon : 'log-in' , status : 0},
      { title: 'Sign Out', component: LoginPage , icon : 'log-out' , status : 1}
    ];

    /*storage.get('access_token').then((val) => {
      this.myaccount.access_token = val;
      alert(val);
      console.log('Your access_token is : ', val);
    });*/
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if(page.component == LoginPage){
      this.myaccount.access_token = null;
    }
    this.nav.setRoot(page.component);
  }
}
