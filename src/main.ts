import { initFederation } from '@angular-architects/native-federation';
import { environment } from './environments/environment';

initFederation(`./assets/${ environment.FEDERATION }.json`)
  .catch(err => console.error(err))
  .then(res => {
    import('./bootstrap')
  })
  .catch(err => console.error(err));
