import { Component } from '@angular/core';

import { KoszykService } from '../koszyk.service';

@Component({
  selector: 'app-cennik-dostaw',
  templateUrl: './cennik-dostaw.component.html',
  styleUrls: ['./cennik-dostaw.component.css']
})
export class CennikDostawComponent {

  cennik = this.koszyk.pobierzOplaty();

  constructor(private koszyk: KoszykService) { }

}
