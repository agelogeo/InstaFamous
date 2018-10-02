import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FollowerStorePage } from './follower-store';

@NgModule({
  declarations: [
    FollowerStorePage,
  ],
  imports: [
    IonicPageModule.forChild(FollowerStorePage),
  ],
})
export class FollowerStorePageModule {}
