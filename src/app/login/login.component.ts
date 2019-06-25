import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAutheticationService } from '../services/hardcoded-authetication.service';
import { BasicAuthService } from '../services/basic-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username="chamith"
  password=""
  errorMessage="Invalid Credentials"
  invalidLogin =false;

  constructor(private router:Router,
    private harAuthenService:HardcodedAutheticationService,
    private basicAuthService:BasicAuthService) { }

  ngOnInit() {
  }

  handleLogin(){
    console.log(this.username);
    if(this.harAuthenService.authenticate(this.username,this.password)){

      this.router.navigate(['welcome',this.username])
      this.invalidLogin =false;
    }else{
      this.invalidLogin=true;
    }
  }

  handleBasicLogin(){
    console.log(this.username);
    this.basicAuthService.executeBasicAuthService(this.username,this.password)
          .subscribe(
            data =>{
              console.log(data);
              this.router.navigate(['welcome',this.username])
              this.invalidLogin =false;
            },
            error=>{
              console.log(error)
              this.invalidLogin=true;
            }
          )

  }

  
  handleJwtLogin(){
    console.log(this.username);
    this.basicAuthService.executeJwtAuthService(this.username,this.password)
          .subscribe(
            data =>{
              console.log(data);
              this.router.navigate(['welcome',this.username])
              this.invalidLogin =false;
            },
            error=>{
              console.log(error)
              this.invalidLogin=true;
            }
          )

  }
}
