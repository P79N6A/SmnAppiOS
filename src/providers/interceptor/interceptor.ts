import { AlertController } from 'ionic-angular';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { _throw } from 'rxjs/observable/throw';
import { catchError} from 'rxjs/operators';
 
@Injectable()
export class InterceptorProvider implements HttpInterceptor {
 
    constructor(private storage: Storage, private alertCtrl: AlertController) { }
 
    // Intercepts all HTTP requests!
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
 
        let promise = this.storage.get('my_token');
 
        return Observable.fromPromise(promise)
            .mergeMap(token => {
                let clonedReq = this.addToken(request, token);
                return next.handle(clonedReq).pipe(
                    catchError(error => {
                        // Perhaps display an error for specific status codes here already?
                        let msg = error.message;
 
                        let alert = this.alertCtrl.create({
                            title: error.name,
                            message: msg,
                            buttons: ['OK']
                        });
                        alert.present();
 
                        // Pass the error to the caller of the function
                        return _throw(error);
                    })
                );
            });
    }
 
    // Adds the token to your headers if it exists
    private addToken(request: HttpRequest<any>, token: any) {
        if (1) {
            let clone: HttpRequest<any>;
            clone = request.clone({
                setHeaders: {
                    Accept: `application/json`,
                    'Content-Type': `application/json`,
                    'Api-Key': `8bc8a9b0-6842-4b3f-9e0e-fae6a6b8313d`,
                    'User-Name': `smn_web_services`,
                    Authorization: `Ionic ${token}`
                }
            });
            return clone;
        }
 
        return request;
    }
}