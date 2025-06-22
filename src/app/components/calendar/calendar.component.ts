import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // ✅ DODATO
import { BottomNavComponent } from '../bottom-nav/bottom-nav.component';


interface ScheduleItem {
  timeFrom: string;
  timeTo: string;
  eventTitle: string;
  date?: string;
  location?: string;
  placeId?: string;
}

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, BottomNavComponent],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  type: string = '';
  days = ['20', '21', '22', '23', '24', '25', '26', '27', '28'];
  data: ScheduleItem[][] = [];
  currentTime: string = '';
  currentDay: string = '';

  constructor(private router: Router) {} // ✅ DODATO

  ngOnInit(): void {
    this.initializeData();
    this.setToday();
    this.setCurrentTime();
    setInterval(() => this.setCurrentTime(), 60000);
  }

  initializeData() {
    this.data = [
      // 20.07.2025
      [
        { timeFrom: '08:00', timeTo: '09:00', eventTitle: 'Welcome Talk', date: '20'},
        { timeFrom: '10:00', timeTo: '11:00', eventTitle: 'Icebreaker Games', date: '20' }
      ],
      // 21.07.2025
      [
        { timeFrom: '09:00', timeTo: '10:00', eventTitle: 'Team Workshop', date: '21' },
        { timeFrom: '11:00', timeTo: '12:30', eventTitle: 'Guest Speaker: John Doe', date: '21' }
      ],
      // 22.07.2025
      [
        { timeFrom: '05:00', timeTo: '07:00', eventTitle: 'Blud i nemoral', date: '22' },
        { timeFrom: '08:00', timeTo: '09:00', eventTitle: 'Morning Yoga', date: '22' },
        { timeFrom: '13:00', timeTo: '20:00', eventTitle: 'Creative Writing', date: '22' }
      ],
      // 23.07.2025
      [
        { timeFrom: '10:00', timeTo: '12:00', eventTitle: 'City Tour', location: 'Belgrade Center', placeId: 'ChIJ123' }
      ],
      // 24.07.2025
      [
        { timeFrom: '09:00', timeTo: '10:00', eventTitle: 'Panel Discussion' },
        { timeFrom: '14:00', timeTo: '15:00', eventTitle: 'Lunch Meetup', location: 'Zeleni Venac', placeId: 'ChIJ456' }
      ],
      // 25.07.2025
      [
        { timeFrom: '08:00', timeTo: '09:00', eventTitle: 'Networking Breakfast' },
        { timeFrom: '15:00', timeTo: '16:00', eventTitle: 'Coding Challenge' }
      ],
      // 26.07.2025
      [
        { timeFrom: '10:00', timeTo: '11:00', eventTitle: 'Workshop: AI Ethics' },
        { timeFrom: '18:00', timeTo: '20:00', eventTitle: 'Movie Night' }
      ],
      // 27.07.2025
      [
        { timeFrom: '09:00', timeTo: '10:00', eventTitle: 'Hackathon Kickoff' },
        { timeFrom: '20:00', timeTo: '22:00', eventTitle: 'Campfire Talk' }
      ],
      // 28.07.2025
      [
        { timeFrom: '11:00', timeTo: '13:00', eventTitle: 'Closing Ceremony' },
        { timeFrom: '14:00', timeTo: '20:00', eventTitle: 'Farewell Brunch' }
      ]
    ];
  }

  getDayName(day: string): string {
    const date = new Date(2025, 6, +day); // July = month 6 (0-based)
    return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][date.getDay()];
  }

  setToday() {
    const today = new Date();
    const day = today.getDate();
    const index = this.days.indexOf(day.toString().padStart(2, '0'));
    this.type = index >= 0 ? `day${index}` : 'day0';
  }

  setCurrentTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Meseci su 0-indeksirani
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    console.log(day);

    this.currentTime = `${hours}:${minutes}`;
    this.currentDay = `${day}`;
  }


  isCurrentEvent(item: ScheduleItem): boolean {
    return this.currentTime >= item.timeFrom && this.currentTime <= item.timeTo && this.currentDay == item.date;
  }

  goToLocation(item: ScheduleItem) {
    if (item.location && item.placeId) {
      const url = `https://www.google.com/maps/search/?api=1&query=${item.location}&query_place_id=${item.placeId}`;
      window.open(url, '_blank');
    }
  }

  
goToEvents(dayIndex: number) {
  const day = this.days[dayIndex];
  this.router.navigate(['/events'], { queryParams: { day } });
}
}
