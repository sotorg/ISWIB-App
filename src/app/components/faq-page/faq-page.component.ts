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

  toggleFaq(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }
}
