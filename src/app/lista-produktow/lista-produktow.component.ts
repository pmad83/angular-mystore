import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-lista-produktow',
  templateUrl: './lista-produktow.component.html',
  styleUrls: ['./lista-produktow.component.css']
})
export class ListaProduktowComponent {
  products = products;

  udostepnij() {
    window.alert('Produkt został udostępniony!');
  }

  powiadomienie() {
    window.alert('Zostaniesz powiadomiony, kiedy produkt będzie dostępny');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
