import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAutheticationService {

  constructor() { }

  authenticate(username,password){
    if(username ==="chamith" && password ==='123'){
      sessionStorage.setItem('authenticatedUser',username)
      return true;
    }
      return false;
  }

  isUserLoggedIn(){
    let user=sessionStorage.getItem('authenticatedUser')
    return !(user=== null)
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser')
  }
}
