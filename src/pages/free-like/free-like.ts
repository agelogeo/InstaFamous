import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MyAccountProvider} from "../../providers/my-account/my-account";
import {HttpClient} from "@angular/common/http";

/**
 * Generated class for the FreeLikePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-free-like',
  templateUrl: 'free-like.html',
})
export class FreeLikePage {

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
      post_img: 'https://instagram.fskg1-1.fna.fbcdn.net/vp/9f5edd287924e30395f991e739f755e5/5C579A1B/t51.2885-15/sh0.08/e35/s640x640/40567044_311554762955507_1264015443589653261_n.jpg'
    },
    {
      id: 4,
      post_img: 'https://instagram.fskg1-1.fna.fbcdn.net/vp/2fdc9c1f3348a7845c814d88d91cb604/5C4A6231/t51.2885-15/e35/41512205_235565503973774_2245543374697750663_n.jpg'
    }    ,
    {
      id: 5,
      post_img: 'https://instagram.fskg1-1.fna.fbcdn.net/vp/e6ddf6454d8e527afdc273e0064bcb9b/5C413870/t51.2885-15/e35/39525709_1875427272546782_3587824604573335552_n.jpg'
    }
  ]

  constructor(public httpClient: HttpClient,public myaccount : MyAccountProvider,public navCtrl: NavController) {

  }


  goToStore(){
    this.navCtrl.parent.select(2);
  }


  LikeButton(){
    this.isActivated = !this.isActivated;
    if(this.isActivated){
      this.myaccount.coins ++;
    }else{
      this.myaccount.coins --;
    }

  }

  NextButton(){
    this.isActivated = false;
    this.i ++;
    if(this.i == this.free_images.length)
      this.i = 0;
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
