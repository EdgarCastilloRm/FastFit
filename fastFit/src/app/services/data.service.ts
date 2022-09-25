import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInfo } from '../models/basicUser';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(
    private http: HttpClient,
  ) {}

  //Users---------------------------------------------------------------------------------------------------------
  getAllUsers(): Observable<UserInfo[]> {
    return this.http.get<UserInfo[]>("http://localhost:4000/users/");
  }

  getUserData(data: any): Observable<UserInfo[]> {
    let params = new HttpParams();
    params = params.append('Email', data);
    return this.http.get<UserInfo[]>('http://localhost:4000/users/email/', {
      params: params,
    });
  }

  registerUser(body: any) {
    return this.http.post('http://localhost:4000/users', body);
  }
}
