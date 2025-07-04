// main-page-component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, RouterModule], // Dodaj ove module ovde
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  circles = [
    { name: 'Calendar', image: 'raspored.jpg', link: '/calendar' },
    { name: 'Mape', image: 'mapa.jpg', link: '/maps' },
    { name: 'Hrana', image: 'hrana.jpg', link: '/hrana' },
    { name: 'Hitno', image: 'hitno.jpg', link: '/hitno' },
    { name: 'Event', image: 'event.jpg', link: '/events' },
    { name: 'Igrica', image: 'igrica.jpg', link: '/game' },
    { name: 'Radionice', image: 'radionice.png', link: '/radionice' },
    { name: 'Lost and Found', image: 'lost-and-found.jpg', link: '/lost-and-found' },
    { name: 'More', image: 'morepage.jpg', link: '/more' }
  ];
}
