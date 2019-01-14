import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
/**
 * Generated class for the SugarBabiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sugar-babies',
  templateUrl: 'sugar-babies.html',
})
export class SugarBabiesPage {
	public allSugarBabies=[];
  constructor(
  	private usersProvider:UsersProvider,
  	public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
   	this.usersProvider.getSugarBabies()
		.subscribe((response)=> {this.allSugarBabies=response});
		//.subscribe(response=> console.log(response));
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
					}
		});
  }
}
