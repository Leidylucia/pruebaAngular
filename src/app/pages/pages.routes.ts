import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PagesComponent } from "./pages.component";
import { Pagina1Component } from "./pagina1/pagina1.component";
import { Pagina2Component } from "./pagina2/pagina2.component";

const pagesRoutes:Routes=[
{
    path:"",
    component:PagesComponent,
    children:[
        {
            path:"dashboard",
            component:DashboardComponent
        },
        {
            path:"pagina1",
            component:Pagina1Component
        },
        {
            path:"pagina2",
            component:Pagina2Component
        }, 
        {
            path:"",
           redirectTo:"/dashboard",
           pathMatch:"full"
        }
    ]

}
];
export const Pages_Routes=RouterModule.forRoot(pagesRoutes,{useHash:true});