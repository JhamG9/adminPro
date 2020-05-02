import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';

import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { BreadcrumbsComponent } from "./breadcrumbs/breadcrumbs.component";
import { NopagefoundComponent } from "./nopagefound/nopagefound.component";
import { BrowserModule } from '@angular/platform-browser'

@NgModule({
  imports: [
    BrowserModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    NopagefoundComponent
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    NopagefoundComponent
  ]
})
export class SharedModule { }
