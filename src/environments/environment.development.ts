// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const PROTOCOL = window.location.protocol;
const HOSTNAME = window.location.hostname;
const PORT = 8080;

const REVERSE_PROXY_URL = `${PROTOCOL}//${HOSTNAME}:${PORT}`;
const BACKEND_URL_CONST = `${REVERSE_PROXY_URL}`;

export const environment = {
  production: false,
  REVERSE_PROXY: REVERSE_PROXY_URL,
  BACKEND_URL: BACKEND_URL_CONST,
  FEDERATION: 'federation.manifest.production'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

console.log('DEV: ', environment);
