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
  authUrl = 'http://192.168.195.70:5555/api/users/signup';
  constructor(private http: HttpClient,private localStorage : LocalStorageServiceService ) { 
    
  }
  addUserf(user: User) {
    return this.http.post<any>(this.authUrl,user).subscribe((res) => {
      localStorage.setItem(res.id,res.token);
      console.log(localStorage);

  })
    console.log(user.name);
  }
}
