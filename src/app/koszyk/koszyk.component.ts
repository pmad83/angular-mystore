import { Component } from '@angular/core';
import { KoszykService } from '../koszyk.service';

@Component({
  selector: 'app-koszyk',
  templateUrl: './koszyk.component.html',
  styleUrls: ['./koszyk.component.css']
})
export class KoszykComponent {

  items = this.koszyk.dajKoszyk();
  total = this.items.reduce((total, current) => total + current.price, 0);
  
  constructor(private koszyk: KoszykService) { }

}
