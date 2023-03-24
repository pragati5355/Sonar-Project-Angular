import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pluse-check-screen',
  templateUrl: './pluse-check-screen.component.html',
  styleUrls: ['./pluse-check-screen.component.scss']
})
export class PluseCheckScreenComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  submit(){
    this.router.navigate(["/dashboard/survey/1"])
  }
}
