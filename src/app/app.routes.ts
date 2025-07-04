// app.routes.ts
import { Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MapComponent } from './components/map/map.component';
import { MorePageComponent } from './components/more-page/more-page.component';
import { FaqPageComponent } from './components/faq-page/faq-page.component';
import { SerbianWordsPageComponent } from './components/serbian-words/serbian-words-page.component';
import { FunFactsPageComponent } from './components/fun-facts-page/fun-facts-page.component';
import { CurrencyConverterPageComponent } from './components/currency-converter-page/currency-converter-page.component';
import { LostAndFoundPageComponent } from './components/lost-and-found/lost-and-found-page.component';
import { EmergencyContactsComponent } from './components/emergency-page/emergency-contacts.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { EventsComponent } from './components/events/events.component';
import { WorkshopsComponent } from './components/workshops/workshops.component';
import { WeeklyMenuComponent } from './components/weekly-menu/weekly-menu.component';
import { TictactoeComponent } from './components/game/tictactoe.component';

export const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'maps', component: MapComponent },
  { path: 'more', component: MorePageComponent },
  { path: 'faq', component: FaqPageComponent },
  { path: 'serbian-words', component: SerbianWordsPageComponent },
  { path: 'fun-facts', component: FunFactsPageComponent },
  { path: 'converter', component: CurrencyConverterPageComponent },
  { path: 'lost-and-found', component: LostAndFoundPageComponent },
  { path: 'emergency-contacts', component: EmergencyContactsComponent},
  { path: 'calendar', component: CalendarComponent},
  { path: 'events', component: EventsComponent},
  { path: 'workshops', component: WorkshopsComponent},
  { path: 'menu', component: WeeklyMenuComponent},
  { path: 'game', component: TictactoeComponent},
];
