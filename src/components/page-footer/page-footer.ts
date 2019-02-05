import { Component,ViewChild } from '@angular/core';
import {NavController, NavParams,Nav } from 'ionic-angular';
import { App } from 'ionic-angular';
@Component({
  selector: 'page-footer',
  templateUrl: 'page-footer.html'
})
export class PageFooterComponent {
  isActive:string=null;
  @ViewChild(Nav) nav: Nav;
  constructor(public navCtrl: NavController, public navParams: NavParams,public app: App) {
  }
  // goAuctions(){
  //   this.navCtrl.setRoot('AboutUsPage');
  // }
  // goJoin(){
  //   this.navCtrl.setRoot('ContactPage');
  // }
  // goLogin(){
  //   this.navCtrl.setRoot('LoginPage');
  // }
  // goSb(){
  //   this.navCtrl.setRoot('SugarBabiesPage');
  // }
  
  contact(){
    this.navCtrl.setRoot('ContactPage');
    console.log(this.app.getRootNav()+"Uma");
  }
  about(){
    this.navCtrl.setRoot('AboutUsPage');
    //console.log(this.nav.getActiveChildNav()+"Uma");
  }
}
