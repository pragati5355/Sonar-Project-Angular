import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-on-boarding-screen',
  templateUrl: './on-boarding-screen.component.html',
  styleUrls: ['./on-boarding-screen.component.scss']
})
export class OnBoardingScreenComponent implements OnInit, OnChanges {

  currentScreen: number = 0;

  constructor(
    private router : Router,
    private route : ActivatedRoute
  ) { 

    let currentStep = this.route.snapshot.params['id'];
    if(currentStep != undefined && parseInt(currentStep)){
      this.currentScreen = parseInt(currentStep);
    } else {
    this.router.navigate(["onboarding/select"]);  
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.currentScreen);
  }


  ngOnInit(): void {
   
  }

  submit(){
    this.currentScreen = this.currentScreen + 1;
    this.router.navigateByUrl('/onboarding/step/' + this.currentScreen);
  }

  started(){
    this.router.navigate(["/onboarding/support"]);
  }

  skip(){
    this.router.navigate(["/onboarding/support"])
  }
}
