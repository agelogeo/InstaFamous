import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MyAccountProvider} from "../../providers/my-account/my-account";
import {ContactPage} from "../contact/contact";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  public cards = [
    {
      id: 1,
      header: 'Starter Pack',
      text: 'Start boosting your profile with 100 followers.',
      price: 2.5,
      followers: 100
    },
    {
      id: 2,
      header: 'Premium Pack',
      text: 'Follow up with the premium pack of 250 followers.',
      price: 5,
      followers: 250
    },
    {
      id: 3,
      header: 'Pro Pack',
      text: 'Every pro needs this pack of 500 followers.',
      price: 7.50,
      followers: 500
    },
  ];

  constructor(public myaccount : MyAccountProvider,public navCtrl: NavController) {

  }

  onBuyFollowers(amount : number){
    this.myaccount.coins += amount;
  }

  goToStore(){
    this.navCtrl.parent.select(2);
  }

}
