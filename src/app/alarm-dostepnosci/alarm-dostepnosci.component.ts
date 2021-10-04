import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-alarm-dostepnosci',
  templateUrl: './alarm-dostepnosci.component.html',
  styleUrls: ['./alarm-dostepnosci.component.css']
})
export class AlarmDostepnosciComponent implements OnInit {

  @Input() product !: Product;

  constructor() { }

  ngOnInit() {
  }

}