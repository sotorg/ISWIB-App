import { Component, OnInit } from '@angular/core'; // Dodajemo OnInit
import { CommonModule } from '@angular/common';

// Definišemo interfejs za osobu
interface Person {
  name: string;
  position: string;
}

interface Workshop {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  people: Person[]; // Niz osoba za radionicu
}

@Component({
  selector: 'app-workshops',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workshops.component.html',
  styleUrls: ['./workshops.component.scss']
})
export class WorkshopsComponent implements OnInit { // Implementiramo OnInit
  workshops: Workshop[] = [
    {
      title: 'Uvod u Web Razvoj',
      description: 'Naučite osnove HTML-a, CSS-a i JavaScripta za kreiranje modernih web stranica.',
      date: '20. jun 2025.',
      time: '10:00 - 14:00',
      location: 'Sala 101',
      image: 'https://placehold.co/400x200/FF5733/FFFFFF?text=Web+Razvoj',
      people: [] // Inicijalno prazan, popunićemo u ngOnInit
    },
    {
      title: 'Uvod u Python Programiranje',
      description: 'Prvi koraci u Pythonu, popularnom jeziku za analizu podataka i veštačku inteligenciju.',
      date: '22. jun 2025.',
      time: '11:00 - 15:00',
      location: 'Sala 103',
      image: 'https://placehold.co/400x200/3357FF/FFFFFF?text=Python',
      people: []
    },
    {
      title: 'Radionica Digitalnog Marketinga',
      description: 'Strategije i alati za uspešno promovisanje proizvoda i usluga online.',
      date: '23. jun 2025.',
      time: '10:30 - 14:30',
      location: 'Sala 104',
      image: 'https://placehold.co/400x200/FF33A1/FFFFFF?text=Digitalni+Marketing',
      people: []
    },
    {
      title: 'Napredne Tehnike u Angularu',
      description: 'Dublji uvid u Angular framework, reaktivno programiranje i optimizaciju performansi.',
      date: '24. jun 2025.',
      time: '09:30 - 16:00',
      location: 'Sala 105',
      image: 'https://placehold.co/400x200/A133FF/FFFFFF?text=Angular',
      people: []
    }
  ];

  // Liste za generisanje nasumičnih podataka
  private sampleFirstNames: string[] = ['Marko', 'Jovana', 'Stefan', 'Milica', 'Nikola', 'Ana', 'Luka', 'Sara'];
  private sampleLastNames: string[] = ['Petrović', 'Jovanović', 'Stojanović', 'Đorđević', 'Nikolić', 'Pavlović'];
  private samplePositions: string[] = ['Predavač', 'Asistent', 'Gostujući predavač', 'Mentor', 'Koordinator', 'Specijalista'];

  ngOnInit(): void {
    this.generatePeopleForWorkshops();
  }

  private generateRandomName(): string {
    const firstName = this.sampleFirstNames[Math.floor(Math.random() * this.sampleFirstNames.length)];
    const lastName = this.sampleLastNames[Math.floor(Math.random() * this.sampleLastNames.length)];
    return `${firstName} ${lastName}`;
  }

  private generateRandomPosition(): string {
    return this.samplePositions[Math.floor(Math.random() * this.samplePositions.length)];
  }

  private generatePeopleForWorkshops(): void {
    this.workshops = this.workshops.map(workshop => {
      const numberOfPeople = Math.floor(Math.random() * 3) + 1; // Generiše 1 do 3 osobe
      const people: Person[] = [];
      for (let i = 0; i < numberOfPeople; i++) {
        people.push({
          name: this.generateRandomName(),
          position: this.generateRandomPosition()
        });
      }
      return { ...workshop, people };
    });
  }
}