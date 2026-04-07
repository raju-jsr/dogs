import { Routes } from '@angular/router';
import { Dogs } from './dogs/dogs';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: 'dogs',
  },
  {
    path: 'dogs',
    component: Dogs,
  },
];
