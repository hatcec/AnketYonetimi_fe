import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DemoAngularMaterailModule } from '../DemoAngularMaterialModule';
import { AddQuestionRequestParams, QuestionControllerService } from '../shared/services/api';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-addquestion',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,DemoAngularMaterailModule, ButtonComponent],
  templateUrl: './addquestion.component.html',
  styleUrl: './addquestion.component.scss'
})
export class AddquestionComponent implements OnInit{
  form!: FormGroup;
  formMessage: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private questionService: QuestionControllerService,
    private change: ChangeDetectorRef,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      questionText: ['', [Validators.required]],
      //surveyId: ['', [Validators.required]],
    });
  }

  add() {
    const request: AddQuestionRequestParams = {
      questionRequest: {
        questionText: this.form.value.questionText,
       // surveyId: this.form.value.surveyId,
      },
    };

    this.questionService.addQuestion(request).subscribe({
      // Next: Observable'dan gelen veriyi yakaladığımız fonksiyon
      next: (response) => {
        console.log(response);
      },
      // Error: Observable'dan gelen hatayı yakaladığımız fonksiyon
      error: (error) => {
        this.formMessage = error.errorMessage;
        this.change.markForCheck();
      },
      // Complete: Observable'dan gelen veri akışının tamamladığını bildiren fonksiyon, eğer complete çalışırsa observable'dan gelen veri akışı sona erer.
      complete: () => {
        
          this.snackBar.open('Question Added Successfully', 'Close', { duration: 5000 });
  
          this.router.navigateByUrl('')
      
        this.form.reset();
        this.change.markForCheck();

        // setTimeout(() => {
        //   this.router.navigate(['/management', 'brands']);
        // }, 2000);
      },
    });
  }

  onFormSubmit() {
    if (this.form.invalid) {
      this.snackBar.open( 'Please fill all required fields' ,'Close',{duration:5000});
      return;
    }

    this.add();
  }
}