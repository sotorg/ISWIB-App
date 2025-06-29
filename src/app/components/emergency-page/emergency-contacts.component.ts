import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomNavComponent } from '../bottom-nav/bottom-nav.component';

@Component({
  selector: 'app-emergency-contacts',
  standalone: true,
  imports: [CommonModule, BottomNavComponent],
  templateUrl: './emergency-contacts.component.html',
  styleUrls: ['./emergency-contacts.component.scss']
})
export class EmergencyContactsComponent {
  groupGuides = [
    { name: 'Tami', phone: '123-456-7890' },
    { name: 'Marko', phone: '234-567-8901' },
    { name: 'Ana', phone: '345-678-9012' },
    { name: 'Jelena', phone: '456-789-0123' }
  ];

  organizationTeam = [
    { name: 'Tami', phone: '567-890-1234', position: 'IT Team Member 💻' },
    { name: 'Marko', phone: '678-901-2345', position: 'Logistics 📦' },
    { name: 'Ana', phone: '789-012-3456', position: 'Design 🎨' },
    { name: 'Luka', phone: '890-123-4567', position: 'Program Coordinator 🎤' },
    { name: 'Ivana', phone: '901-234-5678', position: 'Media & PR 📸' }
  ];
}
