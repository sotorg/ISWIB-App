import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component'; // Standalone komponenta
import { routes } from './app/app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage'; // Rute

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "iswib-app-f9b80", appId: "1:36879671005:web:b3a42b809d49fe6d95c534", storageBucket: "iswib-app-f9b80.firebasestorage.app", apiKey: "AIzaSyB8c--YA_dStGomyUghQ7l9hx1E36LTV8c", authDomain: "iswib-app-f9b80.firebaseapp.com", messagingSenderId: "36879671005", measurementId: "G-E0KJH7S2HP" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideStorage(() => getStorage())
  ]
}).catch(err => console.error(err));
