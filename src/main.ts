import { initFederation } from '@angular-architects/native-federation';
import { environment } from './environments/environment';

initFederation(`./assets/federation.manifest${environment.production ? '.production' : ''}.json`)
  .catch(err => console.error(err))
  .then(res => {
    console.log(res);
    import('./bootstrap')
  })
  .catch(err => console.error(err));
