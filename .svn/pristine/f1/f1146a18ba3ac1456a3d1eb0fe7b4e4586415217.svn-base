import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { PageAnimatePage } from '../page-animate/page-animate';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage extends PageAnimatePage {
  public allSugarBabies=[];
  constructor(public navCtrl: NavController,nativePageTransitions: NativePageTransitions,
    private usersProvider:UsersProvider,
    public navParams: NavParams) {super(nativePageTransitions);
  }
  ionViewWillEnter() {
    this.animateTransition();
  }
  ionViewDidLoad() {
    this.usersProvider.getSugarBabies()
		.subscribe((response)=> {this.allSugarBabies=response});
  }
  goToUserDetailPage(babyId){
  	this.navCtrl.push('BabyDetailPage',{
  		sugarBabyId:babyId
  	});
	}
  enterAuctionRoom(){
    this.navCtrl.setRoot('AuctionRoomPage');
  }
  browseSb(){
    this.navCtrl.push('SugarBabiesPage');
  }
  join(){
    this.navCtrl.push('JoinUsPage');
  }
  login(){
    this.navCtrl.push('LoginPage');
  }
}
