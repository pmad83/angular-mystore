import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Produkt } from './products';

export class Dostawca {
  id!: number;
  type!: string;
  price!: number;
}

@Injectable({
  providedIn: 'root'
})
export class KoszykService {

  items: Produkt[] = [];
  dostawca: Dostawca = new Dostawca();

  dodajDoKoszyka(product: Produkt) {
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
    return this.http.get<Dostawca[]>('/assets/cennik-dostaw.json');
  }

  ustawDostawce(dostawca: Dostawca) {
    this.dostawca = dostawca;
  }

  dajKosztDostawy() {
    return this.dostawca.price != null ? this.dostawca.price : 0;
  }

  constructor(private http: HttpClient) { }

}
