import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from '../../models/User';
import { LocalStorageServiceService } from '../localStorageService/local-storage-service.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  authUrl = 'http://192.168.123.70:5555/api/users/';
  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageServiceService
  ) {}
  /** Add user in database with
   * name , email , password
   */
  addUserf(user: User) {
    return this.http
      .post<any>(this.authUrl + 'signup', user)
      .subscribe((res) => {
        localStorage.setItem(res.id, res.token);
        // console.log(localStorage);
      });
  }

  authentification(user: User) {
    return this.http.post<any>(
      this.authUrl + 'login',
      user
    ); /*.subscribe((res) => {
      localStorage.setItem(res.id,res.token);
      if (res) this.router.navigate(['/home']);
     console.log(res);
  })*/
  }
}
