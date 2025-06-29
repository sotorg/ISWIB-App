<<<<<<< HEAD
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
=======
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
>>>>>>> 94663fc (Initial commit)

@Component({
  selector: 'app-currency-converter-page',
  standalone: true,
<<<<<<< HEAD
  imports: [CommonModule, FormsModule],
  templateUrl: './currency-converter-page.component.html',
  styleUrls: ['./currency-converter-page.component.scss']
})
export class CurrencyConverterPageComponent {
=======
  imports: [CommonModule, FormsModule, NgSelectModule],
  templateUrl: './currency-converter-page.component.html',
  styleUrls: ['./currency-converter-page.component.scss']
})
export class CurrencyConverterPageComponent implements OnInit {
>>>>>>> 94663fc (Initial commit)
  amount: number = 0;
  selectedCurrency: string = 'EUR';
  result: number | null = null;

  constructor(private router: Router) {}

  exchangeRates: { [key: string]: number } = {
    EUR: 117.2,
    USD: 108.5,
    GBP: 136.3,
    CHF: 120.1,
    AUD: 71.4,
    CAD: 79.2,
    SEK: 10.3,
    NOK: 10.1,
    DKK: 15.7,
    JPY: 0.72,
<<<<<<< HEAD
  };

  convertToRSD() {
=======
    ALL: 1.15,
    AMD: 0.28,
    AZN: 64.5,
    BGN: 59.9,
    BRL: 21.4,
    BYN: 33.2,
    CDF: 0.043,
    CNY: 15.2,
    CRC: 0.17,
    CZK: 4.9,
    DZD: 0.8,
    EGP: 2.2,
    IDR: 0.007,
    INR: 1.3,
    IRR: 0.0025,
    KRW: 0.081,
    MAD: 11.5,
    MDL: 6.6,
    MKD: 1.9,
    MXN: 6.2,
    PKR: 0.39,
    PLN: 27.3,
    RON: 23.7,
    RUB: 1.2,
    SLL: 0.005,
    TND: 35.6,
    TRY: 3.4,
    XAF: 0.19
  };

  currencyNames: { [key: string]: string } = {
    EUR: 'Euro',
    USD: 'US Dollar',
    GBP: 'British Pound',
    CHF: 'Swiss Franc',
    AUD: 'Australian Dollar',
    CAD: 'Canadian Dollar',
    SEK: 'Swedish Krona',
    NOK: 'Norwegian Krone',
    DKK: 'Danish Krone',
    JPY: 'Japanese Yen',
    ALL: 'Albanian Lek',
    AMD: 'Armenian Dram',
    AZN: 'Azerbaijani Manat',
    BGN: 'Bulgarian Lev',
    BRL: 'Brazilian Real',
    BYN: 'Belarusian Ruble',
    CDF: 'Congolese Franc',
    CNY: 'Chinese Yuan',
    CRC: 'Costa Rican Colón',
    CZK: 'Czech Koruna',
    DZD: 'Algerian Dinar',
    EGP: 'Egyptian Pound',
    IDR: 'Indonesian Rupiah',
    INR: 'Indian Rupee',
    IRR: 'Iranian Rial',
    KRW: 'South Korean Won',
    MAD: 'Moroccan Dirham',
    MDL: 'Moldovan Leu',
    MKD: 'Macedonian Denar',
    MXN: 'Mexican Peso',
    PKR: 'Pakistani Rupee',
    PLN: 'Polish Zloty',
    RON: 'Romanian Leu',
    RUB: 'Russian Ruble',
    SLL: 'Sierra Leonean Leone',
    TND: 'Tunisian Dinar',
    TRY: 'Turkish Lira',
    XAF: 'Central African CFA Franc'
  };

  currencyOptions: { code: string, label: string }[] = [];

  ngOnInit(): void {
    this.currencyOptions = Object.keys(this.exchangeRates).map(code => ({
      code,
      label: `${code} - ${this.currencyNames[code] || 'Unknown'}`
    }));
  }

  convertToRSD(): void {
>>>>>>> 94663fc (Initial commit)
    const rate = this.exchangeRates[this.selectedCurrency];
    this.result = this.amount * rate;
  }

<<<<<<< HEAD
  goBack() {
=======
  goBack(): void {
>>>>>>> 94663fc (Initial commit)
    this.router.navigate(['/more']);
  }
}
