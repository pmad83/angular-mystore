import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { KoszykService } from '../koszyk.service';
import { CennikDostawComponent } from '../cennik-dostaw/cennik-dostaw.component';

@Component({
  selector: 'app-koszyk',
  templateUrl: './koszyk.component.html',
  styleUrls: ['./koszyk.component.css'],
})
export class KoszykComponent {

  id!: number;
  type!: string;
  deliveryCost!: number;

  items = this.koszyk.dajKoszyk();
  total = this.items.reduce((total, current) => total + current.price, 0);
  valueWithDelivery = this.total + this.deliveryCost;

  constructor(public dialog: MatDialog, private koszyk: KoszykService) {}

  wybierzDostawce(): void {
    const dialogRef = this.dialog.open(CennikDostawComponent, {
      width: '460px',
      height: '320px',
      data: {id: this.id, type: this.type, price: this.deliveryCost}
    });

    dialogRef.afterClosed().subscribe(dostawca => {
      this.id = dostawca.id;
      this.type = dostawca.type;
      this.deliveryCost = dostawca.price;
      this.valueWithDelivery = this.total + this.deliveryCost;

      console.log('Okno wyboru formy dostawy zostało zamknięte ' + dostawca.type);

    });
  }

}
