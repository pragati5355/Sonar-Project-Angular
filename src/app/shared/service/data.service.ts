import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  progress = new Subject();
  progressWidth = new BehaviorSubject<boolean>(false);
  addUserDetails = new BehaviorSubject<boolean>(false);

  constructor() { }
}
