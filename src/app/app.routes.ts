import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout.component/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home.component/home.component').then(m => m.HomeComponent)
      },
      {
        path: 'courses',
        loadComponent: () => import('./pages/courses.component/courses.component').then(m => m.CoursesComponent)
      }
    ]
  }
];