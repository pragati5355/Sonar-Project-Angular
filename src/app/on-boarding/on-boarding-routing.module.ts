import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmationScreenComponent } from './confirmation-screen/confirmation-screen.component';
import { OnBoardingScreenComponent } from './on-boarding-screen/on-boarding-screen.component';
import { OptInComponent } from './opt-in/opt-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { StakeHolderSelectionComponent } from './stake-holder-selection/stake-holder-selection.component';
import { SupportPodComponent } from './support-pod/support-pod.component';
import { TermsAndServicesComponent } from './terms-and-services/terms-and-services.component';

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
  },
  {
    path : 'optin',
    component : OptInComponent
  },
  {
    path : 'aggrement/:id',
    component : TermsAndServicesComponent
  }, 
  {
    path : 'confirmation',
    component : ConfirmationScreenComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnBoardingRoutingModule { }
