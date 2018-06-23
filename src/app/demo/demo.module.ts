import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthModule } from './../auth/auth.module';

import { DemoComponent } from './demo.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DemoRoutingModule } from './demo-routing.module';


@NgModule({
  imports: [
    CommonModule,
    DemoRoutingModule,
    AuthModule,
  ],
  exports: [
    DemoComponent,
  ],
  declarations: [DemoComponent, LoginComponent, RegisterComponent]
})
export class DemoModule { }
