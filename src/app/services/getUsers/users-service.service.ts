import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root',
})
export class UsersServiceService {
  usersUrl = 'http://192.168.123.70:5555/api/users/';
  private refrshValue = new Subject<any>() ;
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
  /**Refresh After update */
  refreshAfterUpdate(data: any) {
    this.refrshValue.next(data);
  }
}
