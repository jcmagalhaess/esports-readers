import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'valorant', pathMatch: 'full' },
  {
    path: 'valorant',
    loadChildren: () => loadRemoteModule('esr-valorant', './Valorant').then(m => m.routes),
  },
];
