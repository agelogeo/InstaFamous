import { Component } from '@angular/core';

import {Profile} from "../profile/profile";
import {FreeLikePage} from "../free-like/free-like";
import {LikeStorePage} from "../like-store/like-store";
import {HttpClient} from "@angular/common/http";
import {MyAccountProvider} from "../../providers/my-account/my-account";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Profile;
  tab2Root = FreeLikePage;
  tab3Root = LikeStorePage;

  constructor(public httpClient: HttpClient,public myaccount : MyAccountProvider) {



  }

  ionViewWillEnter(){

  }



}
