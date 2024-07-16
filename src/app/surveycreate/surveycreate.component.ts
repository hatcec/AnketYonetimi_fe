import { Component, OnInit } from '@angular/core';
import {  QuestionControllerService,  SurveyControllerService } from '../shared/services/api';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from '../button/button.component';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SurveyServiceService } from '../survey-service.service';
import { DemoAngularMaterailModule } from '../DemoAngularMaterialModule';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-surveycreate',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent,DemoAngularMaterailModule, ReactiveFormsModule],
  templateUrl: './surveycreate.component.html',
  styleUrl: './surveycreate.component.scss'
})
export class SurveycreateComponent implements OnInit {
  surveyForm!: FormGroup;
  questions: any[] = []; // Bu alanı mevcut sorularla doldurun.

  constructor(private fb: FormBuilder, private surveyService: SurveyServiceService,
    private questionService:QuestionControllerService
  ) {}

  ngOnInit() {
    this.surveyForm = this.fb.group({
      name: [''],
      questionIds: [[]]
    });

    // Mevcut soruları yükleyin (örneğin bir service çağrısı ile)
    this.loadQuestions();
  }

  loadQuestions() {
    // Service ile backend'den soruları çekin
    // Örneğin:
    this.questionService.getAllQuestion().subscribe(data => {
       this.questions = data;
     });
  }

  onQuestionChange(event: any, questionId: number) {
    const questionIds = this.surveyForm.get('questionIds')?.value as number[];
    if (event.target.checked) {
      questionIds.push(questionId);
    } else {
      const index = questionIds.indexOf(questionId);
      if (index > -1) {
        questionIds.splice(index, 1);
      }
    }
    this.surveyForm.get('questionIds')?.setValue(questionIds);
  }

  onSubmit() {
    if (this.surveyForm.valid) {
      this.surveyService.createSurvey(this.surveyForm.value).subscribe(response => {
        console.log('Survey created successfully', response);
      });
    }
  }
}