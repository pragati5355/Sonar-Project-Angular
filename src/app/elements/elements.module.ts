import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SlideBarComponent } from './slide-bar/slide-bar.component';
import { RouterModule } from '@angular/router';
import { DashNavBarComponent } from './dash-nav-bar/dash-nav-bar.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { AddDetailsComponent } from './add-details/add-details.component';

@NgModule({
  declarations: [
    NavBarComponent,
    SlideBarComponent,
    DashNavBarComponent,
    ProgressBarComponent,
    AddDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavBarComponent,
    SlideBarComponent,
    DashNavBarComponent,
    ProgressBarComponent,
    AddDetailsComponent
  ]
})
export class ElementsModule { }
