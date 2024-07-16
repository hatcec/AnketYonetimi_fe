import { Routes } from '@angular/router';
import { loginRoutes } from './auth/components/login/login.routes';
import { signupRoutes } from './auth/components/signup/signup.routes';
import { AddquestionComponent } from './addquestion/addquestion.component';
import { SurveycreateComponent } from './surveycreate/surveycreate.component';
import { SurveyDetailComponent } from './survey-detail/survey-detail.component';
import { SurveylistComponent } from './surveylist/surveylist.component';

export const routes: Routes = [
    ...loginRoutes,
    ...signupRoutes,
    {
      path: 'question', 
      component:AddquestionComponent
    },
    {
      path: 'createSurvey', 
      component:SurveycreateComponent
    },
    {
      path: 'participationSurvey', 
      component:SurveyDetailComponent
    },
    {
      path: 'surveys', 
      component:SurveylistComponent
    },
      {
        path: '',
        redirectTo:'/login', pathMatch:'full'
      },
];
