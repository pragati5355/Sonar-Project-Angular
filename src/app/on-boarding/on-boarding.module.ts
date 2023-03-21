import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnBoardingRoutingModule } from './on-boarding-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ElementsModule } from '../elements/elements.module';
import { RouterModule } from '@angular/router';

import { StakeHolderSelectionComponent } from './stake-holder-selection/stake-holder-selection.component';
import { OnBoardingScreenComponent } from './on-boarding-screen/on-boarding-screen.component';
import { SupportPodComponent } from './support-pod/support-pod.component';
import { OptInComponent } from './opt-in/opt-in.component';
import { TermsAndServicesComponent } from './terms-and-services/terms-and-services.component';
import { ConfirmationScreenComponent } from './confirmation-screen/confirmation-screen.component';

@NgModule({
  declarations: [
    SignUpComponent,
    StakeHolderSelectionComponent,
    OnBoardingScreenComponent,
    SupportPodComponent,
    OptInComponent,
    TermsAndServicesComponent,
    ConfirmationScreenComponent
  ],
  imports: [
    CommonModule,
    OnBoardingRoutingModule,
    ElementsModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
  ]
})
export class OnBoardingModule { }
