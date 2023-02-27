import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'posts',
        loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'gallery',
        loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
      }
    ]
  }
];
