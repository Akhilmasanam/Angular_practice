import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';



@Component({
  selector: 'app-homee',
  imports: [RouterLink],
  templateUrl: './homee.html',
  styleUrl: './homee.css'
})
export class Homee {

  constructor(private route: Router) { }

  gotoprofile(name: string) {
    this.route.navigate(['profile'], { queryParams:{ name } })
  }

  users = [
    {
      id: 1,
      name: 'akhil',
      email: 'akhil@gmail.com'
    },
    {
      id: 2,
      name: 'nikhil',
      email: 'nikhil@gmail.com'
    },
    {
      id: 3,
      name: 'sunil',
      email: 'sunil@gmail.com'
    },
    {
      id: 4,
      name: 'mahesh',
      email: 'mahesh@gmail.com'
    }]


}
