import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { PageAnimatePage } from '../page-animate/page-animate';
@IonicPage()
@Component({
  selector: 'page-sugar-babies',
  templateUrl: 'sugar-babies.html',
})
export class SugarBabiesPage extends PageAnimatePage {
	public allSugarBabies=[];
  constructor(private usersProvider:UsersProvider,
  	public navCtrl: NavController, nativePageTransitions: NativePageTransitions) {
			super(nativePageTransitions);
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
	getItems(ev: any) {
	    // set val to the value of the searchbar
			const val = ev.target.value;
    // Reset items back to all of the items
    this.usersProvider.getSugarBabies()
		.subscribe((response)=> {
			let users = response;
		      // if the value is an empty string don't filter the items
					if (val && val.trim() != '') {
						this.allSugarBabies = users.filter((user) => {
							return (user.nickname.toLowerCase().indexOf(val.toLowerCase()) > -1);
						})
					}else{
						this.allSugarBabies=users;
					}
		});
  }
}
