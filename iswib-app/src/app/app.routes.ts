import { Routes } from '@angular/router';
import { WeeklyMenuComponent } from './weekly-menu/weekly-menu.component';
import { WorkshopsComponent } from './workshops/workshops.component';

export const routes: Routes = [
    { path: 'weekly-menu', component: WeeklyMenuComponent },
    { path: 'workshops', component: WorkshopsComponent }
];
