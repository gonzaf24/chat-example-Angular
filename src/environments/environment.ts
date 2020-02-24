// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: { //configuracion de firebase
    apiKey: "AIzaSyCYOxfem1NQsSJ6jk7LrBo9r6uWERCC71s",
    authDomain: "chatexampleangular6.firebaseapp.com",
    databaseURL: "https://chatexampleangular6.firebaseio.com",
    projectId: "chatexampleangular6",
    storageBucket: "chatexampleangular6.appspot.com",
    messagingSenderId: "147668049621",
    appId: "1:147668049621:web:51c8fa6bfdf9e9eb3e0c5c"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
