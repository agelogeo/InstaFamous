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
import {LoginPage} from "../pages/login/login";
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {HttpClientModule} from "@angular/common/http";
import {IonicStorageModule} from "@ionic/storage";
import {TermsPage} from "../pages/terms/terms";
import {PrivacyPage} from "../pages/privacy/privacy";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    Profile,
    ModalPost,
    FreeLikePage,
    FollowerStorePage,
    LikeStorePage,
    LoginPage,
    TermsPage,
    PrivacyPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    Profile,
    ModalPost,
    FreeLikePage,
    FollowerStorePage,
    LikeStorePage,
    LoginPage,
    TermsPage,
    PrivacyPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MyAccountProvider,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
