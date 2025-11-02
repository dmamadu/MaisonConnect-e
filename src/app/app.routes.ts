import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage),
  },
  {
    path: 'iphone',
    loadComponent: () => import('./pages/iphone/iphone.page').then(m => m.IphonePage),
  },
  {
    path: 'mac',
    loadComponent: () => import('./pages/mac/mac.page').then(m => m.MacPage),
  },
  { path: '**', redirectTo: '' },
];
