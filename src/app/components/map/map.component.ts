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

      const znamenitost = L.icon({
        iconUrl: 'assets/images/ikonica-znamenitosti.png',
        iconSize: [80, 80],
        iconAnchor: [40, 80],
        popupAnchor: [0, -90]
      });

      const crkva = L.icon({
        iconUrl: 'assets/images/ikonica (3).png',
        iconSize: [80, 80],
        iconAnchor: [40, 80],
        popupAnchor: [0, -90]
      });

      const kafic = L.icon({
        iconUrl: 'assets/images/ikonica-kafic.png',
        iconSize: [80, 80],
        iconAnchor: [40, 80],
        popupAnchor: [0, -90]
      });

      const muzej = L.icon({
        iconUrl: 'assets/images/ikonica-muzej.png',
        iconSize: [80, 80],
        iconAnchor: [40, 80],
        popupAnchor: [0, -90]
      });

      const soping = L.icon({
        iconUrl: 'assets/images/ikonica-soping.png',
        iconSize: [80, 80],
        iconAnchor: [40, 80],
        popupAnchor: [0, -90]
      });

      const art = L.icon({
        iconUrl: 'assets/images/ikonica-art.png',
        iconSize: [80, 80],
        iconAnchor: [40, 80],
        popupAnchor: [0, -90]
      });

      const restorani = L.icon({
        iconUrl: 'assets/images/ikonica-restorani.png',
        iconSize: [80, 80],
        iconAnchor: [40, 80],
        popupAnchor: [0, -90]
      });



      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(this.map);

      // Dodati svi markeri iz Belgrade Map Markers fajla
      {{L.marker([44.8227, 20.4585], { icon: znamenitost }).addTo(this.map)
          .bindPopup(`<b>Petar Drapšin Hostel</b><br/>A place where all participants of ISWiB live for 8 days.`);

        L.marker([44.8223, 20.4509], { icon: znamenitost }).addTo(this.map)
          .bindPopup(`<b>Belgrade Fortress</b><br/>A historic core of the city with spectacular views of the confluence of the Sava and Danube rivers.`);

        L.marker([44.8224, 20.4509], { icon: znamenitost }).addTo(this.map)
          .bindPopup(`<b>Kalemegdan Park</b><br/>A favorite place for walks and relaxation.`);
    
        L.marker([44.8233, 20.4476], { icon: znamenitost }).addTo(this.map)
          .bindPopup(`<b>The Victor Monument</b><br/>A symbol of Belgrade and a popular photo spot.`);

        L.marker([44.8251, 20.4542], { icon: znamenitost }).addTo(this.map)
          .bindPopup(`<b>Belgrade Zoo (Beo Zoo Vrt)</b><br/>Home to over 800 animals, including white lions.`);

        L.marker([44.8227, 20.451], { icon: crkva }).addTo(this.map)
          .bindPopup(`<b>Church of St. Petka</b><br/>Known for its miraculous spring water.`);

        L.marker([44.8233, 20.4481], { icon: znamenitost }).addTo(this.map)
          .bindPopup(`<b>Roman Well</b><br/>A mysterious well from the 18th century.`);

        L.marker([44.8275, 20.448], { icon: znamenitost }).addTo(this.map)
          .bindPopup(`<b>Nebojsa Tower</b><br/>An old Turkish watchtower by the river.`);

        L.marker([44.8222, 20.45], { icon: muzej }).addTo(this.map)
          .bindPopup(`<b>Military Museum</b><br/>A collection of weapons and war artifacts.`);

        L.marker([44.8255, 20.4521], { icon: kafic }).addTo(this.map)
          .bindPopup(`<b>Boho Bar</b><br/>A cozy café surrounded by trees inside the park.`);

        L.marker([44.8178, 20.457], { icon: soping }).addTo(this.map)
          .bindPopup(`<b>Knez Mihailova Street</b><br/>The main pedestrian zone with shops, cafés, and galleries.`);

        L.marker([44.8169, 20.46], { icon: muzej }).addTo(this.map)
          .bindPopup(`<b>National Museum of Serbia</b><br/>The most important art collection in the country.`);

        L.marker([44.817, 20.4605], { icon: art }).addTo(this.map)
          .bindPopup(`<b>National Theatre</b><br/>A grand building and cultural center.`);

        L.marker([44.8172, 20.4576], { icon: art }).addTo(this.map)
          .bindPopup(`<b>Progres Gallery</b><br/>A contemporary art exhibition space.`);
        
        L.marker([44.8169, 20.4605], { icon: znamenitost }).addTo(this.map)
          .bindPopup(`<b>Republic Square</b><br/>The central city square with a statue of Prince Mihailo.`);

        L.marker([44.8144, 20.4622], { icon: muzej }).addTo(this.map)
          .bindPopup(`<b>Museum of Illusions</b><br/>A fun and interactive experience for all ages.`);

        L.marker([44.8203, 20.4542], { icon: soping }).addTo(this.map)
          .bindPopup(`<b>Rajiceva Shopping Center</b><br/>A modern shopping mall with rooftop views.`);

        L.marker([44.8171, 20.4545], { icon: muzej }).addTo(this.map)
          .bindPopup(`<b>Museum of Applied Arts</b><br/>A collection of design and decorative arts.`);
        
        L.marker([44.8181, 20.4646], { icon: restorani }).addTo(this.map)
          .bindPopup(`<b>Skadarlija Street</b><br/>A bohemian street with traditional restaurants and live music.`);

        L.marker([44.8176, 20.4643], { icon: restorani }).addTo(this.map)
          .bindPopup(`<b>Restaurant Dva Jelena (Two Deer)</b><br/>One of the oldest taverns in Belgrade.`);

        L.marker([44.8233, 20.4672], { icon: art }).addTo(this.map)
          .bindPopup(`<b>O3one Gallery</b><br/>A modern art venue.`);

        L.marker([44.8181, 20.4516], { icon: muzej }).addTo(this.map)
          .bindPopup(`<b>Museum of the Serbian Orthodox Church</b><br/>A rich religious collection.`);

        L.marker([44.82, 20.4566], { icon: muzej }).addTo(this.map)
          .bindPopup(`<b>Ethnographic Museum</b><br/>Showcasing Serbian tradition and folklore.`);

        L.marker([44.8212, 20.4588], { icon: muzej }).addTo(this.map)
          .bindPopup(`<b>Museum of Vuk and Dositej</b><br/>Dedicated to Serbian educators and reformers.`);

        L.marker([44.8052, 20.4707], { icon: muzej }).addTo(this.map)
          .bindPopup(`<b>Nikola Tesla Museum</b><br/>Focused on the life and inventions of the famous scientist.`);

        L.marker([44.8188, 20.4561], { icon: art }).addTo(this.map)
          .bindPopup(`<b>Gallery of SANU</b><br/>Exhibitions of science and art.`);

        L.marker([44.8196, 20.4529], { icon: muzej }).addTo(this.map)
          .bindPopup(`<b>Museum of Contemporary Art</b><br/>Modern art located on the Sava riverbank.`);

        L.marker([44.8192, 20.4486], { icon: kafic }).addTo(this.map)
          .bindPopup(`<b>Sava Riverbank at Beton Hala</b><br/>Trendy bars and restaurants by the river.`);

        L.marker([44.8117, 20.4497], { icon: kafic }).addTo(this.map)
          .bindPopup(`<b>Savamala District</b><br/>A trendy area known for nightlife, street art, and alternative culture.`);

        L.marker([44.8141, 20.4513], { icon: art }).addTo(this.map)
          .bindPopup(`<b>Mikser House</b><br/>A creative hub for design, art, and music events.`);

        L.marker([44.8144, 20.4504], { icon: art }).addTo(this.map)
          .bindPopup(`<b>KC Grad</b><br/>A cultural center with concerts, exhibitions, and markets.`);

        L.marker([44.8096, 20.4492], { icon: znamenitost }).addTo(this.map)
          .bindPopup(`<b>Belgrade Waterfront Promenade</b><br/>A modern riverside walkway with cafes and parks.`);

        L.marker([44.803, 20.4464], { icon: soping }).addTo(this.map)
          .bindPopup(`<b>Galerija Shopping Mall</b><br/>One of the largest malls in the Balkans, located by the Sava River.`);

        L.marker([44.8054, 20.4464], { icon: znamenitost }).addTo(this.map)
          .bindPopup(`<b>Belgrade Tower (Kula Beograd)</b><br/>The tallest building in Serbia with a viewing deck.`);

        L.marker([44.8055, 20.4515], { icon: znamenitost }).addTo(this.map)
          .bindPopup(`<b>Sava Park</b><br/>A new green space along the river, ideal for walks and family activities.`);

        L.marker([44.8178, 20.4525], { icon: restorani }).addTo(this.map)
          .bindPopup(`<b>Znak Pitanja (Question Mark)</b><br/>The oldest tavern in Belgrade, known for traditional Serbian dishes.`);

        L.marker([44.8151, 20.4659], { icon: restorani }).addTo(this.map)
          .bindPopup(`<b>Restoran Hanan – Lebanese Cuisine</b><br/>Offers authentic Lebanese dishes like hummus, falafel, and shawarma.`);

        L.marker([44.8177, 20.4572], { icon: restorani }).addTo(this.map)
          .bindPopup(`<b>Cesnili Doner – Turkish Cuisine</b><br/>Specializes in Turkish specialties like doner and kebabs.`);

        L.marker([44.8182, 20.4619], { icon: restorani }).addTo(this.map)
          .bindPopup(`<b>Little Bay – European Cuisine</b><br/>A restaurant with a unique opera-inspired interior.`);

        L.marker([44.8129, 20.4698], { icon: restorani }).addTo(this.map)
          .bindPopup(`<b>Mezestoran Dvorište – Greek Cuisine</b><br/>A hidden gem serving Greek specialties like gyros and seafood.`);

        L.marker([44.8202, 20.4604], { icon: restorani }).addTo(this.map)
          .bindPopup(`<b>Endorfin – International Cuisine</b><br/>A modern restaurant offering a variety of international dishes.`);
          
        L.marker([44.7983, 20.4692], { icon: crkva }).addTo(this.map)
          .bindPopup(`<b>Hram Svetog Save</b><br/>One of the largest Orthodox churches in the world.`);
}}

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
