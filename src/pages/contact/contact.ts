import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MyAccountProvider} from "../../providers/my-account/my-account";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  public cards = [
    {
      id: 1,
      header: 'Starter Pack',
      text: 'Start boosting your profile with 25 likes.',
      price: 0.75,
      likes: 25
    },
    {
      id: 2,
      header: 'Premium Pack',
      text: 'Follow up with the premium pack of 100 likes.',
      price: 2.5,
      likes: 100
    },
    {
      id: 3,
      header: 'Pro Pack',
      text: 'Every pro needs this pack of 250 likes.',
      price: 5.00,
      likes: 250
    },
   ];

  constructor(public myaccount : MyAccountProvider,public navCtrl: NavController) {

  }

  onBuyCoins(amount : number){
    this.myaccount.coins += amount;
  }

}
