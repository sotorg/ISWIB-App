import { Component, AfterViewInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-map',
  standalone: true,
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit, OnDestroy {
  private map: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  async ngAfterViewInit(): Promise<void> {
    if (isPlatformBrowser(this.platformId)) {
      // Dinamičko učitavanje Leaflet biblioteke
      const L = await import('leaflet');
      
      // Inicijalizacija mape s nasumičnom tačkom u Beogradu
      this.map = L.map('map').setView([44.8125, 20.4612], 13);
      
      // Dodavanje OpenStreetMap tile layer-a
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(this.map);
      
      // Dodavanje markera na nasumičnoj tački
      L.marker([44.8125, 20.4612]).addTo(this.map)
        .bindPopup('Nasumična tačka u Beogradu 📍')
        .openPopup();
    }
  }

  ngOnDestroy(): void {
    if (this.map) {
      this.map.remove();
    }
  }
}
