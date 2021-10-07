import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Produkt, produkty } from '../products';
import { KoszykService } from '../koszyk.service';

@Component({
  selector: 'app-szczegoly-produktu',
  templateUrl: './szczegoly-produktu.component.html',
  styleUrls: ['./szczegoly-produktu.component.css']
})
export class SzczegolyProduktuComponent implements OnInit {

  produkt: Produkt | undefined;

  constructor(private route: ActivatedRoute, private koszyk: KoszykService) {}

  ngOnInit() {
    //Pobierz id produktu z adresu
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('idProduktu'));

    //Znajdź odpowiadający produkt wg id
    this.produkt = produkty.find(produkt => produkt.id === productIdFromRoute);
  }
  
  dodaj(produkt: Produkt) {
    this.koszyk.dodajDoKoszyka(produkt);
    window.alert(produkt.name + ' został dodany do Twojego koszyka');
  }

}
