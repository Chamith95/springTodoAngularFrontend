import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../services/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo{
  constructor(
    public id:number,
    public description:string,
    public done:boolean,
    public targetDate:Date,
  ){

  }
}


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos:Todo[]

  message:string
  
  // [
  //   new Todo(1,"Learn To do",false,new Date()),
  //   new Todo(2,"Learn spring",true,new Date()),
  //   new Todo(3,"Learn Hibernate",false,new Date()),
    
    // {id: 1,description:"Learn to Dance"},
    // {id: 2,description:"Become an Expert at angular"},
    // {id: 3,description:"Visit india"}
  // ]

  // todo={
  //   id:1,
  //   description:"Learn angular"
  // }

  constructor(private service:TodoDataService,
    private router:Router) { }

  ngOnInit() {
    this.refreshTodos()
  }

  refreshTodos(){
    this.service.retreveAllTodos('chamith').subscribe(
      response =>{
        console.log(response)
        this.todos =response;
      }
    )
  }

  deleteTodo(id){
      this.service.deleteTodo('chamith',id).subscribe(
        response =>{
          console.log(response);
          this.message=`Delete of Todo ${id} Successful!`
          this.refreshTodos()
        }
      )
  }

  updateTodo(id){
    this.router.navigate(['todos',id])
  }

  addTodo(){
    this.router.navigate(['todos',-1])
  }

}
