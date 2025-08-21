import { Routes } from '@angular/router';
import { Homee } from './homee/homee';
import { Contact } from './contact/contact';
import { User } from './user/user';
import { PageNotfound } from './page-notfound/page-notfound';
import { Profile } from './profile/profile';
import { Parent } from './parent/parent';
import { Testapi } from './testapi/testapi';
import { Jsonapi } from './jsonapi/jsonapi';
import { Post } from './post/post';
import { Admin } from './admin/admin';

// loadComponent: () => import('admin').then(m => m.ProductsComponent


export const routes: Routes = [
  {path:'', component:Homee},
  // {path:'user/:id/:name', component:User},
  {path:'user', component:User},
  {path:'contact',component:Contact},
  {path:'profile', component:Profile, data:{name:'surya'}},
  {path:'parent', component:Parent},
  {path:'testapi', component:Testapi},
  {path:'jsonapi', component:Jsonapi},
  {path:'post', component:Post},
  {path:'admin', loadComponent:()=>import('./admin/admin').then((c)=>c.Admin)},
  {path:'**', component:PageNotfound},

];
