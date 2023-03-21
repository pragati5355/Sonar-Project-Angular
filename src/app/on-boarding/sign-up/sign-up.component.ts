import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/service/api.service';
import { LocalService } from 'src/app/shared/service/local.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit , OnDestroy{

  emailpattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$";
  alphaPattern = "[a-zA-Z][a-zA-Z ]+";
  mobilePattern = "^((\\+91-?)|0)?[0-9]{10}$";
  passwordpattern = '(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:{\\}\\[\\]\\|\\+\\-\\=\\_\\)\\(\\)\\`\\/\\\\\\]])[A-Za-z0-9d$@].{7,}';

  data = {
    firstName : "",
    lastName : "",
    email : "",
    password : "",
    mobileNo : ""
  }

  getSubscription !: Subscription;

  registerForm = new FormGroup({
    firstName : new FormControl('',[Validators.required,Validators.maxLength(10), this.noSpaceAllowed, Validators.pattern(this.alphaPattern)]),
    lastName : new FormControl('',[Validators.required,Validators.maxLength(10), this.noSpaceAllowed, Validators.pattern(this.alphaPattern)]),
    email : new FormControl('',[Validators.required,Validators.pattern(this.emailpattern)]),
    mobileNo : new FormControl('',[Validators.required,Validators.pattern(this.mobilePattern)]),
    password : new FormControl('',[Validators.required,Validators.pattern(this.passwordpattern)])
  });

  constructor(
    private router : Router,
    private route : ActivatedRoute,
    private apiService : ApiService,
    private localService : LocalService,
  ) {
    
   }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
  }

  get form()
  {
    return this.registerForm.controls;
  }

  get firstName() {
    return this.registerForm.get('firstName');
  }

  get lastName() {
    return this.registerForm.get('lastName');
  }

  get mobileNo() {
    return this.registerForm.get('mobileNo');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  noSpaceAllowed(control : FormControl){

    if(control.value != null && control.value.indexOf(' ') != -1){
      return {noSpaceAllowed : true}
    }

    return null;
  }

  submit(formData:any){
    console.log(this.registerForm);
    this.data.firstName = formData.firstName,
    this.data.lastName = formData.lastName,
    this.data.mobileNo = formData.mobileNo,
    this.data.email = formData.email,
    this.data.password = formData.password,
    this.apiService.postRegister(this.data).subscribe(
      (res:any)=>{
        console.log(res.data.authToken);
        this.localService.saveData("user",res.data.authToken.token);
      }
    );
    this.router.navigate(["/onboarding/select"]);
  }


}
