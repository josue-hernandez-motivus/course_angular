import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'by-capital',
    component: ByCapitalPageComponent
  },
  {
    path: 'country',
    loadChildren: () => import('./country/country.routes')
  },
  {
    path: '**',
    redirectTo: ''
  }

];
