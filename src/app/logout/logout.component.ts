import { Component, OnInit } from '@angular/core';
import { HardcodedAutheticationService } from '../services/hardcoded-authetication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private hardAuthService:HardcodedAutheticationService) { }

  ngOnInit() {
    this.hardAuthService.logout()
  }

}
