import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/question';
import { UsersServiceService } from 'src/app/services/getUsers/users-service.service';
import { LocalStorageServiceService } from 'src/app/services/localStorageService/local-storage-service.service';
import { QuestionsService } from 'src/app/services/questionService/questions.service';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css'],
})
export class QuestionCardComponent implements OnInit {
  public userId: any;
  public lnt: number = 0;
  public questionList: any = [];
  public currentQuestion: number = 0;
  public points: number = 0;
  counter = 60;
  correctAnswer: number = 0;
  inCorrectAnswer: number = 0;
  interval$: any;
  progress: string = '0';
  isQuizCompleted: boolean = false;
  newScore: any = {
    id: '',
    score: '',
  };
  constructor(
    private questionsService: QuestionsService,
    private scoreService: UsersServiceService
  ) {}

  ngOnInit(): void {
    console.log(localStorage.key(0));
    this.userId = localStorage.key(0);
    this.newScore.id = this.userId;
    this.getQuestions();
  }
  getQuestions(): void {
    this.questionsService.getQuestions().subscribe((res) => {
      this.lnt = res.length * 10;
      for (let i = 0; i < res.length; i++) this.questionList[i] = res[i];
    });
  }
  updateScoref(score: number) {
    this.newScore.score = score;
    this.scoreService.updateScore(this.newScore);
  }
  answer(currentQno: number, option: any) {
    if (currentQno === this.questionList.length) {
      this.updateScoref(this.points);
      this.isQuizCompleted = true;
      console.log(this.newScore);

      //fct post score and refresh table classement
      //  this.stopCounter();
    }
    if (option) {
      this.points += 10;
      this.correctAnswer++;
      setTimeout(() => {
        this.currentQuestion++;
        //  this.resetCounter();
        //  this.getProgressPercent();
      }, 1000);
    } else {
      setTimeout(() => {
        this.currentQuestion++;
        this.inCorrectAnswer++;
        //   this.resetCounter();
        //   this.getProgressPercent();
      }, 1000);
    }
  }
  nextQuestion() {
    this.currentQuestion++;
  }
  previousQuestion() {
    this.currentQuestion--;
  }
}
