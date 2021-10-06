import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { KoszykService } from '../koszyk.service';
import { CennikDostawComponent } from '../cennik-dostaw/cennik-dostaw.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-koszyk',
  templateUrl: './koszyk.component.html',
  //styleUrls: ['./koszyk.component.css'],
})
export class KoszykComponent {

  animal!: string;
  name!: string;

  items = this.koszyk.dajKoszyk();
  total = this.items.reduce((total, current) => total + current.price, 0);
  deliveryCost = 0;
  valueWithDelivery = this.total + this.deliveryCost;

  constructor(
              public dialog: MatDialog,
              private koszyk: KoszykService
              ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(CennikDostawComponent, {
      width: '350px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
