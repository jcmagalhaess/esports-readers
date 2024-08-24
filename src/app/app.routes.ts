import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'valorant', pathMatch: 'full' },
  {
    path: 'valorant',
    loadChildren: () =>
      loadRemoteModule('valorant', './routes').then((r) => r.VALORANT_ROUTES),
  }
];
