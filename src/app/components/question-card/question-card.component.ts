import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { UsersServiceService } from 'src/app/services/getUsers/users-service.service';
import { QuestionsService } from 'src/app/services/questionService/questions.service';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css'],
})

export class QuestionCardComponent implements OnInit {
  @ViewChild(MatSort) sort!: MatSort;
  num : number= 0 ;
  displayedColumns: string[] = ['Nom', 'Score'];
  dataSource = new MatTableDataSource<any>();
  public router: string;
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
    private scoreService: UsersServiceService,private _router: Router,private _liveAnnouncer: LiveAnnouncer){
      this.router = _router.url; 
  }

  ngOnInit(): void {
    this.userId = localStorage.key(0);
    this.newScore.id = this.userId;
    this.getQuestions();
    this.getranking();
  }

  getQuestions(): void {
    this.questionsService.getQuestions().subscribe((res) => {
      this.lnt = res.length * 10;
      for (let i = 0; i < res.length; i++) this.questionList[i] = res[i];
    });
  }

  getranking(){
    this.scoreService.getRanking().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
  })}

  updateScoref(score: number) {
    this.newScore.score = score;
    this.scoreService.updateScore(this.newScore);
    
    this.getranking();
  }

  answer(currentQno: number, option: any) {
    if (currentQno === this.questionList.length) {
      if(option){this.points += 10;}
      this.updateScoref(this.points);
      this.isQuizCompleted = true ;
      
    }
    if (option) {
      this.points += 10;
      this.correctAnswer++;
      setTimeout(() => {
        this.currentQuestion++;
      }, 1000);
    } else {
      setTimeout(() => {
        this.currentQuestion++;
        this.inCorrectAnswer++;
      }, 1000);
    }
  }
  nextQuestion() {
    this.currentQuestion++;
  }
  previousQuestion() {
    this.currentQuestion--;
  }
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
