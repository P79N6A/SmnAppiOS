import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ImagePopupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-image-popup',
  templateUrl: 'image-popup.html',
})
export class ImagePopupPage {
  public imgUrl=[];
  constructor(
    public navCtrl: NavController,
    public viewController: ViewController,
     public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.imgUrl=this.navParams.get("imgUrl");
  }
  closeModal(){
    this.viewController.dismiss();
  }
}
