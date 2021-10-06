import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  pobierzOplaty() {
    return this.http.get<{id: number, type: string, price: number}[]>('/assets/cennik-dostaw.json');
  }

  constructor(private http: HttpClient) { }

}
