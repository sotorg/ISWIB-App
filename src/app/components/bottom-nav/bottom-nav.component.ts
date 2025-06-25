import { Component, OnInit, OnDestroy, HostBinding, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bottom-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.scss']
})
export class BottomNavComponent implements OnInit, AfterViewInit, OnDestroy {
  navItems = [
    { icon: 'assets/images/home.png', route: '' },
    { icon: 'assets/images/raspored.png', route: '/calendar' },
    { icon: 'assets/images/mapa.png', route: '/maps' },
    { icon: 'assets/images/hrana.png', route: '/menu' },
    { icon: 'assets/images/hitno.png', route: '/emergency-contacts' },
    { icon: 'assets/images/events.png', route: '/events' },
    { icon: 'assets/images/igrica.png', route: '/game' },
    { icon: 'assets/images/radionice.png', route: '/workshops' },
    { icon: 'assets/images/lost-and-found.png', route: '/lost-and-found' },
    { icon: 'assets/images/morepage.png', route: '/faq' },
    { icon: 'assets/images/serbianwords1.png', route: '/serbian-words' },
    { icon: 'assets/images/funfacts.png', route: '/fun-facts' },
    { icon: 'assets/images/converter.png', route: '/converter' },
  ];

  private initialBottomOffset: number = 15;
  private gapAboveFooter: number = 15;

  @HostBinding('style.bottom.px')
  currentBottomOffset: number = this.initialBottomOffset;

  private footerElement: HTMLElement | null = null;
  private observer: IntersectionObserver | undefined;
  
  private scrollListener = this.onScroll.bind(this);

  constructor(private router: Router) { }

  ngOnInit() {
    // Logika za navigaciju ostaje ista
  }

  ngAfterViewInit() {
    this.footerElement = document.querySelector('footer');
    if (!this.footerElement) {
      console.warn('Footer element not found for Intersection Observer.');
      return;
    }
    
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Futer je vidljiv:
            // 1. ODMAH pokreni logiku za pozicioniranje.
            this.onScroll(); 
            // 2. Zatim, dodaj listener za buduće skrol događaje.
            window.addEventListener('scroll', this.scrollListener);
          } else {
            // Futer je izašao iz vidnog polja: ukloni listener i resetuj poziciju.
            window.removeEventListener('scroll', this.scrollListener);
            this.currentBottomOffset = this.initialBottomOffset;
          }
        });
      },
      { rootMargin: '50px 0px 0px 0px' }
    );

    this.observer.observe(this.footerElement);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scrollListener);
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private onScroll() {
    if (!this.footerElement) return;

    const footerOffsetTop = this.footerElement.getBoundingClientRect().top + window.scrollY;
    const viewportBottom = window.scrollY + window.innerHeight;
    const overlap = viewportBottom - footerOffsetTop;

    if (overlap > 0) {
      this.currentBottomOffset = this.gapAboveFooter + overlap;
    } else {
      this.currentBottomOffset = this.initialBottomOffset;
    }
  }

  navigate(route: string) {
    this.router.navigate([route]);
  }
}