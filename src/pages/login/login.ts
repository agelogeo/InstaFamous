import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {MyAccountProvider} from "../../providers/my-account/my-account";
import {TabsPage} from "../tabs/tabs";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../../model/post";
import {Storage} from "@ionic/storage";
import {TermsPage} from "../terms/terms";
import {PrivacyPage} from "../privacy/privacy";
import {StatusBar} from "@ionic-native/status-bar";

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
  account: Observable<any>;
  recent_media : Observable<any>;
  agree: boolean;
  CLIENT_ID : string = '656c7766e5c94e139c1837dab3a10122';

  constructor(public statusBar: StatusBar,public loadingCtrl: LoadingController,private toastCtrl:ToastController,public storage:Storage, public httpClient: HttpClient,public myaccount : MyAccountProvider,private iab: InAppBrowser,public navCtrl: NavController, public navParams: NavParams) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    if(!this.agree){
      let toast = this.toastCtrl.create({
        message: 'You should agree with Privacy Policy and Terms of use to continue.',
        duration: 5000,
        position: 'bottom'
      });
      toast.present();

    }else{
      this.fakeInstagramLogin().then(success => {
        //alert(success.access_token);
        this.myaccount.access_token = success.access_token;
        this.getMedia();
      }, (error) => {
        alert(error);
      });
      //this.InstagramLogin();
    }
  }


  public fakeInstagramLogin(): Promise<any>{

      return new Promise(function(resolve, reject) {
        var browserRef = window.cordova.InAppBrowser.open('https://api.instagram.com/oauth/authorize/?client_id=656c7766e5c94e139c1837dab3a10122&redirect_uri=http://localhost&response_type=token', '_blank','location=no,toolbar=no');
        browserRef.addEventListener("loadstart", (event) => {
          if ((event.url).indexOf("http://localhost") === 0) {
            browserRef.removeEventListener("exit", (event) => {});
            browserRef.close();
            var responseParameters = (event.url).split("#");
            var parsedResponse = {};
            for (var i = 0; i < responseParameters.length; i++) {
              parsedResponse[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
            }
            if (parsedResponse["access_token"] !== undefined && parsedResponse["access_token"] !== null) {
              resolve(parsedResponse);
            } else {
              reject("Problem authenticating with Facebook");
            }
          }
        });
        browserRef.addEventListener("exit", function(event) {
          reject("The Facebook sign in flow was canceled");
        });
      });

  }


  InstagramLogin() {
    this.presentLoadingDefault();

     const browser  = this.iab.create('https://api.instagram.com/oauth/authorize/?client_id='+this.CLIENT_ID+'&redirect_uri=http://localhost&response_type=token', '_blank','location=no,toolbar=no');
      //alert('Start');
      browser.show();


      browser.on('exit').subscribe( event => {
          this.statusBar.hide();
        this.statusBar.show();

      });

      browser.on('beforeload').subscribe(event => {
        if ((event.url).indexOf("http://localhost") === 0) {
          browser.close();

          var responseParameters = (event.url).split("#");
          var parsedResponse = {};
          for (var i = 0; i < responseParameters.length; i++) {
            parsedResponse[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
          }
          if (parsedResponse["access_token"] !== undefined && parsedResponse["access_token"] !== null) {
            this.myaccount.access_token = parsedResponse["access_token"];


            //this.storage.set('access_token', this.myaccount.access_token);



          } else {
            alert('Reject');
          }

        }

        //alert('Out of if')
      });


  }

  showTerms() {
    this.navCtrl.push(TermsPage);
  }

  showPrivacy(){
    this.navCtrl.push(PrivacyPage);
  }

  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 3000);
  }

  getMedia(){
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

      //alert('OK ARRAY');
      this.navCtrl.setRoot(TabsPage);
    });
  }
}
