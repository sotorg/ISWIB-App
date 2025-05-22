import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BottomNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'iswib-app';
}
