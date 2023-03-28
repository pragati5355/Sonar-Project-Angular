import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/service/api.service';
import { DataService } from 'src/app/shared/service/data.service';

@Component({
  selector: 'app-pluse-check-screen',
  templateUrl: './pluse-check-screen.component.html',
  styleUrls: ['./pluse-check-screen.component.scss']
})
export class PluseCheckScreenComponent implements OnInit {

  dataQuestion : string | any = '';

  constructor(
    private router : Router,
    private apiService : ApiService,
    private dataService : DataService
  ) { }

  ngOnInit(): void {
  }

  submit(){
    this.router.navigate(["/dashboard/survey/1"]);
  }
}
