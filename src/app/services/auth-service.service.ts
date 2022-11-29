import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {
  authUrl = 'http://192.168.195.70:5555/api/users/signup';
  constructor(private http: HttpClient) { 
    
  }
  addUserf(user: User) {
    return this.http.post<User>(this.authUrl,user).subscribe(data => {
      user = data ;
  })
    console.log(user.name);
  }
}
