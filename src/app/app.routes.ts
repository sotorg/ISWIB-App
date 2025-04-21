import { Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MapComponent } from './components/map/map.component';

export const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'mapa', component: MapComponent },
];
