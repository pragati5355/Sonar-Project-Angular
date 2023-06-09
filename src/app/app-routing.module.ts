import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path : 'onboarding',
    loadChildren : () => import('./on-boarding/on-boarding.module').then(m => m.OnBoardingModule)
  },
  {
    path : 'dashboard',
    loadChildren : () => import('./dash-board/dash-board.module').then(m => m.DashBoardModule)
  },
  {
    path : '',
    redirectTo : 'onboarding/signup',
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
