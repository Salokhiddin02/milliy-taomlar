import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: Home }, // Asosiy sahifa
  { 
    path: 'taomlar', 
    loadComponent: () => import('./taomlar/taomlar')
      .then(m => m.Taomlar) 
  },
  { 
    path: 'retsept/:id', 
    loadComponent: () => import('./retsept/retsept')
      .then(m => m.Retsept) 
  },
  { 
    path: 'biz-haqimizda', 
    loadComponent: () => import('./biz-haqimizda/biz-haqimizda')
      .then(m => m.BizHaqimizda),
    children: [
      {
        path: '',
        loadComponent: () => import('./biz-haqimizda/biz-haqimizda-content')
          .then(m => m.BizHaqimizdaContent)
      },
      {
        path: 'aloqa',
        loadComponent: () => import('./aloqa/aloqa')
          .then(m => m.Aloqa)
      }
    ]
  },
  { 
    path: 'global-taomlar', 
    loadComponent: () => import('./global-taomlar/global-taomlar')
      .then(m => m.GlobalTaomlarComponent) 
  },
  { 
    path: 'professional-maslahatlar', 
    loadComponent: () => import('./professional-tips/professional-tips')
      .then(m => m.ProfessionalTips) 
  },
  // noto'g'ri yo'l kiritilsa, bosh sahifaga yo'naltiramiz
  { path: '**', redirectTo: '' } 
];
