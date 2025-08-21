import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Services } from '../services/services';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {

  username=""

  constructor( private route:ActivatedRoute,private services:Services){}


  testproductserrvices:{
    name: string;
    company: string;
    price: number;
}[]| undefined


  getproductsdata(){
     this.testproductserrvices=this.services.testproductservice()
  }

  ngOnInit(){
   this.route.params.subscribe((params)=>{
    console.log(params);
     this.username=params['name'];
    });

  }

  currency=10;






}
