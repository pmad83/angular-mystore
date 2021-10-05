import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { KoszykService } from '../koszyk.service';

@Component({
  selector: 'app-szczegoly-produktu',
  templateUrl: './szczegoly-produktu.component.html',
  styleUrls: ['./szczegoly-produktu.component.css']
})
export class SzczegolyProduktuComponent implements OnInit {

  product: Product | undefined;

  constructor(private route: ActivatedRoute, private koszyk: KoszykService) {}

  ngOnInit() {
    //Pobierz id produktu z adresu
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    //Znajdź odpowiadający produkt wg id
    this.product = products.find(product => product.id === productIdFromRoute);
  }

  dodaj(product: Product) {
    this.koszyk.dodajDoKoszyka(product);
    window.alert(product.name + ' został dodany do Twojego koszyka');
  }
}
