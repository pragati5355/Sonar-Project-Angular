import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stake-holder-selection',
  templateUrl: './stake-holder-selection.component.html',
  styleUrls: ['./stake-holder-selection.component.scss']
})
export class StakeHolderSelectionComponent implements OnInit {

  selectedMember = '';

  constructor(
    private router : Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  onSelected(value:string):void {
    this.selectedMember = value;
    console.log(value);
    this.router.navigate(["/onboarding/step/1"]);
  }

}
