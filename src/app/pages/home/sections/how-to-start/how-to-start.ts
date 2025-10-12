import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-how-to-start',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './how-to-start.html'
})
export class HowToStartComponent {
  steps = [
    {
      id: 1,
      title: 'إنشاء حساب',
      description: 'سجل حسابك المجاني في دقائق',
      icon: '📝'
    },
    {
      id: 2,
      title: 'اختر دورتك',
      description: 'تصفح المئات من الدورات المتاحة',
      icon: '🔍'
    },
    {
      id: 3,
      title: 'ابدأ التعلم',
      description: 'تعلم بالسرعة التي تناسبك',
      icon: '🚀'
    }
  ];
}