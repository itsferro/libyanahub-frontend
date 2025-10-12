// src/app/pages/courses/courses.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from './components/course-card/course-card';
import { FiltersSidebarComponent, CourseFilters } from './components/filters-sidebar/filters-sidebar';
import { Course } from '../../core/models/course.model';
import { CoursesService } from '../../core/services/courses';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, CourseCardComponent, FiltersSidebarComponent],
  templateUrl: './courses.html'
})
export class CoursesComponent implements OnInit {
  allCourses: Course[] = [];
  filteredCourses: Course[] = [];

  // Map category IDs to category names that match Course.category values
  private categoryMap = new Map<number, string>([
    [1, 'البرمجة'],        // Programming
    [2, 'التسويق'],        // Marketing
    [3, 'التصميم'],        // Design
    [4, 'الأعمال']         // Business
  ]);

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.allCourses = this.coursesService.getAllCourses();
    this.filteredCourses = [...this.allCourses];
  }

  onFiltersChanged(filters: CourseFilters): void {
    this.filteredCourses = this.allCourses.filter(course => {
      // Free only filter
      if (filters.showFreeOnly && course.price > 0) {
        return false;
      }

      // Category filter
      if (filters.categories.length > 0) {
        const selectedCategoryNames = filters.categories
          .map(id => this.categoryMap.get(id))
          .filter(name => name !== undefined);
        
        if (!selectedCategoryNames.includes(course.category)) {
          return false;
        }
      }

      // Level filter
      if (filters.levels.length > 0) {
        const levelNames = ['مبتدئ', 'متوسط', 'متقدم'];
        const selectedLevelNames = filters.levels.map(id => levelNames[id - 1]);
        if (!selectedLevelNames.includes(course.level)) {
          return false;
        }
      }

      return true;
    });
  }
}