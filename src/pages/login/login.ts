import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  authenticated = false;
  public responseData =[];
  public responseFailsData = [];
  userData = {"email": "","password": ""};
  constructor(
    private alertCtrl: AlertController,
    private usersProvider:UsersProvider,
    public navCtrl: NavController, public navParams: NavParams,private storage: Storage) {
      this.storage.get('my_token').then((val) => {
        if(val!=null){
          this.authenticated = true;
        }        
      });
  }

  ionViewDidLoad() {
  }
  setAuthState(authenticated){
      if(authenticated){
      this.usersProvider.userLogin(this.userData)
      .subscribe((response)=> {this.responseData=response;
      if(this.responseData['status']!=0){
        this.navCtrl.push('UserProfilePage',{data:this.responseData['data']['profile']['id']      
        });
        this.storage.set('my_token', this.responseData['data']['profile']['id']).then(() => {
        this.authenticated = true; 
        });
      }else{
        this.responseFailsData=this.responseData['msg'];
        this.authenticated = false;
      }
      });
      this.storage.get('my_token').then((val) => {
        console.log(val);
        });
    } else {
      this.storage.remove('my_token').then(() => {
        this.authenticated = false;
      });
      this.storage.get('my_token').then((val) => {
        console.log(val);
        });
    }    
  }
  goToResetPassPage(){
    this.navCtrl.push('ResetPasswordPage'); 
  }
}