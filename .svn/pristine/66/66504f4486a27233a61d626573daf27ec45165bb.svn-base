import { Component } from '@angular/core';
import { IonicPage, NavParams,ViewController } from 'ionic-angular';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { PageAnimatePage } from '../page-animate/page-animate';
@IonicPage()
@Component({
  selector: 'page-video-popup',
  templateUrl: 'video-popup.html',
})
export class VideoPopupPage extends PageAnimatePage{
  public videoUrl=[];
  constructor(public viewController: ViewController, public navParams: NavParams, nativePageTransitions: NativePageTransitions,) {
    super(nativePageTransitions);
  }
  ionViewWillEnter() {
    this.animateTransitionUpDown();
  }
  ionViewDidLoad() {
    this.videoUrl=this.navParams.get("videoUrl");
  }
  closeModal(){
    this.viewController.dismiss();
  }

}
