import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/service/api.service';
import { DataService } from 'src/app/shared/service/data.service';

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.scss']
})
export class AddDetailsComponent implements OnInit {

  @Input() userDetail :string | any = '';

  isChecked : boolean |any;

  constructor(
    private dataService : DataService,
  ) { }

  ngOnInit(): void {
    console.log("userDetail",this.userDetail)
    this.dataService.addUserDetails.subscribe(
      (res)=>{
        console.log(res);
        this.isChecked = res;
      }
    );

  }

}
