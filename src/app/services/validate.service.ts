import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Answer } from '../interfaces/Answer';
import { Question } from '../interfaces/Question';


@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  baseURL: string ='https://thedevarg.pythonanywhere.com/profile/verification';

  constructor(private http: HttpClient) { }

  getAnswers(): Observable<Question>{   
    return this.http.get<Question>(this.baseURL)    
  }

  postAnser(answer:Answer[]): Observable<any>{   
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(answer);
    console.log(body);
    return this.http.post(this.baseURL,body,{'headers':headers})
  }
}
