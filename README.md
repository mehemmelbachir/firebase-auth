# Angular Firebase Auth

What is firebase-auth ?
-----------------------

Implementing [firebase authectification](https://firebase.google.com) for **email/password** and social providers **Google, Facebook**, and **phone** into a reusable Angular 6 Module.
The module provide customizable and ready to use LOGIN nd REGISTER forms as angular components.  
**Observable User object** - To handle auth status and authenticated user's data.

The project work with DJANGO app to allow authentification into your BACKEND API.
____________________________
## Dependencies:  
This module is based upon [Angularfire2](https://github.com/angular/angularfire2) project,  
Start by installing the following dependencies into your project.

## Installation:
First clone the project into a local repository, than copy **auth** module `../src/app/auth` into your project.  

     git clone 'path...'


## Configuration:
Import `AuthModule` into your `app.module.ts`

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

Use ready components into your app:

    <auth-login></auth-login>
    <auth-register></auth-register>
