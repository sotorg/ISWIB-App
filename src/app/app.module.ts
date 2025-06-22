import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

// Dodaj sve tvoje standalone komponente ovde ako ih koristiš u routama
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
import { BottomNavComponent } from './components/bottom-nav/bottom-nav.component';
import { TictactoeComponent } from './components/game/tictactoe.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'maps', component: MapComponent },
  { path: 'more', component: MorePageComponent },
  { path: 'faq', component: FaqPageComponent },
  { path: 'serbian-words', component: SerbianWordsPageComponent },
  { path: 'fun-facts', component: FunFactsPageComponent },
  { path: 'converter', component: CurrencyConverterPageComponent },
  { path: 'lost-and-found', component: LostAndFoundPageComponent },
  { path: 'emergency-contacts', component: EmergencyContactsComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'events', component: EventsComponent },
  { path: 'workshops', component: WorkshopsComponent },
  { path: 'menu', component: WeeklyMenuComponent },
  { path: 'game', component: TictactoeComponent }
];

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppComponent,
    MainPageComponent,
    MapComponent,
    MorePageComponent,
    FaqPageComponent,
    SerbianWordsPageComponent,
    FunFactsPageComponent,
    CurrencyConverterPageComponent,
    LostAndFoundPageComponent,
    EmergencyContactsComponent,
    CalendarComponent,
    EventsComponent,
    WorkshopsComponent,
    WeeklyMenuComponent,
    TictactoeComponent,
    BottomNavComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
