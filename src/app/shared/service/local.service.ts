import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }

  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }
  
  public getData(){
    return localStorage.getItem("user")
  }

  public removeData() {
    localStorage.removeItem("user");
  }
  public clearData() {
    localStorage.clear();
  }
  
}
