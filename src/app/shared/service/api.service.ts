import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocalService } from './local.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = environment.baseUrl;

  constructor(
    private http : HttpClient,
    private localService : LocalService,
  ) { }

  postRegister(data:any) : Observable<any> {
    return this.http.post(this.baseUrl + '/auth/signup',data);
  }

  getRelationship() : Observable<any> {
    return this.http.get(this.baseUrl + '/support/relationships', {
      headers : {
        "Authorization" : "Bearer " + this.localService.getData()
      }
    });
  }

  postAddSupport(data:any) : Observable<any> {
    return this.http.post(this.baseUrl + '/support/add' ,data, {
      headers : {
        "Authorization" : "Bearer " + this.localService.getData()
      }
    });
  }

  getListSupports() : Observable<any> {
    return this.http.get(this.baseUrl + '/support/supports', {
      headers : {
        "Authorization" : "Bearer " + this.localService.getData()
      }
    });
  }

  deleteUser() : Observable<any> {
    return this.http.delete(this.baseUrl + '/user/delete', {
      headers : {
        "Authorization" : "Bearer " + this.localService.getData()
      }
    });
  }

  getQuestions() : Observable<any> {
    return this.http.get(this.baseUrl + '/onboarding/questions' , {
      headers : {
        "Authorization" : "Bearer " + this.localService.getData()
      }
    });
  }
}
