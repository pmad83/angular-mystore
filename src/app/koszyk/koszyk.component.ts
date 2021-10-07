import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { KoszykService } from '../koszyk.service';
import { CennikDostawComponent } from '../cennik-dostaw/cennik-dostaw.component';

@Component({
  selector: 'app-koszyk',
  templateUrl: './koszyk.component.html',
  styleUrls: ['./koszyk.component.css'],
})
export class KoszykComponent {
  items = this.koszyk.dajKoszyk();
  total = this.items.reduce((total, current) => total + current.price, 0);
  valueWithDelivery = this.total + this.koszyk.dajKosztDostawy();

  constructor(public dialog: MatDialog, public koszyk: KoszykService) {}

  wybierzDostawce(): void {
    const dialogRef = this.dialog.open(CennikDostawComponent, {
      width: '460px',
      height: '360px',
      data: {id: this.koszyk.dostawca.id, type: this.koszyk.dostawca.type, price: this.koszyk.dostawca.price},
    });

    dialogRef.afterClosed().subscribe((dostawca) => {
      console.log('Okno wyboru formy dostawy zostało zamknięte');
      if (dostawca != null) {
        this.koszyk.ustawDostawce(dostawca);
        this.valueWithDelivery = this.total + this.koszyk.dajKosztDostawy();
      }
    });
  }
}
