// src/app/pages/course-detail/course-detail.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../../core/models/course.model';
import { CoursesService } from '../../core/services/courses';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-detail.html'  // ✅ Fixed: removed .component
})
export class CourseDetailComponent implements OnInit {
  course?: Course;
  curriculum = [
    {
      title: 'المقدمة',
      lessons: ['نظرة عامة', 'إعداد بيئة العمل', 'أول موقع لك'],
      duration: '2 ساعة'
    },
    {
      title: 'HTML و CSS',
      lessons: ['أساسيات HTML', 'تنسيق CSS', 'Flexbox و Grid'],
      duration: '4 ساعات'
    },
    {
      title: 'JavaScript',
      lessons: ['المتغيرات والدوال', 'DOM Manipulation', 'ES6+'],
      duration: '6 ساعات'
    }
  ];

  whatYouLearn = [
    'أساسيات HTML و CSS',
    'JavaScript المتقدم',
    'التعامل مع React',
    'بناء مشاريع حقيقية',
    'نشر المواقع على الإنترنت'
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