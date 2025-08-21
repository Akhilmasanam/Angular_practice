import { Component } from '@angular/core';

import { Profile } from '../profile/profile';
import { CurrencyPipe } from '@angular/common';
import { CurrencyexchangePipe } from '../pipe/currencyexchange-pipe';

@Component({
  selector: 'app-contact',
  imports: [Profile,CurrencyexchangePipe],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  users=['akhil', 'nikhil','sunil','shareef']


currency=10;

}
