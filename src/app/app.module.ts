// app.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,  // Označava ovu komponentu kao standalone
  imports: [RouterModule],  // Uključuje komponente koje koristimo
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Moja aplikacija';
}
