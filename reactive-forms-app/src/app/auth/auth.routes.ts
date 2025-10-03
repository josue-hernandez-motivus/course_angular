import { Routes } from '@angular/router';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

export const authRoutes: Routes = [
  {
    path:'',
    children:[
      {
        path:'signup',
        component: RegisterPageComponent
      },
      {
        path:'**',
        redirectTo:'signup'
      }
    ]
  }

]

export default authRoutes;
