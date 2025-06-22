import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bottom-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.scss']
})

export class BottomNavComponent {
  // Definišite 12 emojija sa pripadajućim rutama
  navItems = [
  { icon: 'assets/images/home.png', route: '' },                        // MainPageComponent
  { icon: 'assets/images/raspored.png', route: '/calendar' },          // CalendarComponent
  { icon: 'assets/images/mapa.png', route: '/maps' },                    // MapComponent
  { icon: 'assets/images/hrana.png', route: '/menu' },                  // WeeklyMenuComponent
  { icon: 'assets/images/hitno.png', route: '/emergency-contacts' },// EmergencyContactsComponent
  { icon: 'assets/images/events.png', route: '/events' },              // EventsComponent
  { icon: 'assets/images/igrica.png', route: '/game' },
  { icon: 'assets/images/radionice.png', route: '/workshops' },         // WorkshopsComponent
  { icon: 'assets/images/lost-and-found.png', route: '/lost-and-found' },        // LostAndFoundPageComponent                 
  { icon: 'assets/images/morepage.png', route: '/faq' },                     // FaqPageComponent        
  { icon: 'assets/images/serbianwords1.png', route: '/serbian-words' },// SerbianWordsPageComponent
  { icon: 'assets/images/funfacts.png', route: '/fun-facts' },              // FunFactsPageComponent
  { icon: 'assets/images/converter.png', route: '/converter' },         // CurrencyConverterPageComponent
];


  constructor(private router: Router) { }

  navigate(route: string) {
    this.router.navigate([route]);
  }
}