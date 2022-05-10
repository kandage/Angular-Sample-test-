import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url =environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  public createUser(name: string, email: string, password: string):
    Observable<any> {
    return this.http.post(this.url+'user/create', {
      name,
      email,
      password,
    });
  }
}
