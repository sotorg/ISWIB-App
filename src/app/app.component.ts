import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MapComponent } from './components/map/map.component';
import { BottomNavComponent } from './components/bottom-nav/bottom-nav.component';

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

getBackRoute(): string {
    const url = this.router.url;
    const moreChildren = [
      '/faq',
      '/serbian-words',
      '/fun-facts',
      '/converter',
    ];
    if (moreChildren.some(route => url.startsWith(route))) {
      return '/more';
    }
    return '/';
  }
}