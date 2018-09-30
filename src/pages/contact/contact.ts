import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MyAccountProvider} from "../../providers/my-account/my-account";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public myaccount : MyAccountProvider,public navCtrl: NavController) {

  }

  onBuyCoins(amount : number){
    this.myaccount.coins += amount;
  }

}
