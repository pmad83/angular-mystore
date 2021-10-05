import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { KoszykService } from '../koszyk.service';

@Component({
  selector: 'app-zloz-zamowienie',
  templateUrl: './zloz-zamowienie.component.html',
  styleUrls: ['./zloz-zamowienie.component.css']
})
export class ZlozZamowienieComponent {

  items = this.koszyk.dajKoszyk();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
    phone: '',
    email: ''
  });

  constructor(private formBuilder: FormBuilder, private router: Router, private koszyk: KoszykService) { }

  potwierdzZamowienie(): void {
    console.warn('Zamowienie złożone', this.checkoutForm.value);
    this.checkoutForm.reset();
    window.alert('Twoje zamówienie na ' + this.items.length + ' produktów zostało złożone');
    this.items = this.koszyk.usunKoszyk();
    this.router.navigate(['./']);

  }

}
