import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', title: AppComponent.prototype.title, redirectTo: 'valorant', pathMatch: 'full' },
  {
    path: 'valorant',
    loadChildren: () => loadRemoteModule('esr-valorant', './routes').then(m => m.routes)
  },
  {
    path: 'league-of-legends',
    loadChildren: () => loadRemoteModule('esr-valorant', './routes').then(m => m.routes)
  },
];
