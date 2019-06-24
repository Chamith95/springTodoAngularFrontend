import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { BasicAuthService } from '../basic-auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private basicAuthSevice:BasicAuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler){

      // let username ="chamith"
      // let password ="123"
      // let basicAuthHeaderString ="Basic "+window.btoa(username +":"+ password);

      let basicAuthHeaderString= this.basicAuthSevice.getAuthenticatedToken()
      let username =this.basicAuthSevice.getAuthenticatedUser()

 

      if(basicAuthHeaderString && username){
        request =request.clone({ 
          setHeaders:{
            Authorization:basicAuthHeaderString
          }
        })
      }
  
        return next.handle(request);
        
      


    
  }
}
