import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MyAccountProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MyAccountProvider {

  access_token : string = '';
  coins : number = 300;
  host : string = "https://givealike.a2hosted.com/deathwhisper.php?"

  constructor() {
    console.log('Hello MyAccountProvider Provider');
  }

}
