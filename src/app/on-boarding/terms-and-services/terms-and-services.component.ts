import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/shared/service/api.service';
import { LocalService } from 'src/app/shared/service/local.service';

@Component({
  selector: 'app-terms-and-services',
  templateUrl: './terms-and-services.component.html',
  styleUrls: ['./terms-and-services.component.scss']
})
export class TermsAndServicesComponent implements OnInit {

  currentScreen: number = 0;


  constructor(
    private router : Router,
    private route : ActivatedRoute,
    private apiService : ApiService,
    private localService : LocalService
  ) { 
    let currentStep = this.route.snapshot.params['id'];
    if(currentStep != undefined && parseInt(currentStep)){
      this.currentScreen = parseInt(currentStep);
    } else {
    this.router.navigate(["onboarding/optin"]);  
    }
  }

  ngOnInit(): void {
  }

  accept(){
    this.currentScreen = this.currentScreen + 1;
    this.router.navigate(['/onboarding/aggrement/' + this.currentScreen]);
  }

  acceptPolicy(){
    this.router.navigate(['/onboarding/confirmation']);
  }

  decline(){
    this.apiService.deleteUser().subscribe();
    this.localService.removeData();
    this.localService.clearData();
    this.router.navigate(['/onboarding/signup']);
  }
}
