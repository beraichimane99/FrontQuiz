import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class UsersServiceService {
  usersUrl = 'http://192.168.3.101:5555/api/users/';
  constructor(private http: HttpClient) {}

  getRanking(): Observable<any> {
    return this.http.get<any>(this.usersUrl + 'ranking');
  }
  /**Update score */
  updateScore(score: any) {
    return this.http
      .post<any>(this.usersUrl + 'score', score)
      .subscribe((res) => {
        console.log(res);
      });
  }
}
