import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {MyAccountProvider} from "../../providers/my-account/my-account";
import {HttpClient} from "@angular/common/http";

/**
 * Generated class for the LikeStorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-like-store',
  templateUrl: 'like-store.html',
})
export class LikeStorePage {

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

  constructor(public httpClient: HttpClient,private toastCtrl:ToastController,public myaccount : MyAccountProvider,public navCtrl: NavController) {

  }

  onBuyCoins(amount : number){
    this.myaccount.coins += amount;
    this.presentToast(amount)
  }

  presentToast(amount : number) {
    let toast = this.toastCtrl.create({
      message: `Thank you for buying ${amount} likes`,
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  // Define segment for everytime when profile page is active
  ionViewWillEnter() {
    this.getCoins();
  }

  async getCoins(){

    this.httpClient.get(this.myaccount.host+'free_ads_limit=true&coins=true&device_id='+this.myaccount.device_id+'&access_token='+this.myaccount.access_token)
      .subscribe(data => {
        this.myaccount.free_ads_max_reached = data['limitReached'];
        this.myaccount.coins = data['coins'];
      });


  }

}
