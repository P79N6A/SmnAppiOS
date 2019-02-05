import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'

const API1:string="http://www.sugarmenow.net/mbrowsesugarbaby";
const userLogin:string="http://www.sugarmenow.net/apiservices/mobile_login";
const API_SBD:string="http://www.sugarmenow.net/msingle_sugar_baby";

@Injectable()
export class UsersProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UsersProvider Provider');
  }
  getSugarBabies(){
  return this.http.get<any[]>(API1);
  //return this.http.get(API).do(res=>console.log(res));
  }
  getSugarBabiesDetails(postData){
    
    return this.http.post<any[]>(API_SBD, postData);
  }
  userLogin(loginData){
    return this.http.post<any[]>(userLogin, loginData);
  }
  resetPassword(resetPasswordData){
    return this.http.post<any[]>('http://www.sugarmenow.net/mreset_password',resetPasswordData);
  }
  contactUs(contactData){
    return this.http.post<any[]>('http://www.sugarmenow.net/mcontact_us',contactData);
  }
  joinUs(joinData){
    return this.http.post<any[]>('http://www.sugarmenow.net/mregister',joinData);
  }
}
