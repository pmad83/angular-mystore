import { Component, OnInit } from '@angular/core';
import { KoszykService } from '../koszyk.service';

@Component({
  selector: 'app-koszyk',
  templateUrl: './koszyk.component.html',
  styleUrls: ['./koszyk.component.css']
})
export class KoszykComponent {

  items = this.koszyk.dajKoszyk();

  constructor(private koszyk: KoszykService) { }

}
