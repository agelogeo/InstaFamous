import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MyAccountProvider} from "../../providers/my-account/my-account";
import {ContactPage} from "../contact/contact";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public myaccount : MyAccountProvider,public navCtrl: NavController) {

  }

  goToStore(){
    this.navCtrl.push(ContactPage);
  }

}
