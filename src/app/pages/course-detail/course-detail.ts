// src/app/pages/course-detail/course-detail.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../../core/models/course.model';
import { CoursesService } from '../../core/services/courses';
import { RequirementsSectionComponent } from './sections/requirements-section/requirements-section';
import { CurriculumSectionComponent } from './sections/curriculum-section/curriculum-section';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [
    CommonModule, 
    RequirementsSectionComponent,
    CurriculumSectionComponent
  ],
  templateUrl: './course-detail.html'
})
export class CourseDetailComponent implements OnInit {
  course?: Course;

  whatYouLearn = [
    'أساسيات HTML و CSS',
    'JavaScript المتقدم',
    'التعامل مع React',
    'بناء مشاريع حقيقية',
    'نشر المواقع على الإنترنت'
  ];

  requirements = [
    'لا حاجة لخبرة سابقة في التسويق',
    'جهاز كمبيوتر مع اتصال بالإنترنت',
    'الرغبة في التعلم والتطبيق العملي',
    'حساب على وسائل التواصل الاجتماعي (اختياري)'
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private coursesService: CoursesService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.course = this.coursesService.getCourseById(id);
    
    if (!this.course) {
      this.router.navigate(['/not-found']);
    }
  }
}