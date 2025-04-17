import { Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MapComponent } from './components/map/map.component';

export const routes: Routes = [
  { path: '', component: MainPageComponent },         // defaultna ruta
  { path: 'mapa', component: MapComponent },          // ruta za mapu
];
