import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { httpUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(data:any):Observable<any>{
    const headers ={
      'Content-Type': 'application/json'
    };
    return this.http.post(`${httpUrl}/auth`, data,{headers: headers});
  }
}
