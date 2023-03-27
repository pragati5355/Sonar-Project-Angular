import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashBoardRoutingModule } from './dash-board-routing.module';
import { PluseCheckScreenComponent } from './pluse-check-screen/pluse-check-screen.component';
import { ElementsModule } from '../elements/elements.module';
import { SurveyScreensComponent } from './survey-screens/survey-screens.component';
import { PlusCheckSubmittedComponent } from './plus-check-submitted/plus-check-submitted.component';


@NgModule({
  declarations: [
    PluseCheckScreenComponent,
    SurveyScreensComponent,
    PlusCheckSubmittedComponent
  ],
  imports: [
    CommonModule,
    DashBoardRoutingModule,
    ElementsModule
  ]
})
export class DashBoardModule { }
