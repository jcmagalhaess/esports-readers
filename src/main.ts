import { initFederation } from '@angular-architects/native-federation';

initFederation('./assets/federation.manifest.json')
  .catch(err => console.error(err))
  .then(res => {
    console.log(res);
    import('./bootstrap')
  })
  .catch(err => console.error(err));
