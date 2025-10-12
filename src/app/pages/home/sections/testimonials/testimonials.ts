import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.html'
})
export class TestimonialsComponent {
  testimonials = [
    {
      id: 1,
      name: 'محمد الشريف',
      role: 'مطور ويب',
      avatar: '👨‍💻',
      rating: 5,
      comment: 'أفضل منصة تعليمية جربتها! المحتوى ممتاز والمدربون محترفون جداً'
    },
    {
      id: 2,
      name: 'فاطمة العبيدي',
      role: 'مصممة جرافيك',
      avatar: '👩‍🎨',
      rating: 5,
      comment: 'الدورات عملية وسهلة الفهم. تعلمت مهارات جديدة ساعدتني في تطوير عملي'
    },
    {
      id: 3,
      name: 'أحمد القذافي',
      role: 'رائد أعمال',
      avatar: '👨‍💼',
      rating: 5,
      comment: 'منصة رائعة! استفدت كثيراً من الدورات وطورت من مهاراتي بشكل كبير'
    }
  ];
}