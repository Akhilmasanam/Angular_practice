import { Component, Input, input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {

  @Input() user:string=""

  nameget:any;

  constructor(private route:ActivatedRoute){}

ngOnInit(){
 this.nameget=this.route.snapshot.paramMap.get('name');

 this.route.queryParams.subscribe(params=>{
  this.nameget=params['name']

  })

//   this.route.data.subscribe(data=>{
//     this.nameget=data['name']
//  })



}

}
