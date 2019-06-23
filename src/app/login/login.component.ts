import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAutheticationService } from '../services/hardcoded-authetication.service';

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
    private harAuthenService:HardcodedAutheticationService) { }

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
}
