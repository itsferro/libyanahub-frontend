import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.html'
})
export class CategoriesComponent {
  categories = [
    {
      id: 1,
      name: 'البرمجة والتطوير',
      icon: '💻',
      coursesCount: 45,
      color: 'from-accent to-pink-600'
    },
    {
      id: 2,
      name: 'التسويق',
      icon: '📱',
      coursesCount: 32,
      color: 'from-cyan to-blue-600'
    },
    {
      id: 3,
      name: 'التصميم',
      icon: '🎨',
      coursesCount: 28,
      color: 'from-yellow to-orange-600'
    },
    {
      id: 4,
      name: 'الأعمال',
      icon: '💼',
      coursesCount: 38,
      color: 'from-purple-600 to-indigo-600'
    }
  ];
}