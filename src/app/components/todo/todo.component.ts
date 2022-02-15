import { TodoResponseModel } from './../../modules/todoResponseModel';
import { Todo } from './../../modules/todo';
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos:Todo[]=[{userId:1,
    id:2,
    title:"eeee",
    completed:true}];
  apiUrl='https://jsonplaceholder.typicode.com/todos';
 
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void { //program ilk çalıştığında ilk önce burayı çalıştırır
  this.getPosts();
  }

getPosts(){
  this.httpClient.get<TodoResponseModel>(this.apiUrl).subscribe((response)=>{
    //console.log(this.todos)
    //this.todos=response.data
    
  });
  
   
}
  
  

}
