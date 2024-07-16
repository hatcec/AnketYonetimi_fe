import { Component, OnInit } from '@angular/core';
import { ParticipationControllerService, QuestionControllerService, SurveyControllerService, SurveyRequest, SurveyResponse } from '../shared/services/api';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-surveylist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './surveylist.component.html',
  styleUrl: './surveylist.component.scss'
})
export class SurveylistComponent implements OnInit {

    surveys: SurveyResponse[] = [];
  
    constructor(private surveyService: SurveyControllerService, private router: Router) {}
  
    ngOnInit() {
      this.loadSurveys();
    }
  
    loadSurveys() {
      this.surveyService.getAllSurvey().subscribe(data => {
        this.surveys = data;
      });
    }
  
    participate(surveyId: number) {
      this.router.navigate(['/participationSurvey', surveyId]);
    }
  }