// src/app/pages/creator-profile/creator-profile.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Creator } from '../../core/models/creator.model';
import { Course } from '../../core/models/course.model';
import { CreatorsService } from '../../core/services/creators';
import { CoursesService } from '../../core/services/courses';

@Component({
  selector: 'app-creator-profile',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './creator-profile.html'  // ✅ Fixed: removed .component
})
export class CreatorProfileComponent implements OnInit {
  creator?: Creator;
  courses: Course[] = [];
  
  reviews = [
    {
      id: 1,
      studentName: 'محمد الشريف',
      avatar: '👨‍💼',
      rating: 5,
      date: 'منذ أسبوع',
      comment: 'مدرب ممتاز! شرحه واضح ومبسط. استفدت كثيراً من دوراته'
    },
    {
      id: 2,
      studentName: 'فاطمة العبيدي',
      avatar: '👩‍💻',
      rating: 5,
      date: 'منذ أسبوعين',
      comment: 'أفضل مدرب في مجال التسويق الرقمي. المحتوى عملي وسهل التطبيق'
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private creatorsService: CreatorsService,
    private coursesService: CoursesService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.creator = this.creatorsService.getCreatorById(id);
    
    if (!this.creator) {
      this.router.navigate(['/not-found']);
      return;
    }
    
    this.courses = this.coursesService.getCoursesByInstructor(id);
  }
}