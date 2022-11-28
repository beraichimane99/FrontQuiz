import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css']
})

export class QuestionCardComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
 responses = ["rep1 ", "rep2", "rep3", "rep4"] ;
  verify(){
    console.log("test verify");
    
  }
}
