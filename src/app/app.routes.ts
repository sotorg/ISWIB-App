import { Routes } from '@angular/router';
import { CalendarComponent } from './components/calendar/calendar.component';
import { EventsComponent } from './components/events/events.component';

export const routes: Routes = [
  { path: '', component: CalendarComponent },
  { path: 'events', component: EventsComponent },
  {
    path: 'events/:dayIndex',
    loadComponent: () => import('./components/events/events.component').then(m => m.EventsComponent)
  }
];
