
import { Injectable } from '@angular/core';
import {Post} from "../../model/post";
import {TabsPage} from "../../pages/tabs/tabs";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

/*
  Generated class for the MyAccountProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MyAccountProvider {


  access_token : string = null;
  account : any;
  coins : number = 300;
  host : string = "https://givealike.a2hosted.com/deathwhisper.php?";
  recent_media : Post[] = [];

  constructor() {
    console.log('Hello MyAccountProvider Provider');


  }







}
