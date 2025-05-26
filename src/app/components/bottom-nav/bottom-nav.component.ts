import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bottom-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.scss']
})
export class BottomNavComponent {
  // Definišite 12 emojija sa pripadajućim rutama
  navItems = [
    { icon: '🏠', route: '/home' },
    { icon: '🔍', route: '/search' },
    { icon: '❤️', route: '/favorites' },
    { icon: '🔔', route: '/notifications' },
    { icon: '✉️', route: '/messages' },
    { icon: '👤', route: '/profile' },
    { icon: '⚙️', route: '/settings' },
    { icon: '❓', route: '/help' },
    { icon: 'ℹ️', route: '/about' },
    { icon: '🛒', route: '/cart' },
    { icon: '💳', route: '/payments' },
    { icon: '🚪', route: '/logout' }
  ];

  constructor(private router: Router) { }

  navigate(route: string) {
    this.router.navigate([route]);
  }
}