import { Routes } from '@angular/router';
import { Dogs } from './dogs/dogs';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: 'list',
  },
  {
    path: 'list',
    component: Dogs,
  },
];
