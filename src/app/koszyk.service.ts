import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class KoszykService {

  items: Product[] = [];

  dodajDoKoszyka(product: Product) {
    this.items.push(product);
  }

  dajKoszyk() {
    return this.items;
  }

  usunKoszyk() {
    this.items = [];
    return this.items;
  }

  constructor() { }

}
