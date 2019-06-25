import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { API_URL } from '../app.constants';

export const TOKEN='token'
export const AUTHENTICATED_USER ='authenticatedUser'


@Injectable({
  providedIn: 'root'
})
export class BasicAuthService {

  constructor(private http:HttpClient) { }
  authenticate(username, password) {
    if (username === "chamith" && password === '123') {
      sessionStorage.setItem('authenticatedUser', username);
      return true;
    }
    return false;
  }

  executeJwtAuthService(username, password){
 
    return this.http.post<any>(`${API_URL}/authenticate`,{username,password}).pipe(
      map(
        data=>{
          console.log("service");
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
          return data;
        }
      )
    )
  }


  executeBasicAuthService(username, password){
    let basicAuthHeaderString ="Basic "+window.btoa(username + ':' + password);


 

    let headers =new HttpHeaders({
      Authorization:basicAuthHeaderString
    })

    console.log(headers); 


    return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`,{headers}).pipe(
      map(
        data=>{
          console.log("service");
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, basicAuthHeaderString);
          return data;
        }
      )
    )
  }

  getAuthenticatedUser(){
  return sessionStorage.getItem(AUTHENTICATED_USER)
  }

  getAuthenticatedToken(){
        return sessionStorage.getItem(TOKEN)
   }

   isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }
  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }


}

export class AuthenticationBean{
  constructor(public message:string){

  }
}
