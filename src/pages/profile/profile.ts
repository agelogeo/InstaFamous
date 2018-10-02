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
  public images = [
    {
      id: 1,
      username: 'friends',
      profile_img: 'https://instagram.fskg1-1.fna.fbcdn.net/vp/713593596bfb4238100a3445a63de3a8/5C46D953/t51.2885-19/s150x150/15338479_1300861239971389_3600258071038787584_a.jpg',
      post_img: 'https://instagram.fskg1-1.fna.fbcdn.net/vp/17ddae4f5554484ef402e209511c9a30/5BB5219E/t51.2885-15/e15/c236.0.607.607/41463056_568029200296391_5773190164652907818_n.jpg'
    },
    {
      id: 2,
      username: 'friends',
      profile_img: 'https://instagram.fskg1-1.fna.fbcdn.net/vp/713593596bfb4238100a3445a63de3a8/5C46D953/t51.2885-19/s150x150/15338479_1300861239971389_3600258071038787584_a.jpg',
      post_img: 'https://instagram.fskg1-1.fna.fbcdn.net/vp/5d8f6a9ab0907d27f5b023027fbfdaeb/5BB51C4D/t51.2885-15/e15/c236.0.607.607/42650128_2123451797673480_352347078391619748_n.jpg'
    },
    {
      id: 3,
      username: 'friends',
      profile_img: 'https://instagram.fskg1-1.fna.fbcdn.net/vp/713593596bfb4238100a3445a63de3a8/5C46D953/t51.2885-19/s150x150/15338479_1300861239971389_3600258071038787584_a.jpg',
      post_img: 'https://instagram.fskg1-1.fna.fbcdn.net/vp/9cda2917f32fe9d8e5567e7c7b75338a/5C5C89C7/t51.2885-15/sh0.08/e35/s640x640/40546691_2278140379088363_3760498839154152425_n.jpg'
    },
    {
      id: 4,
      username: 'friends',
      profile_img: 'https://instagram.fskg1-1.fna.fbcdn.net/vp/713593596bfb4238100a3445a63de3a8/5C46D953/t51.2885-19/s150x150/15338479_1300861239971389_3600258071038787584_a.jpg',
      post_img: 'https://instagram.fskg1-1.fna.fbcdn.net/vp/88843269e8063051ef2c8fccbd61611d/5BB4C9FB/t51.2885-15/e15/c236.0.607.607/40474359_321336348625590_2567993182638217375_n.jpg'
    },
    {
      id: 5,
      username: 'friends',
      profile_img: 'https://instagram.fskg1-1.fna.fbcdn.net/vp/713593596bfb4238100a3445a63de3a8/5C46D953/t51.2885-19/s150x150/15338479_1300861239971389_3600258071038787584_a.jpg',
      post_img: 'https://instagram.fskg1-1.fna.fbcdn.net/vp/515dca50b006c44bded20e3e98790a9c/5C5D7F85/t51.2885-15/sh0.08/e35/s640x640/40039669_2130927037162169_2005013195507617524_n.jpg'
    },
    {
      id: 6,
      username: 'friends',
      profile_img: 'https://instagram.fskg1-1.fna.fbcdn.net/vp/713593596bfb4238100a3445a63de3a8/5C46D953/t51.2885-19/s150x150/15338479_1300861239971389_3600258071038787584_a.jpg',
      post_img: 'https://instagram.fskg1-1.fna.fbcdn.net/vp/4cbc09f3c1f8f69905140f4146d9ea87/5BB5560D/t51.2885-15/e15/c236.0.607.607/40399242_2225602541001176_7711749094634130081_n.jpg'
    },
    {
      id: 7,
      username: 'friends',
      profile_img: 'https://instagram.fskg1-1.fna.fbcdn.net/vp/713593596bfb4238100a3445a63de3a8/5C46D953/t51.2885-19/s150x150/15338479_1300861239971389_3600258071038787584_a.jpg',
      post_img: 'https://instagram.fskg1-1.fna.fbcdn.net/vp/17ddae4f5554484ef402e209511c9a30/5BB5219E/t51.2885-15/e15/c236.0.607.607/41463056_568029200296391_5773190164652907818_n.jpg'
    },
    {
      id: 8,
      username: 'friends',
      profile_img: 'https://instagram.fskg1-1.fna.fbcdn.net/vp/713593596bfb4238100a3445a63de3a8/5C46D953/t51.2885-19/s150x150/15338479_1300861239971389_3600258071038787584_a.jpg',
      post_img: 'https://instagram.fskg1-1.fna.fbcdn.net/vp/5d8f6a9ab0907d27f5b023027fbfdaeb/5BB51C4D/t51.2885-15/e15/c236.0.607.607/42650128_2123451797673480_352347078391619748_n.jpg'
    },
    {
      id: 9,
      username: 'friends',
      profile_img: 'https://instagram.fskg1-1.fna.fbcdn.net/vp/713593596bfb4238100a3445a63de3a8/5C46D953/t51.2885-19/s150x150/15338479_1300861239971389_3600258071038787584_a.jpg',
      post_img: 'https://instagram.fskg1-1.fna.fbcdn.net/vp/9cda2917f32fe9d8e5567e7c7b75338a/5C5C89C7/t51.2885-15/sh0.08/e35/s640x640/40546691_2278140379088363_3760498839154152425_n.jpg'
    },
    {
      id: 10,
      username: 'friends',
      profile_img: 'https://instagram.fskg1-1.fna.fbcdn.net/vp/713593596bfb4238100a3445a63de3a8/5C46D953/t51.2885-19/s150x150/15338479_1300861239971389_3600258071038787584_a.jpg',
      post_img: 'https://instagram.fskg1-1.fna.fbcdn.net/vp/88843269e8063051ef2c8fccbd61611d/5BB4C9FB/t51.2885-15/e15/c236.0.607.607/40474359_321336348625590_2567993182638217375_n.jpg'
    },
    {
      id: 11,
      username: 'friends',
      profile_img: 'https://instagram.fskg1-1.fna.fbcdn.net/vp/713593596bfb4238100a3445a63de3a8/5C46D953/t51.2885-19/s150x150/15338479_1300861239971389_3600258071038787584_a.jpg',
      post_img: 'https://instagram.fskg1-1.fna.fbcdn.net/vp/515dca50b006c44bded20e3e98790a9c/5C5D7F85/t51.2885-15/sh0.08/e35/s640x640/40039669_2130927037162169_2005013195507617524_n.jpg'
    },
    {
      id: 12,
      username: 'friends',
      profile_img: 'https://instagram.fskg1-1.fna.fbcdn.net/vp/713593596bfb4238100a3445a63de3a8/5C46D953/t51.2885-19/s150x150/15338479_1300861239971389_3600258071038787584_a.jpg',
      post_img: 'https://instagram.fskg1-1.fna.fbcdn.net/vp/4cbc09f3c1f8f69905140f4146d9ea87/5BB5560D/t51.2885-15/e15/c236.0.607.607/40399242_2225602541001176_7711749094634130081_n.jpg'
    },
    {
      id: 13,
      username: 'friends',
      profile_img: 'https://instagram.fskg1-1.fna.fbcdn.net/vp/713593596bfb4238100a3445a63de3a8/5C46D953/t51.2885-19/s150x150/15338479_1300861239971389_3600258071038787584_a.jpg',
      post_img: 'https://instagram.fskg1-1.fna.fbcdn.net/vp/17ddae4f5554484ef402e209511c9a30/5BB5219E/t51.2885-15/e15/c236.0.607.607/41463056_568029200296391_5773190164652907818_n.jpg'
    },
    {
      id: 14,
      username: 'friends',
      profile_img: 'https://instagram.fskg1-1.fna.fbcdn.net/vp/713593596bfb4238100a3445a63de3a8/5C46D953/t51.2885-19/s150x150/15338479_1300861239971389_3600258071038787584_a.jpg',
      post_img: 'https://instagram.fskg1-1.fna.fbcdn.net/vp/5d8f6a9ab0907d27f5b023027fbfdaeb/5BB51C4D/t51.2885-15/e15/c236.0.607.607/42650128_2123451797673480_352347078391619748_n.jpg'
    },
    {
      id: 15,
      username: 'friends',
      profile_img: 'https://instagram.fskg1-1.fna.fbcdn.net/vp/713593596bfb4238100a3445a63de3a8/5C46D953/t51.2885-19/s150x150/15338479_1300861239971389_3600258071038787584_a.jpg',
      post_img: 'https://instagram.fskg1-1.fna.fbcdn.net/vp/9cda2917f32fe9d8e5567e7c7b75338a/5C5C89C7/t51.2885-15/sh0.08/e35/s640x640/40546691_2278140379088363_3760498839154152425_n.jpg'
    },
    {
      id: 16,
      username: 'friends',
      profile_img: 'https://instagram.fskg1-1.fna.fbcdn.net/vp/713593596bfb4238100a3445a63de3a8/5C46D953/t51.2885-19/s150x150/15338479_1300861239971389_3600258071038787584_a.jpg',
      post_img: 'https://instagram.fskg1-1.fna.fbcdn.net/vp/88843269e8063051ef2c8fccbd61611d/5BB4C9FB/t51.2885-15/e15/c236.0.607.607/40474359_321336348625590_2567993182638217375_n.jpg'
    },
    {
      id: 17,
      username: 'friends',
      profile_img: 'https://instagram.fskg1-1.fna.fbcdn.net/vp/713593596bfb4238100a3445a63de3a8/5C46D953/t51.2885-19/s150x150/15338479_1300861239971389_3600258071038787584_a.jpg',
      post_img: 'https://instagram.fskg1-1.fna.fbcdn.net/vp/515dca50b006c44bded20e3e98790a9c/5C5D7F85/t51.2885-15/sh0.08/e35/s640x640/40039669_2130927037162169_2005013195507617524_n.jpg'
    },
    {
      id: 18,
      username: 'friends',
      profile_img: 'https://instagram.fskg1-1.fna.fbcdn.net/vp/713593596bfb4238100a3445a63de3a8/5C46D953/t51.2885-19/s150x150/15338479_1300861239971389_3600258071038787584_a.jpg',
      post_img: 'https://instagram.fskg1-1.fna.fbcdn.net/vp/4cbc09f3c1f8f69905140f4146d9ea87/5BB5560D/t51.2885-15/e15/c236.0.607.607/40399242_2225602541001176_7711749094634130081_n.jpg'
    },
    {
      id: 19,
      username: 'friends',
      profile_img: 'https://instagram.fskg1-1.fna.fbcdn.net/vp/713593596bfb4238100a3445a63de3a8/5C46D953/t51.2885-19/s150x150/15338479_1300861239971389_3600258071038787584_a.jpg',
      post_img: 'https://instagram.fskg1-1.fna.fbcdn.net/vp/17ddae4f5554484ef402e209511c9a30/5BB5219E/t51.2885-15/e15/c236.0.607.607/41463056_568029200296391_5773190164652907818_n.jpg'
    },
    {
      id: 20,
      username: 'friends',
      profile_img: 'https://instagram.fskg1-1.fna.fbcdn.net/vp/713593596bfb4238100a3445a63de3a8/5C46D953/t51.2885-19/s150x150/15338479_1300861239971389_3600258071038787584_a.jpg',
      post_img: 'https://instagram.fskg1-1.fna.fbcdn.net/vp/5d8f6a9ab0907d27f5b023027fbfdaeb/5BB51C4D/t51.2885-15/e15/c236.0.607.607/42650128_2123451797673480_352347078391619748_n.jpg'
    },
    {
      id: 21,
      username: 'friends',
      profile_img: 'https://instagram.fskg1-1.fna.fbcdn.net/vp/713593596bfb4238100a3445a63de3a8/5C46D953/t51.2885-19/s150x150/15338479_1300861239971389_3600258071038787584_a.jpg',
      post_img: 'https://instagram.fskg1-1.fna.fbcdn.net/vp/9cda2917f32fe9d8e5567e7c7b75338a/5C5C89C7/t51.2885-15/sh0.08/e35/s640x640/40546691_2278140379088363_3760498839154152425_n.jpg'
    },
    {
      id: 22,
      username: 'friends',
      profile_img: 'https://instagram.fskg1-1.fna.fbcdn.net/vp/713593596bfb4238100a3445a63de3a8/5C46D953/t51.2885-19/s150x150/15338479_1300861239971389_3600258071038787584_a.jpg',
      post_img: 'https://instagram.fskg1-1.fna.fbcdn.net/vp/88843269e8063051ef2c8fccbd61611d/5BB4C9FB/t51.2885-15/e15/c236.0.607.607/40474359_321336348625590_2567993182638217375_n.jpg'
    },
    {
      id: 23,
      username: 'friends',
      profile_img: 'https://instagram.fskg1-1.fna.fbcdn.net/vp/713593596bfb4238100a3445a63de3a8/5C46D953/t51.2885-19/s150x150/15338479_1300861239971389_3600258071038787584_a.jpg',
      post_img: 'https://instagram.fskg1-1.fna.fbcdn.net/vp/515dca50b006c44bded20e3e98790a9c/5C5D7F85/t51.2885-15/sh0.08/e35/s640x640/40039669_2130927037162169_2005013195507617524_n.jpg'
    },
    {
      id: 24,
      username: 'friends',
      profile_img: 'https://instagram.fskg1-1.fna.fbcdn.net/vp/713593596bfb4238100a3445a63de3a8/5C46D953/t51.2885-19/s150x150/15338479_1300861239971389_3600258071038787584_a.jpg',
      post_img: 'https://instagram.fskg1-1.fna.fbcdn.net/vp/4cbc09f3c1f8f69905140f4146d9ea87/5BB5560D/t51.2885-15/e15/c236.0.607.607/40399242_2225602541001176_7711749094634130081_n.jpg'
    }
  ];

  constructor(public myaccount:MyAccountProvider,public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  // Define segment for everytime when profile page is active
  ionViewWillEnter() {
    this.profile_segment = 'grid';
  }

  // Triggers when user pressed a post
  pressPhoto(user_id: number, username: string, profile_img: string, post_img: string) {
    this.presentModal(user_id, username, profile_img, post_img);
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
