import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { PageAnimatePage } from '../page-animate/page-animate';
@IonicPage()
@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})
export class ResetPasswordPage extends PageAnimatePage {
  userData = {"email": ""};
  responseData: any;
  responseMsg = false;
  constructor(private usersProvider: UsersProvider, nativePageTransitions: NativePageTransitions) {
    super(nativePageTransitions);
  }
  resetPassword() {
    this.usersProvider.resetPassword(this.userData)
      .subscribe((response) => {
        this.responseData = response,
        this.responseMsg = true;
      });
  }
  ionViewWillEnter() {
    this.animateTransition();
  }

}
