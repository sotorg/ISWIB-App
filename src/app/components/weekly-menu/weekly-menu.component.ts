import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface MenuDay {
  breakfast: string[];
  lunch: string[];
  dinner: string[];
}

@Component({
  selector: 'app-weekly-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weekly-menu.component.html',
  styleUrls: ['./weekly-menu.component.scss']
})
export class WeeklyMenuComponent implements OnInit {
  menuTypes = ['Regular', 'Vegan', 'Halal'];
  days = ['20', '21', '22', '23', '24', '25', '26', '27', '28'];

  activeType = this.menuTypes[0];
  activeDay = '';
  currentDay = '';

  menuItems: Record<string, Record<string, MenuDay>> = {
    Regular: {
      '20': { breakfast: [], lunch: [], dinner: [] },
      '21': { breakfast: [], lunch: [], dinner: [] },
      '22': { breakfast: [], lunch: [], dinner: [] },
      '23': { breakfast: [], lunch: [], dinner: [] },
      '24': { breakfast: [], lunch: [], dinner: [] },
      '25': { breakfast: [], lunch: [], dinner: [] },
      '26': { breakfast: [], lunch: [], dinner: [] },
      '27': { breakfast: [], lunch: [], dinner: [] },
      '28': { breakfast: [], lunch: [], dinner: [] },
    },
    Vegan: {
      '20': { breakfast: [], lunch: [], dinner: [] },
      '21': { breakfast: [], lunch: [], dinner: [] },
      '22': { breakfast: [], lunch: [], dinner: [] },
      '23': { breakfast: [], lunch: [], dinner: [] },
      '24': { breakfast: [], lunch: [], dinner: [] },
      '25': { breakfast: [], lunch: [], dinner: [] },
      '26': { breakfast: [], lunch: [], dinner: [] },
      '27': { breakfast: [], lunch: [], dinner: [] },
      '28': { breakfast: [], lunch: [], dinner: [] },
    },
    Halal: {
      '20': { breakfast: [], lunch: [], dinner: [] },
      '21': { breakfast: [], lunch: [], dinner: [] },
      '22': { breakfast: [], lunch: [], dinner: [] },
      '23': { breakfast: [], lunch: [], dinner: [] },
      '24': { breakfast: [], lunch: [], dinner: [] },
      '25': { breakfast: [], lunch: [], dinner: [] },
      '26': { breakfast: [], lunch: [], dinner: [] },
      '27': { breakfast: [], lunch: [], dinner: [] },
      '28': { breakfast: [], lunch: [], dinner: [] },
    }
  };

  navItems = [
    { icon: '🍳', route: '/breakfast' },
    { icon: '🥗', route: '/lunch' },
    { icon: '🍽️', route: '/dinner' }
  ];

  ngOnInit(): void {
    this.setToday();
  }

  setToday() {
    const today = new Date();
    const day = today.getDate();
    const padded = day.toString().padStart(2, '0');
    if (this.days.includes(padded)) {
      this.activeDay = padded;
    } else {
      this.activeDay = this.days[0];
    }
    this.currentDay = padded;
  }

  getDayName(day: string): string {
    const date = new Date(2025, 6, +day);
    return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][date.getDay()];
  }

  selectType(type: string) {
    this.activeType = type;
  }

  selectDay(day: string) {
    this.activeDay = day;
  }

  isToday(day: string): boolean {
    return this.currentDay === day;
  }
}
