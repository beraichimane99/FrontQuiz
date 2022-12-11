import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/question';
import { QuestionsService } from 'src/app/services/questionService/questions.service';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css']
})

export class QuestionCardComponent implements OnInit {
  
  public lnt: number = 0;
  public questionList: any = [];
  public currentQuestion: number = 0;
  public points: number = 0;
  counter = 60;
  correctAnswer: number = 0;
  inCorrectAnswer: number = 0;
  interval$: any;
  progress: string = "0";
  isQuizCompleted : boolean = false;
  constructor(private questionsService : QuestionsService) { }

  ngOnInit(): void {
    this.getQuestions();
    
  }
  getQuestions(): void {
    this.questionsService.getQuestions().subscribe(res => {
      this.lnt=res.length*10;
      for(let i = 0; i < res.length;i++)
      this.questionList[i] = res[i];
    })
  }
  answer(currentQno: number, option: any) {

    if(currentQno === this.questionList.length){
      this.isQuizCompleted = true;
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
