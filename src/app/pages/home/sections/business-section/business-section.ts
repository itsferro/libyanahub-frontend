import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Benefit {
  icon: string;
  text: string;
}

@Component({
  selector: 'app-business-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './business-section.html'
})
export class BusinessSectionComponent {
  benefits: Benefit[] = [
    { icon: '🏢', text: 'تدريب مؤسسي لفرق العمل' },
    { icon: '💪', text: 'برامج صحة ولياقة للموظفين' },
    { icon: '📚', text: 'مكتبة محتوى حصرية' },
    { icon: '📊', text: 'تقارير تقدم مفصلة' },
    { icon: '💼', text: 'خصومات للشركات' }
  ];
}