import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-currency-converter-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './currency-converter-page.component.html',
  styleUrls: ['./currency-converter-page.component.scss']
})
export class CurrencyConverterPageComponent {
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
  };

  convertToRSD() {
    const rate = this.exchangeRates[this.selectedCurrency];
    this.result = this.amount * rate;
  }

  goBack() {
    this.router.navigate(['/more']);
  }
}
