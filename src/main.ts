// main.ts

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // Standalone komponenta
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage'; // Rute

// Importovanje konfiguracije aplikacije
import { appConfig } from './app/app.config';

// Pokretanje Angular aplikacije sa AppComponent i appConfig
bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));