import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from '../models/User';
import { LocalStorageServiceService } from './local-storage-service.service';

@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {
  addUrl = 'http://192.168.0.104:5555/api/users/signup';
  authUrl = 'http://192.168.0.104:5555/api/users/login';

  constructor(private http: HttpClient,private localStorage : LocalStorageServiceService ) { 
    
  }
  /** Add user in database with 
   * name , email , password
   */
  addUserf(user: User) {
    return this.http.post<any>(this.addUrl,user).subscribe((res) => {
      localStorage.setItem(res.id,res.token);
     // console.log(localStorage);
  })}

  authentification(user: User){
    return this.http.post<any>(this.authUrl,user).subscribe((res) => {
      localStorage.setItem(res.id,res.token);
     // console.log(localStorage);
  })
  }

}
