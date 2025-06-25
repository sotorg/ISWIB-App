// app.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs'; // Dodato
import { filter, takeUntil } from 'rxjs/operators'; // Dodato takeUntil

import { BottomNavComponent } from './components/bottom-nav/bottom-nav.component';

// Funkcija koju želimo da pozivamo pri promeni rute
function manageHomepageElements() {
  const elementsToManage = document.querySelectorAll('.hide-at-index');

  if (window.location.pathname === '/') {
    elementsToManage.forEach(element => {
      (element as HTMLElement).style.display = 'none';
    });
  } else {
    elementsToManage.forEach(element => {
      (element as HTMLElement).style.display = '';
    });
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    BottomNavComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>(); // Kreiranje Subject-a za signal uništenja komponente

  constructor(public router: Router) {}

  ngOnInit() {
    // Pozivamo funkciju odmah pri inicijalnom učitavanju komponente
    manageHomepageElements();

    // Pretplaćujemo se na događaje rutera
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd), // Filtriraj samo NavigationEnd događaje
      takeUntil(this.destroy$) // Automatski odjavi pretplatu kada se destroy$ emituje
    ).subscribe(() => {
      // Nakon svake uspešne navigacije, pozivamo funkciju
      manageHomepageElements();
    });
  }

  ngOnDestroy() {
    // Emituje signal uništenja, što će automatski odjaviti sve pretplate
    // koje koriste takeUntil(this.destroy$)
    this.destroy$.next();
    this.destroy$.complete();
  }

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