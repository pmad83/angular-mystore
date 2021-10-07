import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { KoszykService, Dostawca } from '../koszyk.service';

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
