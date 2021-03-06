import { Component, OnInit } from '@angular/core';
import { HardcodedAutheticationService } from '../services/hardcoded-authetication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isUserLoggedIn:boolean=false;

  constructor(private hardAuthService:HardcodedAutheticationService) { }

  ngOnInit() {
    this.isUserLoggedIn= this.hardAuthService.isUserLoggedIn(); 
  }

}
