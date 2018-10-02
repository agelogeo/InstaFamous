import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LikeStorePage } from './like-store';

@NgModule({
  declarations: [
    LikeStorePage,
  ],
  imports: [
    IonicPageModule.forChild(LikeStorePage),
  ],
})
export class LikeStorePageModule {}
