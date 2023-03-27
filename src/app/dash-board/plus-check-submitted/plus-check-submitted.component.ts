import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plus-check-submitted',
  templateUrl: './plus-check-submitted.component.html',
  styleUrls: ['./plus-check-submitted.component.scss']
})
export class PlusCheckSubmittedComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  backToDashborad(){
    this.router.navigate(["/dashboard"]);
  }

}
