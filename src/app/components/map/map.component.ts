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
      const L = await import('leaflet');
  
      this.map = L.map('map').setView([44.8125, 20.4612], 13);
      
      const customIcon = L.icon({
        iconUrl: 'assets/images/ikonica (3).png', // na primer: 'images/hostel-icon.png'
        iconSize: [80, 80], // širina i visina ikonice
        iconAnchor: [40, 80], // tačka sidrenja ikonice (gde pokazuje)
        popupAnchor: [0, -90] // pozicija popup-a u odnosu na ikonicu
    });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(this.map);
  
      L.marker([44.8227, 20.4585], { icon: customIcon }).addTo(this.map)
    .bindPopup(`
        <b>Petar Drapšin Hostel</b><br/>
        A place where all participants of ISWiB live for 8 days.
    `)
    .openPopup();
  
    L.marker([44.8223, 20.4509], { icon: customIcon }).addTo(this.map)
    .bindPopup(`
        <b>Belgrade Fortress</b><br/>
        A historic core of the city with spectacular views of the confluence of the Sava and Danube rivers.
    `)
    .openPopup();
      // Ovo je bitno da se mapa lepo "sredi" vizuelno
      setTimeout(() => {
        this.map.invalidateSize();
      }, 300);
    }
  }
  

  ngOnDestroy(): void {
    if (this.map) {
      this.map.remove();
    }
  }
}
