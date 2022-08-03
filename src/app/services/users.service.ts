import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../models/user.models';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users : User[]=[];
  userSub =new Subject<User[]> ();

  constructor() { }

  emitUsers():void{
    this.userSub.next(this.users);
  }

  addUser(user: User) : void{
    this.users.push(user);
    this.emitUsers();
  }
}
