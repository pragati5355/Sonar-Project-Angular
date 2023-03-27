import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/service/api.service';
import { DataService } from 'src/app/shared/service/data.service';
@Component({
  selector: 'app-support-pod',
  templateUrl: './support-pod.component.html',
  styleUrls: ['./support-pod.component.scss']
})
export class SupportPodComponent implements OnInit {

  relationship : string | any = [""];
  getSubscription !: Subscription;

  userData: any = [];

  data = {
    name : "",
    relationShip : "",
    email : "",
    phoneNumber : "",
  }

  emailpattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$";
  alphaPattern = "[a-zA-Z][a-zA-Z ]+";
  mobilePattern = "^((\\+91-?)|0)?[0-9]{10}$";

  supportForm = new FormGroup({
    supportName : new FormControl('',[Validators.required,Validators.maxLength(10), this.noSpaceAllowed, Validators.pattern(this.alphaPattern)]),
    relation : new FormControl('',[Validators.required,Validators.maxLength(10), this.noSpaceAllowed, Validators.pattern(this.alphaPattern)]),
    email : new FormControl('',[Validators.required,Validators.pattern(this.emailpattern)]),
    mobileNo : new FormControl('',[Validators.required,Validators.pattern(this.mobilePattern)]),
    checkBox : new FormControl()
  });

  constructor(
    private router : Router,
    private apiService : ApiService,
    private dataService : DataService
  ) { }

  ngOnInit(): void {

    this.getSubscription = this.apiService.getRelationship().subscribe(
      (res:any) => {
        this.relationship = res.data;
      },
      (err:any)=> {
        console.error(err);
      }
    );

  }

  get form()
  {
    return this.supportForm.controls;
  }

  get supportName() {
    return this.supportForm.get('supportName');
  }

  get relation() {
    return this.supportForm.get('relation');
  }

  get mobileNo() {
    return this.supportForm.get('mobileNo');
  }

  get email() {
    return this.supportForm.get('email');
  }

  get checkBox() {
    return this.supportForm.get('checkBox');
  }


  noSpaceAllowed(control : FormControl){

    if(control.value != null && control.value.indexOf(' ') != -1){
      return {noSpaceAllowed : true}
    }

    return null;
  }

  submit(formData:any){
    let closeModal = document.getElementById('closeModal');
    closeModal?.click();

    this.data.name = formData.supportName;
    this.data.relationShip = formData.relation;
    this.data.email = formData.email;
    this.data.phoneNumber = formData.mobileNo;
    this.apiService.postAddSupport(this.data).subscribe();
    this.supportForm.reset();
  }

  addForm(){
    let closeSucess = document.getElementById('closeSucess');
    closeSucess?.click();
  }

  addDetails(){
    this.dataService.addUserDetails.next(true);
  }

  next(){
    this.router.navigate(['/onboarding/optin']);
  }

}
