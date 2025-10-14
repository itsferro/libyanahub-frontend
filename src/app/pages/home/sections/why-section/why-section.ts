import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Reason {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-why-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-section.html'
})
export class WhySectionComponent {
  reasons: Reason[] = [
    {
      icon: '🇱🇾',
      title: 'محتوى عربي محلي',
      description: 'جميع الخدمات بالعربية من خبراء ليبيين يفهمون ثقافتك وسوقك'
    },
    {
      icon: '💳',
      title: 'الدفع برصيد ليبيانا',
      description: 'ميزة حصرية - ادفع مباشرة من رصيد موبايلك. لا حاجة لبطاقات ائتمان دولية'
    },
    {
      icon: '💰',
      title: 'أسعار مناسبة',
      description: 'أسعار عادلة بالدينار الليبي. أرخص 50-70% من المنصات العالمية'
    },
    {
      icon: '🤝',
      title: 'دعم محلي',
      description: 'فريق دعم يتكلم العربية متاح لمساعدتك في أي وقت'
    }
  ];
}