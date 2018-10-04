import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, ModalController, Tabs, Nav} from 'ionic-angular';

import { ModalPost } from '../modal-post/modal-post';

import {MyAccountProvider} from "../../providers/my-account/my-account";
import {FollowerStorePage} from "../follower-store/follower-store";


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})

export class Profile {

  public profile_segment:string;

  // You can get this data from your API. This is a dumb data for being an example.


  constructor(public myaccount:MyAccountProvider,public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    //alert(this.myaccount.account.data);
  }

  // Define segment for everytime when profile page is active
  ionViewWillEnter() {
    this.profile_segment = 'grid';
  }

  // Triggers when user pressed a post
  pressPhoto(user_id: number, username: string, profile_img: string, post_img: string) {
    this.presentModal(user_id, username, profile_img, post_img);
    //alert(this.myaccount.account.data.username);
    //alert(JSON.stringify(this.myaccount.account.data))
  }

  // Set post modal
  presentModal(user_id: number, username: string, profile_img: string, post_img: string) {
    let modal = this.modalCtrl.create(ModalPost, 
    { // Send data to modal
      user_id: user_id, 
      username: username,
      profile_img: profile_img,
      post_img: post_img
    }, // This data comes from API!
    { showBackdrop: true, enableBackdropDismiss: true });
    modal.present();
  }

  goToStore(){
    this.navCtrl.parent.select(2);
  }

  goToFollowersStore(){
    this.navCtrl.push(FollowerStorePage);
  }

}
