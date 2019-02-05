import { Component, OnInit } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { PageAnimatePage } from '../page-animate/page-animate';
@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage extends PageAnimatePage implements OnInit {
  contactform: FormGroup;
  userData={"name":"","email":"","message":""};
  responseData:any;
  responseMsg = false;
  responseclass = "error";
  constructor(public usersProvider:UsersProvider, nativePageTransitions: NativePageTransitions) {
    super(nativePageTransitions);
  }
  ngOnInit() {
    let EMAILPATTERN = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/;
    this.contactform = new FormGroup({
      message: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(30)]),
      email: new FormControl('', [Validators.required, Validators.pattern(EMAILPATTERN)]),
    });
  }
  contactUs() {
    this.usersProvider.contactUs(this.userData)
      .subscribe((response) => {
        this.responseData = response,
          this.responseMsg = true;
        if (response['status'] == 1) {
          this.responseclass = "sucess-msg";
          this.contactform.reset();
        }
      });
  }
  ionViewWillEnter() {
    this.animateTransition();
  }

}
