import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, ModalController, Tabs, Nav} from 'ionic-angular';

import { ModalPost } from '../modal-post/modal-post';

import {MyAccountProvider} from "../../providers/my-account/my-account";
import {FollowerStorePage} from "../follower-store/follower-store";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Post} from "../../model/post";
import {TabsPage} from "../tabs/tabs";


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})

export class Profile {
  account: Observable<any>;
  recent_media : Observable<any>;


  public profile_segment:string;

  // You can get this data from your API. This is a dumb data for being an example.


  constructor(public httpClient: HttpClient,public myaccount:MyAccountProvider,public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
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
  presentModal(post_id: number, username: string, profile_img: string, post_img: string) {
    let modal = this.modalCtrl.create(ModalPost, 
    { // Send data to modal
      post_id: post_id,
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


  doRefresh(refresher){
    setTimeout(() => {
      refresher.complete();
    }, 10000);

    this.account = this.httpClient.get(`https://api.instagram.com/v1/users/self/?access_token=${this.myaccount.access_token}`);
    this.account.subscribe(data => {
      this.myaccount.account = JSON.parse(JSON.stringify(data));
    });

    this.recent_media = this.httpClient.get(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${this.myaccount.access_token}`);
    this.recent_media.subscribe(res => {
      this.myaccount.recent_media = [];
      const array = JSON.parse(JSON.stringify(res));
      for(var count = 0; count < array.data.length ; count++){
        const p = new Post();
        p.id = count;
        p.unique_id = array.data[count].id;
        p.thumbnail = array.data[count].images.thumbnail.url;
        p.image = array.data[count].images.standard_resolution.url;
        p.likes = array.data[count].likes.count;
        p.comments = array.data[count].comments.count;
        p.link = array.data[count].link;
        this.myaccount.recent_media.push(p);
      }


      refresher.complete();
      //alert('OK ARRAY');

    });
  }
}
