import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MyAccountProvider} from "../../providers/my-account/my-account";
import {ContactPage} from "../contact/contact";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  i : number = 0;
  isActivated : boolean = false;
  post_img : string = 'https://instagram.fskg1-1.fna.fbcdn.net/vp/18019ff3666548ed41bf81deff95e315/5C551086/t51.2885-15/e35/c236.0.607.607/37382376_260814908052477_4809595268158717952_n.jpg';

  public free_images = [
    {
      id: 1,
      post_img: 'https://instagram.fskg1-1.fna.fbcdn.net/vp/18019ff3666548ed41bf81deff95e315/5C551086/t51.2885-15/e35/c236.0.607.607/37382376_260814908052477_4809595268158717952_n.jpg'
    },
    {
      id: 2,
      post_img: 'https://instagram.fskg1-1.fna.fbcdn.net/vp/3b26c81b4a760eb8161d75249665d87f/5C60E8A8/t51.2885-15/sh0.08/e35/s640x640/42121775_307533026767742_8358830199718900869_n.jpg'
    },
    {
      id: 3,
      post_img: 'https://instagram.fskg1-1.fna.fbcdn.net/vp/00f08066ed2f0eefccd72166e281578a/5BB51082/t50.2886-16/42098008_1985188098186115_6602570627624730624_n.mp4'
    },
    {
      id: 4,
      post_img: 'https://instagram.fskg1-1.fna.fbcdn.net/vp/2fdc9c1f3348a7845c814d88d91cb604/5C4A6231/t51.2885-15/e35/41512205_235565503973774_2245543374697750663_n.jpg'
    }
  ]

  constructor(public myaccount : MyAccountProvider,public navCtrl: NavController) {

  }


  goToStore(){
    this.navCtrl.parent.select(2);
  }


  LikeButton(){
    this.isActivated = !this.isActivated;
  }

  NextButton(){
    this.i ++;
    if(this.i == this.free_images.length)
      this.i = 0;
  }
}
