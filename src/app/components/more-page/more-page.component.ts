import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-more-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './more-page.component.html',
  styleUrls: ['./more-page.component.scss']
})
export class MorePageComponent {
  moreCircles = [
    { name: 'F&Q', image: 'morepage.png', link: '/faq' },
    { name: 'Serbian words', image: 'serbianwords1.png', link: '/serbian-words' },
    { name: 'Fun facts', image: 'funfacts.png', link: '/fun-facts' },
    { name: 'Converter', image: 'converter.png', link: '/converter' },
  ];
}
