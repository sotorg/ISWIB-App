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
    { name: 'Calendar', image: 'raspored.jpg', link: '/raspored' },
    { name: 'Mape', image: 'mapa.jpg', link: '/mapa' },
    { name: 'Hrana', image: 'hrana.jpg', link: '/hrana' },
    { name: 'Hitno', image: 'hitno.jpg', link: '/hitno' },
    { name: 'Event', image: 'event.jpg', link: '/event' },
    { name: 'Igrica', image: 'igrica.jpg', link: '/igrica' },
    { name: 'Radionice', image: 'radionice.jpg', link: '/radionice' },
    { name: 'Lost and Found', image: 'lost-and-found.jpg', link: '/lost-and-found' },
    { name: 'FAQ', image: 'faq.jpg', link: '/faq' }
  ];
}
