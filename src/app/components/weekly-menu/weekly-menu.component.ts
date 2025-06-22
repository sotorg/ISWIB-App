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
    Regular: this.generateMenu(),
    Vegan: this.generateMenu(),
    Halal: this.generateMenu()
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

  generateMenu(): Record<string, MenuDay> {
    const randomFoodItems = {
      breakfast: ['Pancakes', 'Cereal', 'Toast', 'Omelette', 'Fruit Salad'],
      lunch: ['Sandwich', 'Grilled Chicken', 'Pasta', 'Salad', 'Sushi'],
      dinner: ['Steak', 'Pizza', 'Burger', 'Pasta', 'Vegetable Stir-fry']
    };

    let menu: Record<string, MenuDay> = {};

    this.days.forEach(day => {
      menu[day] = {
        breakfast: this.getRandomItems(randomFoodItems.breakfast),
        lunch: this.getRandomItems(randomFoodItems.lunch),
        dinner: this.getRandomItems(randomFoodItems.dinner)
      };
    });

    return menu;
  }

  getRandomItems(items: string[], count = 3): string[] {
    let shuffled = [...items].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
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
