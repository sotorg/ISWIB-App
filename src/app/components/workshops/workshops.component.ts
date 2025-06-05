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
    title: 'Global Stories',
    description: 'The Global Journalism Workshop focuses on developing journalistic and media literacy skills through writing about global cultures, traditions, and customs. Participants will collaborate to create a newspaper or magazine that explores and connects diverse cultural perspectives.',
    date: '20. jun 2025.',
    time: '10:00 - 14:00',
    location: 'Sala 101',
    image: 'assets/images/globalstories.jpg',
    people : []
  },
  {
    title: 'Human Rights for All',
    description: 'The Human Rights Workshop explores topics like discrimination, identity, and activism through open dialogue, cultural exchange, and practical simulations. Participants will learn how to address social issues and promote inclusion by applying theory in a final group simulation.',
    date: '22. jun 2025.',
    time: '11:00 - 15:00',
    location: 'Sala 103',
    image: 'assets/images/humanrights.jpg',
    people: []
  },
  {
    title: 'Sustainable Development',
    description: 'The EcoPulse Workshop brings together participants to explore climate justice through expert talks, real-world case studies, and collaborative simulations focused on sustainability challenges. It culminates in a “Sustainability Summit” where teams present innovative, cross-cultural environmental solutions.',
    date: '23. jun 2025.',
    time: '10:30 - 14:30',
    location: 'Sala 104',
    image: 'assets/images/sustainabledevelopment.jpg',
    people: []
  },
  {
    title: 'Directing',
    description: 'Frame the Unity is a creative workshop where participants collaborate to produce a music video or short film reflecting ISWiB 2025’s theme of unity. Guided by filmmakers, you’ll learn storytelling, cinematography, and editing skills while exploring cultural expression through visual media.',
    date: '24. jun 2025.',
    time: '09:30 - 16:00',
    location: 'Sala 105',
    image: 'assets/images/directing.jpg',
    people: []
  },
  {
    title: 'Rhythms of the World',
    description: 'This workshop explores traditional dances from around the world, teaching participants the cultural stories and meanings behind each movement. Together, they will create a unique choreography that blends diverse styles, celebrating unity through dance.',
    date: '25. jun 2025.',
    time: '12:00 - 16:00',
    location: 'Sala 106',
    image: 'assets/images/dancing.jpg',
    people: []
  },
  {
    title: 'Musical Harmony',
    description: 'The Musical Workshop invites participants to explore global cultures through music, dance, and acting, creating a unique performance inspired by the theme “Unity in Diversity.” Through collaborative work, you’ll blend traditional art forms into a cohesive theatrical piece that celebrates cultural expression and connection. Guided by experienced moderators, you’ll gain performance skills while discovering how musical theater can break barriers and unite people.',
    date: '26. jun 2025.',
    time: '10:00 - 14:00',
    location: 'Sala 107',
    image: 'assets/images/musical.jpg',
    people: []
  },
  {
    title: 'Money Mastery',
    description: 'The Money Mastery workshop helps participants build essential financial skills by exploring everyday topics like budgeting, bills, and interest rates, as well as advanced areas like investing and cryptocurrency. Through hands-on problem solving and teamwork, you’ll gain the confidence to make informed financial decisions. Guided by a finance expert, you’ll be empowered to take control of your financial future.',
    date: '27. jun 2025.',
    time: '13:00 - 17:00',
    location: 'Sala 108',
    image: 'assets/images/money.jpg',
    people: []
  },
  {
    title: 'Cultural Tapestry',
    description: 'The Cultural Tapestry workshop invites participants to explore and celebrate global cultures through language, traditions, food, and stories. Together, you will connect personal experiences and express your cultural insights through dialogue and creative forms. The workshop fosters deep understanding and unity by weaving diverse backgrounds into a shared cultural narrative.',
    date: '28. jun 2025.',
    time: '09:00 - 13:00',
    location: 'Sala 109',
    image: 'assets/images/curtualtapestry.jpg',
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