import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { PageAnimatePage } from '../page-animate/page-animate';
@IonicPage()
@Component({
  selector: 'page-change-password',
  templateUrl: 'change-password.html',
})
export class ChangePasswordPage extends PageAnimatePage{
  constructor(nativePageTransitions: NativePageTransitions) {
    super(nativePageTransitions);
  }
  ionViewWillEnter() {
    this.animateTransition();
  }
}
