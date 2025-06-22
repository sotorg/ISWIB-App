import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-serbian-words-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './serbian-words-page.component.html',
  styleUrls: ['./serbian-words-page.component.scss']
})
export class SerbianWordsPageComponent {
  words = [
    { word: 'Čeljad', meaning: 'Household members, family' },
    { word: 'Bećar', meaning: 'Bachelor, unmarried man' },
    { word: 'Prćija', meaning: 'Dowry or inherited small property' },
    { word: 'Jaram', meaning: 'Yoke (wooden harness for oxen)' },
    { word: 'Zalogaj', meaning: 'Bite, mouthful of food' },
    { word: 'Tajfunčina', meaning: 'Very strong storm or chaos (colloquial exaggeration)' },
    { word: 'Mehana', meaning: 'Old-fashioned inn or tavern' },
    { word: 'Vajati', meaning: 'To moan or complain poetically' },
    { word: 'Avlija', meaning: 'Yard or courtyard' },
    { word: 'Čokot', meaning: 'Old grapevine trunk' }
  ];
}
