import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/shared/service/api.service';
import { DataService } from 'src/app/shared/service/data.service';

@Component({
  selector: 'app-survey-screens',
  templateUrl: './survey-screens.component.html',
  styleUrls: ['./survey-screens.component.scss']
})
export class SurveyScreensComponent implements OnInit {

  // imageArray = ['../../../assets/images/Anxious Face.svg',
  // '../../../assets/images/AnxiousFace_white.svg'];
  
    imageArray=[
      ['../../../assets/images/Anxious Face.svg','../../../assets/images/AnxiousFace_white.svg'],
      ['../../../assets/images/Slightly Anxious Face.svg','../../../assets/images/SlightlyAnxiousFace_white.svg']]
  btn1=this.imageArray[0][0];
  btn2=this.imageArray[1][0];
  // image=this.imageArray[0];
  // image=this.imageArray[0];
  // image=this.imageArray[0];
  


  currentScreen: number = 0;

  questionsData : string | any = '';

  optionalText: any;

  constructor(
    private router : Router,
    private route : ActivatedRoute,
    private dataService : DataService,
    private apiService : ApiService,
  ) { 
    let currentStep = this.route.snapshot.params['id'];
    if(currentStep != undefined && parseInt(currentStep)){
      this.currentScreen = parseInt(currentStep);
    } else {
      this.router.navigate(["/dashboard"]);  
    }
  }

  ngOnInit(): void {

    this.apiService.getQuestions().subscribe(
      (res:any)=>{
        this.questionsData = res.data;
      }
    );
  }

  goBack(){
    this.router.navigate(["/dashboard"]);
  }

  goBackToFirst(){
    this.router.navigate(["/dashboard/survey/1"]);
  }

  goBackToSecond(){
    this.router.navigate(["/dashboard/survey/2"]);
  }

  goBackToThird(){
    this.router.navigate(["/dashboard/survey/3"]);
  }

  goBackToFourth(){
    this.router.navigate(["/dashboard/survey/4"]);
  }

  next(){
    this.currentScreen = this.currentScreen + 1;
    this.router.navigate(['/dashboard/survey/' + this.currentScreen]);
  }

  allDone(){
    this.router.navigate(["/dashboard/submitted"]);
  }

  selectAns(data:number){
  switch(data){
    case 1:{
      this.btn2=this.imageArray[1][0];

      if(this.btn1==this.imageArray[0][0]){
        this.btn1=this.imageArray[0][1]
      }else{
        this.btn1=this.imageArray[0][0]
      }
      break;
    }
    case 2:{
      this.btn1=this.imageArray[0][0];
      if(this.btn2==this.imageArray[1][0]){
        this.btn2=this.imageArray[1][1]
      }else{
        this.btn2=this.imageArray[1][0]
      }
      break;
    }
  }
    console.log(data);
    console.log(this.currentScreen);
    
  }

}
