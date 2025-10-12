import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface CourseFilters {
  categories: number[];
  levels: number[];
  showFreeOnly: boolean;
}

@Component({
  selector: 'app-filters-sidebar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filters-sidebar.html'
})
export class FiltersSidebarComponent {
  @Output() filtersChanged = new EventEmitter<CourseFilters>();

  categories = [
    { id: 1, name: 'البرمجة والتطوير', count: 45 },
    { id: 2, name: 'التسويق', count: 32 },
    { id: 3, name: 'التصميم', count: 28 },
    { id: 4, name: 'الأعمال', count: 38 }
  ];

  levels = [
    { id: 1, name: 'مبتدئ' },
    { id: 2, name: 'متوسط' },
    { id: 3, name: 'متقدم' }
  ];

  selectedCategories: number[] = [];
  selectedLevels: number[] = [];
  showFreeOnly = false;

  toggleCategory(categoryId: number) {
    const index = this.selectedCategories.indexOf(categoryId);
    if (index > -1) {
      this.selectedCategories.splice(index, 1);
    } else {
      this.selectedCategories.push(categoryId);
    }
    this.emitFilters();
  }

  toggleLevel(levelId: number) {
    const index = this.selectedLevels.indexOf(levelId);
    if (index > -1) {
      this.selectedLevels.splice(index, 1);
    } else {
      this.selectedLevels.push(levelId);
    }
    this.emitFilters();
  }

  onFreeOnlyChange() {
    this.emitFilters();
  }

  clearAll() {
    this.selectedCategories = [];
    this.selectedLevels = [];
    this.showFreeOnly = false;
    this.emitFilters();
  }

  private emitFilters() {
    this.filtersChanged.emit({
      categories: this.selectedCategories,
      levels: this.selectedLevels,
      showFreeOnly: this.showFreeOnly
    });
  }
}