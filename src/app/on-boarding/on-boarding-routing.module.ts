import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnBoardingScreenComponent } from './on-boarding-screen/on-boarding-screen.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { StakeHolderSelectionComponent } from './stake-holder-selection/stake-holder-selection.component';
import { SupportPodComponent } from './support-pod/support-pod.component';

const routes: Routes = [

  {
    path : 'signup',
    component : SignUpComponent
  },
  {
    path : 'select',
    component : StakeHolderSelectionComponent
  },
  {
    path : 'step/:id',
    component : OnBoardingScreenComponent
  },
  {
    path : 'support',
    component : SupportPodComponent
  }
  
  
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnBoardingRoutingModule { }
