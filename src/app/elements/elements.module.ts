import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SlideBarComponent } from './slide-bar/slide-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavBarComponent,
    SlideBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavBarComponent,
    SlideBarComponent
  ]
})
export class ElementsModule { }
