import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const demoRoutes : Routes = [
    {path : 'login', component : LoginComponent},
    {path : 'register', component : RegisterComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(demoRoutes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
