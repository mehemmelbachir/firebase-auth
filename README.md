# Angular Firebase Auth

What is firebase-auth ?
-----------------------

Implementing [firebase authectification](https://firebase.google.com) for **email/password** and social providers **Google, Facebook**, and **phone** into a reusable Angular 6 Module.
The module provide customizable and ready to use LOGIN nd REGISTER forms as angular components.  
**Observable User object** - To handle auth status and authenticated user's data.

The project work with DJANGO app to allow authentification into your BACKEND API.
____________________________
## Installation:  
This module is based upon [Angularfire2](https://github.com/angular/angularfire2), [firebase](https://firebase.google.com/docs/web/setup), [firebaseUI-web](https://github.com/firebase/firebaseui-web) and [firebaseUI-Angular](https://github.com/RaphaelJenni/FirebaseUI-Angular)  
Start by installing the following dependencies into your project:

    $ npm install firebase firebaseui angularfire2 firebaseui-angular --save

## How to use:
1- First clone the project into a local repository

     git clone 'https://github.com/mehemmelbachir/firebase-auth'


2- Copy **auth** module `../src/app/auth` into your project.  

3- Set your firebase settings into `src/environments/environment.ts`

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
      ...

The firebase settings are provided in your [firebase console](https://console.firebase.google.com/).

4- Import `AuthModule` into your `app.module.ts`

    ...
    import { AuthModule } from './auth/auth.module';
    ...
    ...
    @NgModule({
      imports: [
        CommonModule,
        AuthModule,
        ...
      ],

5- Use ready components into your app:

    <!-- Login form -->
    <auth-login></auth-login>

    <!-- Register form -->
    <auth-register></auth-register>

## License

MIT © [BACHIR MEHEMMEL](mailto:mehemmel.bachir@gmail.com)
