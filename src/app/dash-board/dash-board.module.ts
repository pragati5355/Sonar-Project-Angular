import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashBoardRoutingModule } from './dash-board-routing.module';
import { PluseCheckScreenComponent } from './pluse-check-screen/pluse-check-screen.component';
import { ElementsModule } from '../elements/elements.module';
import { SurveyScreensComponent } from './survey-screens/survey-screens.component';


@NgModule({
  declarations: [
    PluseCheckScreenComponent,
    SurveyScreensComponent
  ],
  imports: [
    CommonModule,
    DashBoardRoutingModule,
    ElementsModule
  ]
})
export class DashBoardModule { }
