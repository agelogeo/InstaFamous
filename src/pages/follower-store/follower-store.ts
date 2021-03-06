import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {MyAccountProvider} from "../../providers/my-account/my-account";
import {HttpClient} from "@angular/common/http";

/**
 * Generated class for the FollowerStorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-follower-store',
  templateUrl: 'follower-store.html',
})
export class FollowerStorePage {

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

  constructor(public httpClient: HttpClient,private toastCtrl: ToastController,public myaccount : MyAccountProvider,public navCtrl: NavController) {

  }

  onBuyFollowers(amount : number){
   this.presentToast(amount);
  }

  goToStore(){
    this.navCtrl.parent.select(2);
  }

  presentToast(amount : number) {
    let toast = this.toastCtrl.create({
      message: `Thank you for buying ${amount} followers`,
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
