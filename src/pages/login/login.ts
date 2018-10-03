import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {MyAccountProvider} from "../../providers/my-account/my-account";
import {TabsPage} from "../tabs/tabs";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../../model/post";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var window: any;

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  CLIENT_ID : string = '656c7766e5c94e139c1837dab3a10122';
  account: Observable<any>;
  recent_media : Observable<any>;
  constructor( public httpClient: HttpClient,public myaccount : MyAccountProvider,private iab: InAppBrowser,public navCtrl: NavController, public navParams: NavParams) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    this.InstagramLogin()/*.then(success => {
      alert(success.access_token);
    }, (error) => {
      alert(error);
    })*/;
  }


  InstagramLogin() {


     const browser  = this.iab.create('https://api.instagram.com/oauth/authorize/?client_id='+this.CLIENT_ID+'&redirect_uri=http://localhost&response_type=token', '_self','location=no');
      //alert('Start');
      browser.show();
      browser.on('loadstart').subscribe(event => {
        if ((event.url).indexOf("http://localhost") === 0) {
          var responseParameters = (event.url).split("#");
          var parsedResponse = {};
          for (var i = 0; i < responseParameters.length; i++) {
            parsedResponse[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
          }
          if (parsedResponse["access_token"] !== undefined && parsedResponse["access_token"] !== null) {
            this.myaccount.access_token = parsedResponse["access_token"];

            this.account = this.httpClient.get(`https://api.instagram.com/v1/users/self/?access_token=${this.myaccount.access_token}`);
            this.account.subscribe(data => {
              this.myaccount.account = JSON.parse(JSON.stringify(data));
            });

            this.recent_media = this.httpClient.get(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${this.myaccount.access_token}`);
            this.recent_media.subscribe(res => {
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
              alert('OK ARRAY');
              this.navCtrl.setRoot(TabsPage);
            });

          } else {
            alert('Reject');
          }
          browser.close();
        }
        //alert('Out of if')
      });

  }
}
