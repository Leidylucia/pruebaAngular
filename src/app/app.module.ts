import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { App_Routes } from './app.routes';
import { ComponentesnComponent } from './componentesn/componentesn.component';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages/pages.component';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
    ComponentesnComponent, 
    LoginComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    App_Routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
