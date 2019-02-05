import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TimerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-timer',
  templateUrl: 'timer.html',
})
export class TimerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
      //console.log(now, "now", "countDownDate", countDownDate, "distance", distance, "days", days);
      // Output the result in an element with id="auctionTimer"
      //document.getElementById("auctionTimer").innerHTML = days + "d " + hours + "h "+ minutes + "m " + seconds + "s ";
      document.getElementById("hours").innerHTML = hours+"";
      document.getElementById("minuts").innerHTML = minutes+"";
      document.getElementById("seconds").innerHTML = seconds+"";
      // If the count down is over, write some text 
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("auctionTimer").innerHTML = "AUCTION CLOSED";
      }
    }, 1000);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimerPage');
  }

}
