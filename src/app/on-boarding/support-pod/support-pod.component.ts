import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-support-pod',
  templateUrl: './support-pod.component.html',
  styleUrls: ['./support-pod.component.scss']
})
export class SupportPodComponent implements OnInit {

  emailpattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$";
  alphaPattern = "[a-zA-Z][a-zA-Z ]+";
  mobilePattern = "^((\\+91-?)|0)?[0-9]{10}$";

  supportForm = new FormGroup({
    supportName : new FormControl('',[Validators.required,Validators.maxLength(10), this.noSpaceAllowed, Validators.pattern(this.alphaPattern)]),
    relation : new FormControl('',[Validators.required,Validators.maxLength(10), this.noSpaceAllowed, Validators.pattern(this.alphaPattern)]),
    email : new FormControl('',[Validators.required,Validators.pattern(this.emailpattern)]),
    mobileNo : new FormControl('',[Validators.required,Validators.pattern(this.mobilePattern)]),
  });

  constructor() { }

  ngOnInit(): void {
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


  noSpaceAllowed(control : FormControl){

    if(control.value != null && control.value.indexOf(' ') != -1){
      return {noSpaceAllowed : true}
    }

    return null;
  }

  submit(formData:any){
    let closeModal = document.getElementById('closeModal');
    closeModal?.click();
    console.log(this.supportForm);
  }

  addForm(){
    let formClose = document.getElementById('formClose');
    formClose?.click();
  }

}
