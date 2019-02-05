import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { PageAnimatePage } from '../page-animate/page-animate';
@IonicPage()
@Component({
  selector: 'page-join-us',
  templateUrl: 'join-us.html',
})
export class JoinUsPage extends PageAnimatePage{
  joinform: FormGroup;
  responseclass = "error";
  ageOrPasswordError:string;
  userData={"gender":"","interestedin":"","user_type":"","nickname":"","email":"","password":"","phone_number":""};
  checkData={"age":"","confirmPassword":""};
  responseData:any;
  responseMsg = false;
  constructor(public usersProvider:UsersProvider,nativePageTransitions: NativePageTransitions) {
    super(nativePageTransitions);
  }
  ngOnInit() {
    let EMAILPATTERN = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/;
    this.joinform = new FormGroup({
      userType: new FormControl('', [Validators.required]),
      nickname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(30)]),
      email: new FormControl('', [Validators.required, Validators.pattern(EMAILPATTERN)]),
      password: new FormControl('', [Validators.required,Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required]),
      phone_number: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      interestedin: new FormControl('', [Validators.required]),
    });
  }
  ionViewWillEnter() {
    this.animateTransition();
  }
  joinUs() {
    if (this.checkData.age=="yes") {
      if (this.userData.password == this.checkData.confirmPassword) {
        this.ageOrPasswordError = null;
        this.usersProvider.joinUs(this.userData).subscribe((response) => {
          this.responseData = response, this.responseMsg = true;
          if (response['status'] == 1) {
            this.responseclass = "sucess-msg";
            this.joinform.reset();
          }
        });
      } else {
        this.ageOrPasswordError = "Password And ConfirmPassword is Not Same";
      }
    } else {
      this.ageOrPasswordError = "You are under 18, you are not allowed to register with SugarMeNow";
    }
  }
}
