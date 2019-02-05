import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideoPopupPage } from './video-popup';

@NgModule({
  declarations: [
    VideoPopupPage,
  ],
  imports: [
    IonicPageModule.forChild(VideoPopupPage),
  ],
})
export class VideoPopupPageModule {}
