import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean{
  constructor(public message:string){

  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient
  ) { }

  executeHelloWorldBeanService(){
    console.log("service");
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean')
  }

  executeHelloWorldBeanServiceWithpath(name){
    // let basicAuthHeaderString=this.createBasicAuthHeader();
    // let headers =new HttpHeaders({
    //   Authorization:basicAuthHeaderString
    // })
    console.log("service");
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`,
    // {headers}
    )
  }

  // createBasicAuthHeader(){
  //   let username ="chamith"
  //   let password ="dummy"
  //   let basicAuthHeaderString ="Basic "+window.btoa(username +":"+ password);
  //   return basicAuthHeaderString;
  // }
}
