import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testuser',
  imports: [],
  templateUrl: './testuser.html',
  styleUrl: './testuser.css'
})
export class Testuser {
@Input() inputcount=0
  name="akhil"


// ngOnInit(){
//   console.log("ngoninit")
//   this.name="vikram"
// }

// constructor(){
//   console.log('console logged in first')
//   this.name="sunil"
// }

// ngOnDestroy(){
//   console.log("It is distroyed")
// }

// ngOnChanges(){
//   console.log('changed')
// }


}
