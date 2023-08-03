import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Historical } from '../interfaces/historical';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApraService {
  baseURL: string ='https://flowkai.pythonanywhere.com';
  

  constructor(private http: HttpClient) { }

  getHistorical(): Observable<Historical>{   
    return this.http.get<Historical>(this.baseURL+'/apra/historical')    
  }

  getMonthly(): Observable<Historical>{   
    return this.http.get<Historical>(this.baseURL+'/monthly')    
  }


  /* postAnser(answer:Answer[]): Observable<any>{   
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(answer);
    console.log(body);
    return this.http.post(this.baseURL,body,{'headers':headers})
  } */
}
