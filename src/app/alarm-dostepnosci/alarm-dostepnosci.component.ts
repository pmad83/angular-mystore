import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Produkt } from '../products';

@Component({
  selector: 'app-alarm-dostepnosci',
  templateUrl: './alarm-dostepnosci.component.html',
  styleUrls: ['./alarm-dostepnosci.component.css']
})
export class AlarmDostepnosciComponent implements OnInit {

  @Input() produkt !: Produkt;
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
