// events.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // dodaj import


interface EventItem {
  timeFrom: string;
  timeTo: string;
  eventTitle: string;
  dressCode?: string;
  theme?: string;
  cardsAccepted?: boolean;
  location?: string;
  placeId?: string;
}

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  type: string = '';
  days = ['20', '21', '22', '23', '24', '25', '26', '27', '28'];
  data: EventItem[][] = [];

  constructor(private route: ActivatedRoute) { } // ubaci u konstruktor

  ngOnInit(): void {
    this.initializeData();

    this.route.queryParams.subscribe(params => {
      const paramDay = params['day'];
      const index = this.days.indexOf(paramDay);
      if (index >= 0) {
        this.type = `day${index}`;
      } else {
        this.setToday();
      }
    });
  }

  initializeData() {
    this.data = [
      [
        { timeFrom: '20:00', timeTo: '00:00', eventTitle: 'Opening Night', dressCode: 'Casual', theme: 'Welcome Vibes', cardsAccepted: true, location: 'Venue A', placeId: 'ChIJaaa' }
      ],
      [
        { timeFrom: '21:00', timeTo: '01:00', eventTitle: 'Cultural Night', dressCode: 'Traditional', theme: 'Diversity', cardsAccepted: false, location: 'Venue B', placeId: 'ChIJbbb' }
      ],
      [
        { timeFrom: '19:00', timeTo: '22:00', eventTitle: 'Movie Marathon', dressCode: 'Comfy', theme: 'Cinema', cardsAccepted: true }
      ],
      [
        { timeFrom: '18:00', timeTo: '23:00', eventTitle: 'Talent Show', dressCode: 'Smart Casual', theme: 'Showtime', cardsAccepted: false }
      ],
      [
        { timeFrom: '20:00', timeTo: '02:00', eventTitle: 'Glow Party', dressCode: 'White', theme: 'Neon', cardsAccepted: true, location: 'Club XYZ', placeId: 'ChIJccc' }
      ],
      [
        { timeFrom: '17:00', timeTo: '20:00', eventTitle: 'Food Festival', dressCode: 'Chill', theme: 'Flavors', cardsAccepted: true }
      ],
      [
        { timeFrom: '16:00', timeTo: '18:00', eventTitle: 'Workshop Wrap-up', dressCode: 'Any', theme: 'Creativity', cardsAccepted: false }
      ],
      [
        { timeFrom: '22:00', timeTo: '00:00', eventTitle: 'Campfire Session', dressCode: 'Cozy', theme: 'Memories', cardsAccepted: false }
      ],
      [
        { timeFrom: '14:00', timeTo: '16:00', eventTitle: 'Farewell Event', dressCode: 'Formal', theme: 'Goodbye', cardsAccepted: true }
      ]
    ];
  }

  getDayName(day: string): string {
    const date = new Date(2025, 6, +day);
    return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][date.getDay()];
  }

  setToday() {
    const today = new Date();
    const day = today.getDate();
    const index = this.days.indexOf(day.toString().padStart(2, '0'));
    this.type = index >= 0 ? `day${index}` : 'day0';
  }

  goToLocation(item: EventItem) {
    if (item.location && item.placeId) {
      const url = `https://www.google.com/maps/search/?api=1&query=${item.location}&query_place_id=${item.placeId}`;
      window.open(url, '_blank');
    }
  }
}

