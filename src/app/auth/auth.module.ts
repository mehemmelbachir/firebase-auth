import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
// import { RouterModule } from '@angular/router';

import {
  AuthMethods,
  AuthProvider,
  AuthProviderWithCustomConfig,
  CredentialHelper,
  FirebaseUIAuthConfig,
  FirebaseUIModule
} from 'firebaseui-angular';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

// import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../../environments/environment';

const facebookCustomConfig: AuthProviderWithCustomConfig = {
  provider: AuthProvider.Facebook,
  customConfig: {
    scopes: [
      'public_profile',
      'email',
      'user_likes',
      'user_friends'
    ],
    customParameters: {
      // Forces password re-entry.
      // auth_type: 'reauthenticate'
    }
  }
};

const phoneCustomConfig : AuthProviderWithCustomConfig = {
  provider: AuthProvider.Phone,
  customConfig : {
    recaptchaParameters: {
      type: 'image', // 'audio'
      size: 'invisible', // 'invisible' or 'compact', 'normal'
      badge: 'bottomleft' //' bottomright' or 'inline' applies to invisible.
    },
    defaultCountry: 'DZ', // Set default country to the United Kingdom (+44).
    // For prefilling the national number, set defaultNationNumber.
    // This will only be observed if only phone Auth provider is used since
    // for multiple providers, the NASCAR screen will always render first
    // with a 'sign in with phone number' button.
    // defaultNationalNumber: '1234567890',
    // You can also pass the full phone number string instead of the
    // 'defaultCountry' and 'defaultNationalNumber'. However, in this case,
    // the first country ID that matches the country code will be used to
    // populate the country selector. So for countries that share the same
    // country code, the selected country may not be the expected one.
    // In that case, pass the 'defaultCountry' instead to ensure the exact
    // country is selected. The 'defaultCountry' and 'defaultNationaNumber'
    // will always have higher priority than 'loginHint' which will be ignored
    // in their favor. In this case, the default country will be 'GB' even
    // though 'loginHint' specified the country code as '+1'.
    // loginHint: '+11234567890'
    requireDisplayName: true,
  }
}

const firebaseUiAuthConfig: FirebaseUIAuthConfig = {
  providers: [
    AuthProvider.Google,
    facebookCustomConfig,
    phoneCustomConfig //AuthProvider.Phone
  ],
  method: AuthMethods.Popup,
  tos: '',
  credentialHelper: CredentialHelper.AccountChooser
};

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ],
  declarations: [LoginComponent, RegisterComponent]
})
export class AuthModule { }
