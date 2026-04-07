import { Routes } from '@angular/router';
import { Dogs } from './dogs/dogs';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list',
  },
  {
    path: 'list',
    component: Dogs,
  },
  {
    path: '**',
    redirectTo: 'list',
  },
];
