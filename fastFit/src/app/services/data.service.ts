import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { garmentIMG, outfitIMG, UserInfo } from '../models/basicUser';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  sharedData: outfitIMG[] = []

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

  //Garments---------------------------------------------------------------------------------------------------------
  getGarmentIMG(user_ID: number, garment_category: string): Observable<garmentIMG[]> {
    let params = new HttpParams();
    params = params.append('user_ID', user_ID);
    params = params.append('garment_category', garment_category);
    return this.http.get<garmentIMG[]>('http://localhost:4000/garments/', {
      params: params,
    });
  }

    //Outfits---------------------------------------------------------------------------------------------------------
    getOutfitIMG(user_ID: number, formality: number, weather: number): Observable<outfitIMG[]> {
      let params = new HttpParams();
      params = params.append('user_ID', user_ID);
      params = params.append('formality', formality);
      params = params.append('weather', weather);
      return this.http.get<outfitIMG[]>('http://localhost:4000/outfits/', {
        params: params,
      });
    }

    putFav(outfit_ID: number):any{
      let params = new HttpParams();
      params = params.append('outfit_ID', outfit_ID);
      return this.http.put('http://localhost:4000/outfits/favs/', {
        params: params,
      });
    }
}
