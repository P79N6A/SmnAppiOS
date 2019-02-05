import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { MyApp } from './app.component';
import { UsersProvider } from '../providers/users/users';
import { IonicStorageModule } from '@ionic/storage';
import { InterceptorProvider } from '../providers/interceptor/interceptor';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,HttpClientModule,
    IonicModule.forRoot(MyApp),//,{animate: false}
    HttpClientModule,
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,NativePageTransitions,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersProvider,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorProvider, multi: true },
  ]
})
export class AppModule {}
