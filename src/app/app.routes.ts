import { Routes } from '@angular/router';
import { loginRoutes } from './auth/components/login/login.routes';
import { signupRoutes } from './auth/components/signup/signup.routes';
import { AddquestionComponent } from './addquestion/addquestion.component';
import { SurveycreateComponent } from './surveycreate/surveycreate.component';

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
        path: '',
        redirectTo:'/login', pathMatch:'full'
      },
];
