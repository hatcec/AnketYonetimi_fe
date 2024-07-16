import { Component, OnInit } from '@angular/core';
import {  QuestionControllerService,  SurveyControllerService } from '../shared/services/api';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from '../button/button.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
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
  selections = new FormControl();
  nameControl = new FormControl();
  options: any[] = [];

  constructor(private http: HttpClient, private surveyService:SurveyServiceService) {}

  ngOnInit() {
    // Dropdown list için verileri backend'den çekmek
    this.surveyService.getQuestions().subscribe(data => {
      this.options = data;
    });
  }

  saveSelections() {
    // Seçilen verileri ve ismi backend'e göndermek
    const selectedOptions = this.selections.value;
    const name = this.nameControl.value;
    const payload = {
      name: name,
      selections: selectedOptions
    };
    this.surveyService.addSurvey( payload).subscribe(response => {
      console.log('Veriler kaydedildi:', response);
      
    });
  }
}