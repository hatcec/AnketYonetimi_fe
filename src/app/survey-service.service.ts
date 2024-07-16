import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SurveyServiceService {

  private baseUrl = 'http://localhost:8081/api/v1/survey';
  private baseUrl1 = 'http://localhost:8081/api/v1/question';

  constructor(private http: HttpClient) {}

  getQuestions(): Observable<any> {
    return this.http.get(`${this.baseUrl1}/get/all`);
  }

  addSurvey(surveyRequest: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`, surveyRequest);
  }
}