import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opt-in',
  templateUrl: './opt-in.component.html',
  styleUrls: ['./opt-in.component.scss']
})
export class OptInComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  optIn(){
    this.router.navigate(['onboarding/aggrement/service']);
  }

}
