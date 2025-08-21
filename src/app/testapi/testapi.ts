import { Component } from '@angular/core';
import { Services } from '../services/services';

@Component({
  selector: 'app-testapi',
  imports: [],
  templateUrl: './testapi.html',
  styleUrl: './testapi.css'
})
export class Testapi {
  constructor(private serevice:Services){}
outputproductsdata:any;

 ngOnInit(){
  this.serevice.getthedatafromurl().subscribe((data:any)=>{
    console.log(data);
    this.outputproductsdata=data.users
})
  }
}
