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
    let header = new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST',
      'Content-Type':'application/json'
    });
    return this.http.post(`${httpUrl}/auth`, JSON.stringify(data),{headers: header});
  }
}
