import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';
import { WeeklyMenuComponent } from './weekly-menu/weekly-menu.component';
import { WorkshopsComponent } from './workshops/workshops.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BottomNavComponent, WeeklyMenuComponent, WorkshopsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'iswib-app';
}
