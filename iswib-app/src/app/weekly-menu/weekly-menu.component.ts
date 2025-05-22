import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

interface MenuDay {
    breakfast: string[];
    lunch: string[];
    dinner: string[];
}

@Component({
    selector: 'app-weekly-menu',
    standalone: true,
    imports: [CommonModule], // I OVO
    templateUrl: './weekly-menu.component.html',
    styleUrls: ['./weekly-menu.component.scss']
})
export class WeeklyMenuComponent {
    menuTypes = ['Regular', 'Vegan', 'Halal'];
    days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

    activeType = this.menuTypes[0];
    activeDay = this.days[0];

    menuItems: Record<string, Record<string, MenuDay>> = {
        Regular: {
            Monday: {
                breakfast: ['Regular Breakfast 1', 'Regular Breakfast 2'],
                lunch: ['Regular Lunch 1', 'Regular Lunch 2'],
                dinner: ['Regular Dinner 1', 'Regular Dinner 2']
            },
            Tuesday: {
                breakfast: ['Regular Breakfast 3', 'Regular Breakfast 4'],
                lunch: ['Regular Lunch 3', 'Regular Lunch 4'],
                dinner: ['Regular Dinner 3', 'Regular Dinner 4']
            },
            Wednesday: {
                breakfast: ['Regular Breakfast 5', 'Regular Breakfast 6'],
                lunch: ['Regular Lunch 5', 'Regular Lunch 6'],
                dinner: ['Regular Dinner 5', 'Regular Dinner 6']
            },
            Thursday: {
                breakfast: ['Regular Breakfast 7', 'Regular Breakfast 8'],
                lunch: ['Regular Lunch 7', 'Regular Lunch 8'],
                dinner: ['Regular Dinner 7', 'Regular Dinner 8']
            },
            Friday: {
                breakfast: ['Regular Breakfast 9', 'Regular Breakfast 10'],
                lunch: ['Regular Lunch 9', 'Regular Lunch 10'],
                dinner: ['Regular Dinner 9', 'Regular Dinner 10']
            },
        },
        Vegan: {
            Monday: {
                breakfast: ['Vegan Breakfast 1', 'Vegan Breakfast 2'],
                lunch: ['Vegan Lunch 1', 'Vegan Lunch 2'],
                dinner: ['Vegan Dinner 1', 'Vegan Dinner 2']
            },
            Tuesday: {
                breakfast: ['Vegan Breakfast 3', 'Vegan Breakfast 4'],
                lunch: ['Vegan Lunch 3', 'Vegan Lunch 4'],
                dinner: ['Vegan Dinner 3', 'Vegan Dinner 4']
            },
            Wednesday: {
                breakfast: ['Vegan Breakfast 5', 'Vegan Breakfast 6'],
                lunch: ['Vegan Lunch 5', 'Vegan Lunch 6'],
                dinner: ['Vegan Dinner 5', 'Vegan Dinner 6']
            },
            Thursday: {
                breakfast: ['Vegan Breakfast 7', 'Vegan Breakfast 8'],
                lunch: ['Vegan Lunch 7', 'Vegan Lunch 8'],
                dinner: ['Vegan Dinner 7', 'Vegan Dinner 8']
            },
            Friday: {
                breakfast: ['Vegan Breakfast 9', 'Vegan Breakfast 10'],
                lunch: ['Vegan Lunch 9', 'Vegan Lunch 10'],
                dinner: ['Vegan Dinner 9', 'Vegan Dinner 10']
            },
        },
        Halal: {
            Monday: {
                breakfast: ['Halal Breakfast 1', 'Halal Breakfast 2'],
                lunch: ['Halal Lunch 1', 'Halal Lunch 2'],
                dinner: ['Halal Dinner 1', 'Halal Dinner 2']
            },
            Tuesday: {
                breakfast: ['Halal Breakfast 3', 'Halal Breakfast 4'],
                lunch: ['Halal Lunch 3', 'Halal Lunch 4'],
                dinner: ['Halal Dinner 3', 'Halal Dinner 4']
            },
            Wednesday: {
                breakfast: ['Halal Breakfast 5', 'Halal Breakfast 6'],
                lunch: ['Halal Lunch 5', 'Halal Lunch 6'],
                dinner: ['Halal Dinner 5', 'Halal Dinner 6']
            },
            Thursday: {
                breakfast: ['Halal Breakfast 7', 'Halal Breakfast 8'],
                lunch: ['Halal Lunch 7', 'Halal Lunch 8'],
                dinner: ['Halal Dinner 7', 'Halal Dinner 8']
            },
            Friday: {
                breakfast: ['Halal Breakfast 9', 'Halal Breakfast 10'],
                lunch: ['Halal Lunch 9', 'Halal Lunch 10'],
                dinner: ['Halal Dinner 9', 'Halal Dinner 10']
            },
        }
    };

    // For bottom navigation (if using app-bottom-nav)
    navItems = [
        { icon: '🍳', route: '/breakfast' },
        { icon: '🥗', route: '/lunch' },
        { icon: '🍽️', route: '/dinner' }
    ];

    selectType(type: string) {
        this.activeType = type;
    }

    selectDay(day: string) {
        this.activeDay = day;
    }
}