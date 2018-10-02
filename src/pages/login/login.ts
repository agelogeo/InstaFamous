import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {MyAccountProvider} from "../../providers/my-account/my-account";
import {TabsPage} from "../tabs/tabs";

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

  constructor(public myaccount : MyAccountProvider,private iab: InAppBrowser,public navCtrl: NavController, public navParams: NavParams) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    this.fakeinstagramLogin()/*.then(success => {
      alert(success.access_token);
    }, (error) => {
      alert(error);
    })*/;
  }

  instagramLogin(): Promise<any> {

    return new Promise(function(resolve, reject) {
      const browserRef = window.cordova.InAppBrowser.open("https://api.instagram.com/oauth/authorize/?client_id=656c7766e5c94e139c1837dab3a10122&redirect_uri=http://localhost&response_type=token", "_self" ,"location=no,clearsessioncache=yes,clearcache=yes").show();
      alert('Start');
      browserRef.addEventListener("loadstart", (event) => {
        alert('Inside of listener');
        if ((event.url).indexOf("http://localhost") === 0) {
          alert('Inside if');
          //browserRef.removeEventListener("exit", (event) => {});
          browserRef.close();
          var responseParameters = ((event.url).split("#")[1])/*.split("&")*/;
          var parsedResponse = {};
          for (var i = 0; i < responseParameters.length; i++) {
            parsedResponse[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
          }
          if (parsedResponse["access_token"] !== undefined && parsedResponse["access_token"] !== null) {
            resolve(parsedResponse);
          } else {
            alert('Reject');
            reject("Problem authenticating with Facebook");
          }
        }
        alert('Out of if')
      });
      /*browserRef.addEventListener("exit", function(event) {
        reject("The Facebook sign in flow was canceled");
      });*/
    });
  }

  fakeinstagramLogin() {


     const browser  = this.iab.create('https://api.instagram.com/oauth/authorize/?client_id=656c7766e5c94e139c1837dab3a10122&redirect_uri=http://localhost&response_type=token', '_self','location=no,clearsessioncache=yes,clearcache=yes');
      //alert('Start');
      browser.show();
      browser.on('loadstart').subscribe(event => {
        if ((event.url).indexOf("http://localhost") === 0) {
          //browserRef.removeEventListener("exit", (event) => {});
          //alert(event.url);
          var responseParameters = (event.url).split("#")/*.split("&")*/;
          alert(responseParameters.length);
          alert(responseParameters[0]);
          alert(responseParameters[1]);
          var parsedResponse = {};
          for (var i = 0; i < responseParameters.length; i++) {
            parsedResponse[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
          }
          if (parsedResponse["access_token"] !== undefined && parsedResponse["access_token"] !== null) {
            this.myaccount.access_token = parsedResponse["access_token"];
            alert(parsedResponse["access_token"]);
            this.navCtrl.setRoot(TabsPage);
          } else {
            alert('Reject');
          }
          browser.close();
        }
        //alert('Out of if')
      });

  }
}
