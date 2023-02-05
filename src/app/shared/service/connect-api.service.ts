import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConnectApiService {
  constructor(private http: HttpClient) {}
  public getGlobalFeed(limit: number, offset: number) {
    return this.http.get(`articles?limit=${limit}&offset=${offset}`);
  }
}
