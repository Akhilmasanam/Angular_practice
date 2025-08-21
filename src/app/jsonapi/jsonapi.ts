import { Component } from '@angular/core';
import { Services } from '../services/services';
import { users } from '../interfaces/interfaces';

@Component({
  selector: 'app-jsonapi',
  imports: [],
  templateUrl: './jsonapi.html',
  styleUrl: './jsonapi.css'
})
export class Jsonapi {

   outputdata:users[]=[];

  constructor( private services:Services){}

  // ngOnInit(){
  //   this.services.getjsondummydata().subscribe((data:users[])=>{console.log(data)
  //     this.outputdata=data
  //   })
  // }
}
