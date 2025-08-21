import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { userdata } from '../interfaces/interfaces';
import { Services } from '../services/services';

@Component({
  selector: 'app-post',
  imports: [ FormsModule],
  templateUrl: './post.html',
  styleUrl: './post.css'
})
export class Post {

  usersdata:any
  selecteduser:userdata|undefined;

 constructor( private services:Services){}

ngOnInit() {
   this.loaduser()
}

loaduser(){
this.services.getjsondummydata().subscribe((data: userdata[]) => {
    this.usersdata = data;
  });
}


  submited(data:userdata){
    if(!this.selecteduser){
this.services.postuserdata(data).subscribe((data:userdata)=>{console.log(data)
  if(data){
  this.loaduser();
  }
  })

    }else{
      const userdata={...data,id:this.selecteduser.id}
     this.services.updateuser(userdata).subscribe((data:userdata)=>{
      if(data){
        this.loaduser()
         this.selecteduser = undefined;
      }
     })
    }

  }

  deleateuser(userid:string){
  this.services.deleateuser(userid).subscribe((data:userdata)=>{
    this.loaduser();
  })
  }

updateuser(userid:string){
  this.services.getupdateuser(userid).subscribe((data:userdata)=>{
    console.log(data)
    this.selecteduser=data
  })
}



}
