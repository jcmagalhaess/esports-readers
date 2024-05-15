import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'valorant', pathMatch: 'full' },
  {
    path: 'valorant',
    loadChildren: () => {
      return loadRemoteModule({
        remoteEntry: 'http://localhost:4300/remoteEntry.js',
        remoteName: 'remoteApp',
        exposedModule: './CounterModule'
      }).then(m => m.CounterModule).catch(err => console.error(err))
    }
  },
];
