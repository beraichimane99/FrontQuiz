import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {
  usersUrl = 'http://192.168.3.97:5555/api/users/ranking';
  constructor(private http: HttpClient) { }

  getRanking():Observable<any>{
    return this.http.get<any>(this.usersUrl)
  }
  

}
