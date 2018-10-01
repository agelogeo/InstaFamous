import { Component } from '@angular/core';
import {ModalController, ViewController, NavParams, LoadingController, ToastController} from 'ionic-angular';
import {MyAccountProvider} from "../../providers/my-account/my-account";

@Component({
  selector: 'page-modalpost',
  templateUrl: 'modal-post.html',
})
export class ModalPost {

  likes : number = 25;
  minimum_required_balance : number = 25;

  public modal_data = {};

  constructor(private toastCtrl: ToastController,public loadingCtrl: LoadingController,public myaccount: MyAccountProvider,public viewCtrl: ViewController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.modal_data = { // Getting data from previous page
      id: this.navParams.get('user_id'),
      username: this.navParams.get('username'),
      profile_img: this.navParams.get('profile_img'),
      post_img: this.navParams.get('post_img')
    };
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  SendLikes(){
    this.presentLoadingDefault();
  }

  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 2000);

    loading.onDidDismiss(() => {
      this.myaccount.coins -= this.likes;
      this.presentToast();
      this.dismiss();
    });
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Thank you for your order.',
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  
}
