import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule  } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './toDo/todo.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoService } from './services/todo.service';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SingleTodoComponent } from './single-todo/single-todo.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoComponent } from './toDo/add-todo/add-todo.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { EditUserComponent } from './components/users/edit-user/edit-user.component';
export const ROOTES : Routes= [
  {path:'home', component: HomeComponent},
  {path:'todos', component: TodoComponent},
  {path:'not-found', component: NotFoundComponent},
  {path:'contact', component: ContactComponent},
  {path:'add-todo', component: AddTodoComponent},
  {path:'users', component: UsersComponent},
  {path:'single-todo/:id', component: SingleTodoComponent},
  {path:'add-user', component: AddUserComponent},
  {path:'', component: TodoComponent},
  {path:'**', pathMatch: 'full',redirectTo:'not-found' },

]


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    SingleTodoComponent,
    ContactComponent,
    AddTodoComponent,
    UsersComponent,
    AddUserComponent,
    EditUserComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROOTES),

  ],

  providers:[
    TodoService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
