import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'valorant', pathMatch: 'full' },
  {
    path: 'valorant',
    loadComponent: () => import('./app.component').then(c => c.AppComponent)
  },
];
