import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Lesson {
  title: string;
  duration: string;
  isFree: boolean;
  type: 'video' | 'quiz' | 'resource';
}

interface CurriculumSection {
  id: string;
  title: string;
  lessonsCount: number;
  duration: string;
  lessons: Lesson[];
  isExpanded?: boolean;
}

@Component({
  selector: 'app-curriculum-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './curriculum-section.html'
})
export class CurriculumSectionComponent {
  sections: CurriculumSection[] = [
    {
      id: 'section-1',
      title: 'مقدمة في التسويق الرقمي',
      lessonsCount: 5,
      duration: '47 دقيقة',
      isExpanded: true,
      lessons: [
        { title: 'مرحباً بك في الدورة', duration: '5:23', isFree: true, type: 'video' },
        { title: 'ما هو التسويق الرقمي؟', duration: '8:45', isFree: true, type: 'video' },
        { title: 'المشهد التسويقي الحالي', duration: '12:15', isFree: false, type: 'video' },
        { title: 'استراتيجية التسويق الرقمي', duration: '14:32', isFree: false, type: 'video' },
        { title: 'اختبار القسم', duration: '6:30', isFree: false, type: 'quiz' }
      ]
    },
    {
      id: 'section-2',
      title: 'وسائل التواصل الاجتماعي',
      lessonsCount: 6,
      duration: '1 ساعة 15 دقيقة',
      isExpanded: false,
      lessons: [
        { title: 'مقدمة في التسويق عبر وسائل التواصل', duration: '10:22', isFree: false, type: 'video' },
        { title: 'استراتيجية Facebook', duration: '15:40', isFree: false, type: 'video' },
        { title: 'استراتيجية Instagram', duration: '14:18', isFree: false, type: 'video' },
        { title: 'التسويق عبر LinkedIn', duration: '12:35', isFree: false, type: 'video' },
        { title: 'إنشاء محتوى جذاب', duration: '18:25', isFree: false, type: 'video' },
        { title: 'اختبار القسم', duration: '4:00', isFree: false, type: 'quiz' }
      ]
    },
    {
      id: 'section-3',
      title: 'تحسين محركات البحث (SEO)',
      lessonsCount: 5,
      duration: '1 ساعة 5 دقيقة',
      isExpanded: false,
      lessons: [
        { title: 'أساسيات SEO', duration: '12:45', isFree: false, type: 'video' },
        { title: 'البحث عن الكلمات المفتاحية', duration: '15:30', isFree: false, type: 'video' },
        { title: 'SEO على الصفحة', duration: '14:20', isFree: false, type: 'video' },
        { title: 'بناء الروابط', duration: '16:40', isFree: false, type: 'video' },
        { title: 'اختبار القسم', duration: '5:55', isFree: false, type: 'quiz' }
      ]
    }
  ];

  get totalLessons(): number {
    return this.sections.reduce((acc, section) => acc + section.lessonsCount, 0);
  }

  get totalDuration(): string {
    // Simple calculation - would need proper parsing in production
    return '8 ساعات 30 دقيقة';
  }

  toggleSection(sectionId: string): void {
    const section = this.sections.find(s => s.id === sectionId);
    if (section) {
      section.isExpanded = !section.isExpanded;
    }
  }

  expandAll(): void {
    this.sections.forEach(section => section.isExpanded = true);
  }

  collapseAll(): void {
    this.sections.forEach(section => section.isExpanded = false);
  }

  getLessonIcon(lesson: Lesson): string {
    if (lesson.type === 'quiz') return '❓';
    if (lesson.type === 'resource') return '📄';
    if (lesson.isFree) return '▶️';
    return '🔒';
  }
}