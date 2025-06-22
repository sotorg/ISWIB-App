import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fun-facts-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fun-facts-page.component.html',
  styleUrls: ['./fun-facts-page.component.scss']
})
export class FunFactsPageComponent {
  facts = [
    { title: 'Nikola Tesla', detail: 'Nikola Tesla was born in modern-day Croatia but was ethnically Serbian.' },
    { title: 'Ćirilica', detail: 'Serbia is one of the few countries that officially use the Cyrillic script.' },
    { title: 'Kafana Culture', detail: 'Belgrade is known for having some of the oldest kafane (taverns) in Europe.' },
    { title: 'Two Alphabets', detail: 'Serbians are fluent in both Cyrillic and Latin scripts — and switch between them daily.' },
    { title: 'Rakija', detail: 'Rakija is a national drink and often homemade. It can be stronger than whiskey!' },
    { title: 'Longest Word', detail: 'The longest Serbian word: "najnesamouverljiviji" (the least self-confident one).' },
    { title: 'First Vampire', detail: 'The word "vampire" comes from the Serbian "vampir".' },
    { title: 'Public Kissing', detail: 'It is common to greet friends with three cheek kisses in Serbia.' },
    { title: 'No Tip? No Problem', detail: 'Tipping is appreciated, but not expected in most Serbian places.' },
    { title: 'Slava', detail: 'Each family in Serbia celebrates its own patron saint day, called "Slava".' }
  ];
}
