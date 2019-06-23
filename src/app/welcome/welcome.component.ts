import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../services/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  meassage="Some Welcome message"
  name=""
  welcomeMessageFromService:string;

  constructor(private route:ActivatedRoute,private service:WelcomeDataService) { }

  ngOnInit() {

   this.name=this.route.snapshot.params['name']
  }

  getWelcomeMessage(){
     console.log(this.service.executeHelloWorldBeanService());
     this.service.executeHelloWorldBeanService().subscribe(
       response =>{
         this.handleSuccessResponse(response)    
       },
       error=>{
         this.handleErrorResponse(error);
         
       }
       
     );
  }

  getWelcomeMessageWithParameters(){
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanServiceWithpath(this.name).subscribe(
      response =>{
        this.handleSuccessResponse(response)    
      },
      error=>{
        this.handleErrorResponse(error);
        
      }
      
    );
 }


  handleSuccessResponse(response){
   this.welcomeMessageFromService=response.message
  }

  handleErrorResponse(error){
    this.welcomeMessageFromService=error.error.message;
  }

}
