import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashBoardRoutingModule { }
