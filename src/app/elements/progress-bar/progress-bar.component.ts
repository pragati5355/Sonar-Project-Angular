import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  progress : any;

  myStyle = {
    'width' : this.dataService.progressWidth ? '25%' : '0%',
  }

  constructor(
    private dataService : DataService
  ) { }

  ngOnInit(): void {

    this.dataService.progress.subscribe(
      (res)=>{
        this.progress = res;
    });
  }

}
