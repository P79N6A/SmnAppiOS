import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
/**
 * Generated class for the BabyDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-baby-detail',
  templateUrl: 'baby-detail.html',
})
export class BabyDetailPage {
	public proInfo=[];
  public publicImage=[];
  public publicVideo=[];
  public babyId:number;
  constructor(private usersProvider:UsersProvider,
  	private modalController:ModalController, public navCtrl: NavController, public navParams: NavParams) {
    this.babyId=this.navParams.get("sugarBabyId");
  
  }

  ionViewDidLoad() {
     let postData = {"babyId":this.babyId};
     //console.log(postData);
    this.usersProvider.getSugarBabiesDetails(postData)
		//.subscribe((response)=> console.log(response['data']['singleBaby']['nickname']));
    .subscribe((response)=> {this.proInfo=response['data'],
    this.publicImage=response['data']['user_public_image'],
    this.publicVideo=response['data']['public_videos']
    });
  }
  openImageModel(profile_pic){
		let openFilterModal=this.modalController.create('ImagePopupPage',{ imgUrl : profile_pic });	
		openFilterModal.present();
	}

}
