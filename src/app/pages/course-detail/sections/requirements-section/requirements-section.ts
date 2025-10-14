import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-requirements-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './requirements-section.html'
})
export class RequirementsSectionComponent {
  @Input() requirements: string[] = [
    'لا حاجة لخبرة سابقة في التسويق',
    'جهاز كمبيوتر مع اتصال بالإنترنت',
    'الرغبة في التعلم والتطبيق العملي',
    'حساب على وسائل التواصل الاجتماعي (اختياري)'
  ];
}