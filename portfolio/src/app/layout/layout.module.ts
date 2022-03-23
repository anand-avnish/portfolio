import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout.routing';
import { LayoutComponent } from './layout.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';


@NgModule({
  declarations: [
    LayoutComponent,
    TopNavbarComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
