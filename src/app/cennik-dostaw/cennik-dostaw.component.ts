import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { KoszykService } from '../koszyk.service';

export interface Dostawca {
  id: number;
  type: string;
  price: number;
}

@Component({
  selector: 'app-cennik-dostaw',
  templateUrl: './cennik-dostaw.component.html',
  styleUrls: ['./cennik-dostaw.component.css']
})
export class CennikDostawComponent {

  cennik = this.koszyk.pobierzOplaty();

  constructor(private koszyk: KoszykService,
              public dialogRef: MatDialogRef<CennikDostawComponent>,
              @Inject(MAT_DIALOG_DATA) public dostawca: Dostawca
    ) { }

  anuluj(): void {
    this.dialogRef.close();
  }

}
