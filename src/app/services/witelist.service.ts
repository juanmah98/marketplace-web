import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Witelist } from '../interfaces/witelst';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WitelistService {

  baseURL: string ='https://flowkai.pythonanywhere.com/waitlist';
  

  constructor(private http: HttpClient) { }

  getWaitlist(): Observable<Witelist>{   
    return this.http.get<Witelist>(this.baseURL+'/enroled')    
  }

  postNewPerson(wlist: Witelist): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    return this.http.post(this.baseURL + '/join', wlist, { headers: headers });
  }


}
