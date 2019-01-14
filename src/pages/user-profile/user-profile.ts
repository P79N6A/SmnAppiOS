import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the UserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {
  public proInfo=[];
  public publicImage=[];
  public publicVideo=[];
  constructor(private storage: Storage, private modalController:ModalController,
    private usersProvider:UsersProvider, public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    this.storage.get('my_token').then((val) => {if(val!=null){   
      let postData = {"babyId":val};
      this.usersProvider.getSugarBabiesDetails(postData)
      .subscribe((response)=> {this.proInfo=response['data'],
      this.publicImage=response['data']['user_public_image'],
      this.publicVideo=response['data']['public_videos']
      });
      this.storage.get('my_token').then((val) => {
        console.log(val);
      });
    }else{
      this.navCtrl.push('LoginPage'); 
    }
    });
  }
  openImageModel(profile_pic){
		let openFilterModal=this.modalController.create('ImagePopupPage',{ imgUrl : profile_pic });	
		openFilterModal.present();
	}
}
