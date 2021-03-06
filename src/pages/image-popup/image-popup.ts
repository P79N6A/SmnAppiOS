import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { PageAnimatePage } from '../page-animate/page-animate';
@IonicPage()
@Component({
  selector: 'page-image-popup',
  templateUrl: 'image-popup.html',
})
export class ImagePopupPage extends PageAnimatePage {
  public imgUrl=[];
  constructor(nativePageTransitions: NativePageTransitions,
    public viewController: ViewController,public navParams: NavParams) {
      super(nativePageTransitions);
  }
  ionViewWillEnter() {
    this.animateTransitionUpDown();
  }
  ionViewDidLoad() {
    this.imgUrl=this.navParams.get("imgUrl");
  }
  closeModal(){
    this.viewController.dismiss();
  }
}
