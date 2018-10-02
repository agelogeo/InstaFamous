import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyAccountProvider } from '../providers/my-account/my-account';
import {Profile} from "../pages/profile/profile";

import { ModalPost } from '../pages/modal-post/modal-post';
import {FreeLikePage} from "../pages/free-like/free-like";
import {FollowerStorePage} from "../pages/follower-store/follower-store";
import {LikeStorePage} from "../pages/like-store/like-store";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    Profile,
    ModalPost,
    FreeLikePage,
    FollowerStorePage,
    LikeStorePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    Profile,
    ModalPost,
    FreeLikePage,
    FollowerStorePage,
    LikeStorePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MyAccountProvider
  ]
})
export class AppModule {}
