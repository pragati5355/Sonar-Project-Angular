import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlusCheckSubmittedComponent } from './plus-check-submitted/plus-check-submitted.component';
import { PluseCheckScreenComponent } from './pluse-check-screen/pluse-check-screen.component';
import { SurveyScreensComponent } from './survey-screens/survey-screens.component';

const routes: Routes = [
  {
    path: '',
    component : PluseCheckScreenComponent
  },
  {
    path : 'survey/:id',
    component : SurveyScreensComponent
  },
  {
    path : 'submitted',
    component : PlusCheckSubmittedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashBoardRoutingModule { }
