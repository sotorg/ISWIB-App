import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.scss']
})
export class FaqPageComponent {
  faqs = [
<<<<<<< HEAD
    {
      question: 'What is ISWiB?',
      answer: 'ISWiB is the International Student Week in Belgrade.',
      open: false
    },
    {
      question: 'Who can apply?',
      answer: 'Students from all over the world aged 18–30.',
      open: false
    },
    {
      question: 'How much does it cost?',
      answer: '...',
      open: false
    }
  ];
=======
  {
    question: 'What should I do if I lose my passport?',
    answer: 'Immediately contact the nearest police station and your country’s embassy in Belgrade.',
    open: false
  },
  {
    question: 'Is tap water in Serbia safe to drink?',
    answer: 'Yes, tap water is safe to drink in most parts of Belgrade.',
    open: false
  },
  {
    question: 'What currency is used in Serbia?',
    answer: 'The official currency is the Serbian Dinar (RSD). You can exchange euros or dollars at exchange offices.',
    open: false
  },
  {
    question: 'Can I pay by card in shops and restaurants?',
    answer: 'Yes, most places accept Mastercard and Visa. However, it’s good to have some cash for small businesses.',
    open: false
  },
  {
    question: 'How do I use public transportation in Belgrade?',
    answer: 'Public transportation is free for all: buses, trams, and trolleybuses. E lines (E2, E3...) are express lines, and are not free. Ticket is 200 dinars, and you can buy it at the driver.',
    open: false
  },
  {
    question: 'Where can I buy a SIM card?',
    answer: 'SIM cards are available at mobile carrier stores (mts, Yettel, A1) and kiosks around the city.',
    open: false
  },
  {
    question: 'Do I need a power adapter in Serbia?',
    answer: 'Serbia uses type F power sockets (like most of Europe), with 230V voltage.',
    open: false
  },
  {
    question: 'What is Serbia’s country calling code?',
    answer: 'The international calling code for Serbia is +381.',
    open: false
  },
  {
    question: 'Is Uber available in Serbia?',
    answer: 'No, Uber is not available. Locals use CarGo or Yandex.Taxi instead.',
    open: false
  },
  {
    question: 'What should I do in an emergency?',
    answer: 'Call 192 for police, 193 for fire department, and 194 for ambulance services.',
    open: false
  }
];

>>>>>>> 94663fc (Initial commit)

  toggleFaq(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }
}
