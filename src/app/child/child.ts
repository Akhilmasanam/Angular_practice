import { Component, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css'
})
export class Child {
@Output() getusers= new EventEmitter()

  users=['akhil','nikhil','anil','siddu']

  // ngOnInit(){
  //   this.getusers.emit(this.users);
  // }

  emitusers(){
    this.getusers.emit(this.users)
  }

}
