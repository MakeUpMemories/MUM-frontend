import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../app/login/login.component';
import {FirstViewComponent} from '../app/first-view/first-view.component'
import {RegisterComponent} from '../app/register/register.component'

  const routes: Routes = [
    {path: '', redirectTo: '/firstview', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'firstview', component: FirstViewComponent},
    {path: 'register', component: RegisterComponent}
  ]

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule {}