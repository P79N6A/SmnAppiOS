import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
/**
 * Generated class for the AuctionRoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-auction-room',
  templateUrl: 'auction-room.html',
})
export class AuctionRoomPage {
  public allSugarBabies=[];
  constructor(public navCtrl: NavController,
    private usersProvider:UsersProvider,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.usersProvider.getSugarBabies()
		.subscribe((response)=> {this.allSugarBabies=response});
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
  home(){
    this.navCtrl.push('StorageDemoPage');
  }
}
