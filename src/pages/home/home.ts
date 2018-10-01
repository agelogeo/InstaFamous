import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MyAccountProvider} from "../../providers/my-account/my-account";
import {ContactPage} from "../contact/contact";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  coins : number = 95;

  constructor(public myaccount : MyAccountProvider,public navCtrl: NavController) {

  }

  onClick(){
    this.myaccount.coins -= 50;
  }

  goToStore(){
    this.navCtrl.push(ContactPage);
  }

}
