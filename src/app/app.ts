import { afterEveryRender, Component, signal, ViewChild, viewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Testuser } from "./testuser/testuser";
import { User } from './user/user';
import { Services } from './services/services';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Testuser],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {



@ViewChild('user') Testuser:any


constructor( service:Services ){
  afterEveryRender(()=>
  console.log('Afterrender', this.Testuser.inputcount))
}

protected readonly title = signal('routing_and_HTTP_Learn');

username='akhil'

selecteduser(user:string){
  this.username=user;
}

count=0;
increasecount(){
  this.count++;
}



}
