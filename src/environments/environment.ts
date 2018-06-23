// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  // Firebase conf
  firebase: {
    apiKey: "<your-firebase-apiKey>",
    authDomain: "<your-firebase-authDomain>",
    databaseURL: "<your-firebase-databaseURL>",
    projectId: "<your-firebase-projectId>",
    storageBucket: "<your-firebase-storageBucket>",
    messagingSenderId: "<your-firebase-messagingSenderId>"
  },

  // AUTH Config:
  auth : {
    errors: {
      email : 'E-mail obligatoire!',
      password1 : '8 Symbols au minimum',
      'auth/email-already-in-use' : 'Cette adresse mail est déja utilisée par un autre compte!',
      'auth/wrong-password' : 'Mot de passe incorrecte',
      'auth/user-not-found' : 'Aucun utilisateur ne correspond à cette adresse',
    },

    SUCCESS_URL : '',
    BACKEND_AUTH_URL : 'http://localhost:8000/auth/login/',
  }


};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
