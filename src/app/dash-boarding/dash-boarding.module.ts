import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashBoardingRoutingModule } from './dash-boarding-routing.module';
import { ElementsModule } from '../elements/elements.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashBoardingRoutingModule,
    ElementsModule,
    RouterModule
  ], 
  exports :[]
})
export class DashBoardingModule { }
