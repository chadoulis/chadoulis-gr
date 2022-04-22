// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    projectId: 'chadoulis-gr',
    appId: '1:171295240976:web:08647b80a7a506b43b6b95',
    storageBucket: 'chadoulis-gr.appspot.com',
    locationId: 'europe-west',
    apiKey: 'AIzaSyARJUzNeNvFfIZMo74GzbumxMC7bn12kXw',
    authDomain: 'chadoulis-gr.firebaseapp.com',
    messagingSenderId: '171295240976',
    measurementId: 'G-CBX9CRV17E',
  },
  mapbox: {
    accessToken: 'pk.eyJ1IjoiY2hhZG91bGlzIiwiYSI6ImNsMjAxaHhtNjByd2kzbXFvenlmMnZiMjkifQ.pK79AtLOogpXmVuONhwD9Q'
  },
  recaptcha: {
    siteKey: '6LcckHMfAAAAABYQPkwqy2NK7HF2T9Lr35oyP5Zr',
  },
  domain: "localhost"
};

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
