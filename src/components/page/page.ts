import { Component } from '@angular/core';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
@Component({
  selector: 'page',
  templateUrl: 'page.html'
})
export class PageComponent {

  private isCached: boolean;
  private nativePageTransitions: NativePageTransitions;

  /**
  * Page Constructor
  * @param {NativePageTransitions} transitions
  */
  constructor(transitions: NativePageTransitions) {
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
              iosdelay: 60, 
              androiddelay: 70, 
              slowdownfactor: 1 
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
