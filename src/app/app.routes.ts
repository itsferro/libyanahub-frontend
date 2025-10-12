import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home').then(m => m.HomeComponent)
      },
      {
        path: 'courses',
        loadComponent: () => import('./pages/courses/courses').then(m => m.CoursesComponent)
      },
      {
        path: 'course/:id',
        loadComponent: () => import('./pages/course-detail/course-detail').then(m => m.CourseDetailComponent)
      },
      {
        path: 'creator/:id',
        loadComponent: () => import('./pages/creator-profile/creator-profile').then(m => m.CreatorProfileComponent)
      },
      {
        path: '**',
        loadComponent: () => import('./pages/not-found/not-found').then(m => m.NotFoundComponent)
      }
    ]
  }
];