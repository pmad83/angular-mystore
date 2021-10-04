import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-alarm-dostepnosci',
  templateUrl: './alarm-dostepnosci.component.html',
  styleUrls: ['./alarm-dostepnosci.component.css']
})
export class AlarmDostepnosciComponent implements OnInit {

  @Input() product !: Product;
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
