import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats.html'
})
export class StatsComponent {
  stats = [
    {
      id: 1,
      number: '10,000+',
      label: 'طالب نشط',
      icon: '👥'
    },
    {
      id: 2,
      number: '500+',
      label: 'دورة تدريبية',
      icon: '📚'
    },
    {
      id: 3,
      number: '100+',
      label: 'مدرب محترف',
      icon: '👨‍🏫'
    },
    {
      id: 4,
      number: '4.8/5',
      label: 'تقييم المستخدمين',
      icon: '⭐'
    }
  ];
}