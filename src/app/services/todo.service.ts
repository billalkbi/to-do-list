import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Todo } from "../models/todo.model";
import { AddTodoComponent } from "../toDo/add-todo/add-todo.component";

@Injectable()
export class TodoService{

  todos: Todo[] = [];
  todosSubject = new Subject<any[]>()

  toDay= new Date ();


 constructor(){



   setTimeout(()=>{
    this.todos  =[
      {
        toDoName:"projet 1",
        toDoStatus: true,
        image: "http://placeimg.com/300/300/tech",
        isModif : false,
        description: "lorem ipsum\
                      is simply dummy text\
                       of the printing and typesetting",
      },

      {
        toDoName:"projet 2",
        toDoStatus: false,
        image: "http://placeimg.com/300/300/tech",
        isModif : false,
        description: "lorem ipsum is simply dummy text\
                       of the printing and typesetting",
      },

      {
        toDoName:"projet 3",
        toDoStatus: true,
        image: "http://placeimg.com/300/300/tech",
        isModif : false,
        description: "lorem ipsum is simply dummy text\
                       of the printing and typesetting",
      },

    ];
    this.emitTodos();
   },3000);
 }

  emitTodos(){
    this.todosSubject.next(this.todos);
  }



  onChangeStatus(i: number){
    this.todos[i].toDoStatus=! this.todos[i].toDoStatus;
    this.emitTodos();
  }

  onChangeIsModif(i: number){
    this.todos[i].isModif= !this.todos[i].isModif;
    this.emitTodos();
  }

  getTodo(index: number){
    if(this.todos[index]){
      return this.todos[index];
    }
    return false;
  }

  AddTodo(todo: Todo): void{
    this.todos.unshift(todo);
    this.todosSubject.next(this.todos);
  }
}
