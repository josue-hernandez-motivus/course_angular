import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page';
import { HeroPageComponent } from './pages/hero/hero-page';
import { DragonBallPageComponent } from './pages/dragon-ball/dragon-ball-page';

export const routes: Routes = [
  {
    path: '',
    component: CounterPageComponent
  },
  {
    path: 'hero',
    component: HeroPageComponent
  },
  {
    path: 'dragon-ball',
    component: DragonBallPageComponent
  },
  { path: '**', redirectTo: '', }
];
