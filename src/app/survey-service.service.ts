import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SurveyServiceService {

  private apiUrl = 'http://localhost:8081/api/v1/survey';

  constructor(private http: HttpClient) { }

  createSurvey(surveyData: any): Observable<any> {
    return this.http.post(this.apiUrl, surveyData);
  }
}