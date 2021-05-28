import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Pagina1Component } from './pagina1/pagina1.component';
import { Pagina2Component } from './pagina2/pagina2.component';
import { SharedModule } from '../shared/shared.module';
import { Pages_Routes } from './pages.routes';
import { PagesComponent } from './pages.component';


@NgModule({
  declarations: [
    DashboardComponent,
    Pagina1Component,
    Pagina2Component,
    PagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    Pages_Routes
  ],
  exports:[
    DashboardComponent,
    Pagina1Component,
    Pagina2Component
  ]

})
export class PagesModule{ }
