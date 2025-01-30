import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TimeServiceService {
  constructor(private http: HttpClient) { }
  url = 'https://timeapi.io/api/time/current/zone?timeZone=Asia%2FKuala_Lumpur';
  
  getTime() {
    return this.http.get(this.url);
  }
}
