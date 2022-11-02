import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sing',
  templateUrl: './sing.component.html',
  styleUrls: ['./sing.component.css']
})
export class SingComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

  arry = 
    {
      "userId":132,
      "questionId":85,
      "answer":{
        "additionalComents":"",
        "answerDescription": "please enter your answer",
        "answerGropu": "user entry",
        "answerGropuDisplay": "null",
        "answerName": "user entry string",
        "answerOptionId": 1,
        "answerType": "user entry string",
        "id":1,
        "sysActive":1,
      }
    }
  

}
