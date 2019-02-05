import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
@IonicPage()
@Component({
  selector: 'page-page-animate',
  templateUrl: 'page-animate.html',
})
export class PageAnimatePage {

  private isCached: boolean;
  private nativePageTransitions: NativePageTransitions;

  /**
  * Page Constructor
  * @param {NativePageTransitions} transitions
  */
  constructor(public transitions: NativePageTransitions) {
      this.nativePageTransitions = transitions;
      this.isCached = false;
  }
  
  /**
  * Trigger native animation. If page is entering by default slide to left, if page is 
  * already created slide to right.
  * @param {string} enterPageDirection (Optional, default 'left')
  * @param {string} resumePageDirection (Optional, default 'right')
  */
  animateTransition(enterDirection?: string, resumeDirection?: string) {
     let resumeTransition = resumeDirection ? resumeDirection : 'right';
     let enterTransition = enterDirection ? enterDirection : 'left';
     // Resuming view transition if view was previously created
     if (this.isCached) {
          this.nativePageTransitions.slide({ 
              direction: resumeTransition, 
              duration: 500,
              iosdelay: 100, 
              androiddelay: 150, 
              slowdownfactor: 3
          });
      }
      // Entering View transition if is created for first time
      else {
          this.nativePageTransitions.slide({ 
              direction: enterTransition, 
              iosdelay: 60, 
              androiddelay: 70, 
              slowdownfactor: 1
          });
          this.isCached = true;
      }   
  }
  animateTransitionUpDown(enterDirection?: string, resumeDirection?: string) {
    let resumeTransition = resumeDirection ? resumeDirection : 'down';
    let enterTransition = enterDirection ? enterDirection : 'up';
    // Resuming view transition if view was previously created
    if (this.isCached) {
         this.nativePageTransitions.slide({ 
             direction: resumeTransition, 
             duration: 500,
             iosdelay: 100, 
             androiddelay: 150, 
             slowdownfactor: 3
         });
     }
     // Entering View transition if is created for first time
     else {
         this.nativePageTransitions.slide({ 
             direction: enterTransition, 
             iosdelay: 60, 
             androiddelay: 70, 
             slowdownfactor: 1
         });
         this.isCached = true;
     }   
 }
}
