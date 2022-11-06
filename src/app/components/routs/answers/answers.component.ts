import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/interfaces/Question';

import { ValidateService } from 'src/app/services/validate.service';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {

  question: Question[] = [];
  constructor(private _AnswersService : ValidateService) { } 

  ngOnInit(): void {
    this.getAnswersAll();
    console.log('estamos en el componente answers');
  }

  getAnswersAll(){
    this._AnswersService.getAnswers().subscribe({
      next: (data: any) => {
        console.log("Response");
        console.log(data);
        this.question=data;
      },
      error: (err:any) => {
        console.log('Error de peticion');
        console.log(err);
      },
      complete: () => {
        console.log('La peticion termino')
      }
      
    })
  }

  postAnswer(){
   var answer = {
      "userId":145,
      "questionId":2,
      "answer":{
          "additionalComents": "",
          "answerDescription": "please enter your answer",
          "answerGroup": "user entry",
          "answerGroupDisplay": "null",
          "answerName": "user entry string",
          "answerOptionId": 1,
          "answerType": "user entry string",
          "sysActive": 1
      }
  }

  this._AnswersService.postAnser(answer)
      .subscribe(data => {
        console.log(data)        
      })      
  
  }

}
