import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { PageAnimatePage } from '../page-animate/page-animate';
@IonicPage()
@Component({
  selector: 'page-auction-room',
  templateUrl: 'auction-room.html',
})
export class AuctionRoomPage extends PageAnimatePage {
  public allSugarBabies=[];
  tabBarElement: any;
  constructor(public navCtrl: NavController, nativePageTransitions: NativePageTransitions,
    private usersProvider:UsersProvider,
    public navParams: NavParams) {super(nativePageTransitions);
      this.tabBarElement=document.querySelectorAll(".tabbar");      
  }
  ionViewWillEnter() {
    this.animateTransition();
    if (this.tabBarElement != null) {
      Object.keys(this.tabBarElement).map((key) => {
        this.tabBarElement[key].style.display = 'none';
      });
    }
  }
  ionViewWillLeave() {
    if (this.tabBarElement != null) {
      Object.keys(this.tabBarElement).map((key) => {
        this.tabBarElement[key].style.display = 'flex';
      });
    }
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
    this.navCtrl.push('AuctionRoomPage');
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


