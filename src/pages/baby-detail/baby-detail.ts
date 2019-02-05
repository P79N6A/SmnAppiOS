import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { PageAnimatePage } from '../page-animate/page-animate';
@IonicPage()
@Component({
  selector: 'page-baby-detail',
  templateUrl: 'baby-detail.html',
})
export class BabyDetailPage extends PageAnimatePage {
	public proInfo=[];
  public publicImage=[];
  public publicVideo=[];
  public babyId:number;
  babyDetails:string;
  constructor(private usersProvider:UsersProvider,nativePageTransitions: NativePageTransitions,
  	private modalController:ModalController, public navCtrl: NavController, public navParams: NavParams) {
      super(nativePageTransitions);
      this.babyId=this.navParams.get("sugarBabyId");
  }
  
  ionViewWillEnter() {
    this.animateTransition();
    this.babyDetails = "about";
    let countDownDate = new Date("Oct 22, 2019 14:50:25").getTime();
    // Update the count down every 1 second
    let x = setInterval(function () {
      // Get todays date and time
      let now = new Date().getTime();
      // Find the distance between now and the count down date
      let distance = countDownDate - now;
      // Time calculations for days, hours, minutes and seconds
      //let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      // Output the result in an element with id="auctionTimer"
      //document.getElementById("auctionTimer").innerHTML = days + "d " + hours + "h "+ minutes + "m " + seconds + "s ";
	  const time = document.getElementById("timer");
	  if(time)
	  {
		  document.getElementById("hours").innerHTML = hours+"";
		  document.getElementById("minuts").innerHTML = minutes+"";
		  document.getElementById("seconds").innerHTML = seconds+"";
		  // If the count down is over, write some text 
		  if (distance < 0) {
			clearInterval(x);
			document.getElementById("auctionTimer").innerHTML = "AUCTION CLOSED";
          }
	  }
    }, 1000);

  }
  ionViewWillLeave(){
  }
  ionViewDidLoad() {
     let postData = {"babyId":this.babyId};
    this.usersProvider.getSugarBabiesDetails(postData)
		//.subscribe((response)=> console.log(response['data']['singleBaby']['nickname']));
    .subscribe((response)=> {this.proInfo=response['data'],
    this.publicImage=response['data']['user_public_image'],
    this.publicVideo=response['data']['public_videos']
    });
  }
  openImageModel(profile_pic){
		let openImgModal=this.modalController.create('ImagePopupPage',{ imgUrl : profile_pic });	
		openImgModal.present();
  }
  openVideoModel(user_video){
		let openVideoModal=this.modalController.create('VideoPopupPage',{ videoUrl : user_video });	
		openVideoModal.present();
  }
  openLogin(){
    this.navCtrl.push('LoginPage');
  }

}
