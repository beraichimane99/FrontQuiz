import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  questionsUrl = 'http://192.168.3.101:5555/api/quiz/questions';
  constructor(private http: HttpClient) {}
  getQuestions(): Observable<any> {
    return this.http.get<any>(this.questionsUrl);
  }
}
