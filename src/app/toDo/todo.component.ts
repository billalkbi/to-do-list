import { parseSelectorToR3Selector } from "@angular/compiler/src/core";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { TodoService } from "../services/todo.service";


@Component({
selector: 'my-todo',
templateUrl:'./todo.component.html',
styleUrls:['./todo.component.css']
})

export class TodoComponent implements OnInit, OnDestroy{
toDay: any;
todos: any;
todosSub: Subscription = new Subscription;
  constructor(private todoService: TodoService,
                   private router: Router){

  }
  ngOnDestroy(): void {
    this.todosSub.unsubscribe;
  }

  ngOnInit(){
    this.toDay=this.todoService.toDay;
   this.todosSub= this.todoService.todosSubject.subscribe(
     (value:any[])=>{
       this.todos=value;},
     (error)=>{
       console.log("erreur:"+error)},
     ()=>{
       console.log("observable completée");
     }

   );

   this.todoService.emitTodos();

  }
  onChangeStatus(i:number){
    this.todoService.onChangeStatus(i);
  }

  onChangeIsModif(i:number){
    this.todoService.onChangeIsModif(i);
  }
  onView(id: number){
    this.router.navigate(["single-todo",id ])
  }





}


