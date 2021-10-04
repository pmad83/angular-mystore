import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ListaProduktowComponent } from './lista-produktow/lista-produktow.component';
import { AlarmDostepnosciComponent } from './alarm-dostepnosci/alarm-dostepnosci.component';
import { SzczegolyProduktuComponent } from './szczegoly-produktu/szczegoly-produktu.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ListaProduktowComponent },
      { path: 'products/:productId', component: SzczegolyProduktuComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ListaProduktowComponent,
    AlarmDostepnosciComponent,
    SzczegolyProduktuComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
