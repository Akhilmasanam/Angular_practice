import { Component } from '@angular/core';
import { Child } from "../child/child";

@Component({
  selector: 'app-parent',
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css'
})
export class Parent {

users:undefined|string[];

handelusers(users:string[]){
  console.log(users)
  this.users=users

}

}
