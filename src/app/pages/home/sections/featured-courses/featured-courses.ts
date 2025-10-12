import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Course } from '../../../../core/models/course.model';
import { CoursesService } from '../../../../core/services/courses';

@Component({
  selector: 'app-featured-courses',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './featured-courses.component.html'
})
export class FeaturedCoursesComponent implements OnInit {
  courses: Course[] = [];

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    // Get first 3 courses as featured
    this.courses = this.coursesService.getAllCourses().slice(0, 3);
  }
}