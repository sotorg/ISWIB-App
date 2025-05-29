// app.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MapComponent } from './components/map/map.component';
import { BottomNavComponent } from './components/bottom-nav/bottom-nav.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    MainPageComponent,
    MapComponent,
    BottomNavComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public router: Router) {}

  shouldShowBottomNav(): boolean {
    const includedRoutes = [
      '/calendar',
      '/events',
      '/workshops',
      '/menu',
      '/maps',
      '/faq',
      '/more',
      '/serbian-words',
      '/fun-facts',
      '/converter',
      '/lost-and-found',
      '/emergency-contacts',
      '/game'
    ];
    const currentRoute = this.router.url.split('?')[0];
    return includedRoutes.includes(currentRoute);
  }
}
