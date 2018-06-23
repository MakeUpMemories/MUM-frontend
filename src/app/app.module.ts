import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FirstViewComponent } from './first-view/first-view.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FirstViewComponent,
    MenuBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
