import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NotfoundComponent } from './notfound/notfound.component';
@NgModule({
    imports:[ 
        RouterModule,
        CommonModule
    ],
    declarations:[
        FooterComponent,
        HeaderComponent,
        SidebarComponent,
        NotfoundComponent
    ],
    exports:[
        FooterComponent,
        HeaderComponent,
        SidebarComponent
    ]
})

export class SharedModule{}