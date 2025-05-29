// app.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MapComponent } from './components/map/map.component';
import { BottomNavComponent } from './components/bottom-nav/bottom-nav.component';



@Component({
  selector: 'app-root',
  standalone: true,  // Označava ovu komponentu kao standalone
  imports: [RouterModule, MainPageComponent, MapComponent, BottomNavComponent],  // Uključuje komponente koje koristimo
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Moja aplikacija';
}
