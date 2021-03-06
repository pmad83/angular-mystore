import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ListaProduktowComponent } from './lista-produktow/lista-produktow.component';
import { AlarmDostepnosciComponent } from './alarm-dostepnosci/alarm-dostepnosci.component';
import { SzczegolyProduktuComponent } from './szczegoly-produktu/szczegoly-produktu.component';
import { KoszykComponent } from './koszyk/koszyk.component';
import { CennikDostawComponent } from './cennik-dostaw/cennik-dostaw.component';
import { ZlozZamowienieComponent } from './zloz-zamowienie/zloz-zamowienie.component';

import { DEFAULT_CURRENCY_CODE, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';
import localePlExtra from '@angular/common/locales/extra/pl';
import { HttpClientModule } from '@angular/common/http';
registerLocaleData(localePl, localePlExtra);

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: ListaProduktowComponent },
      { path: 'produkt/:idProduktu', component: SzczegolyProduktuComponent },
      { path: 'koszyk', component: KoszykComponent },
      { path: 'zloz', component: ZlozZamowienieComponent },
    ]),
  ],
  entryComponents: [CennikDostawComponent],
  declarations: [
    AppComponent,
    TopBarComponent,
    ListaProduktowComponent,
    AlarmDostepnosciComponent,
    SzczegolyProduktuComponent,
    KoszykComponent,
    CennikDostawComponent,
    ZlozZamowienieComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pl-PL',
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'PLN',
    },
  ],
})
export class AppModule {}
