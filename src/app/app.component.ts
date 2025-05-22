// app.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CalendarComponent } from './components/calendar/calendar.component';
import { EventsComponent } from './components/events/events.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CalendarComponent, EventsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Moja aplikacija';
}
