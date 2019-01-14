import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyBidPage } from './my-bid';

@NgModule({
  declarations: [
    MyBidPage,
  ],
  imports: [
    IonicPageModule.forChild(MyBidPage),
  ],
})
export class MyBidPageModule {}
