import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userdata, users } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class Services {

  constructor(private http: HttpClient) {
    console.log('services is called')
  }

  testproductservice() {
    return [{ name: 'phone', company: 'samsung', price: 2000 },
    { name: 'laptop', company: 'lenovo', price: 20000 },
    { name: 'specticals', company: 'lenscart', price: 4000 },
    ]
  }
  url = "http://localhost:3000/usersdata"

  getthedatafromurl() {
    const url = 'https://dummyjson.com/products';
    return this.http.get(url)
  }

  getjsondummydata(): Observable<userdata[]> {
    return this.http.get<userdata[]>(this.url)
  }


  postuserdata(user: userdata): Observable<userdata> {
    return this.http.post<userdata>(this.url, user)
  }

  deleateuser(id:string):Observable<userdata>{
  return this.http.delete<userdata>(this.url +'/'+id)
  }

 getupdateuser(id:string){
  return this.http.get<userdata>( this.url+'/'+id)
 }


 updateuser(user:userdata):Observable<userdata>{
  return this.http.put<userdata>(this.url+"/"+ user.id ,user)
 }

}


