import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      title: 'تطوير المواقع الإلكترونية الكامل',
      instructor: 'أحمد المنصوري',
      instructorId: 1,
      price: 250,
      originalPrice: 350,
      rating: 4.8,
      reviewCount: 1250,
      students: 3500,
      lessonsCount: 45,
      duration: 12,
      level: 'مبتدئ',
      category: 'البرمجة',
      image: '💻',
      description: 'دورة شاملة لتعلم تطوير المواقع الإلكترونية من الصفر حتى الاحتراف. ستتعلم HTML, CSS, JavaScript وأحدث التقنيات في مجال تطوير الويب.',
      isBestseller: true,
      isNew: false,
      lastUpdated: 'يناير 2024',
      language: 'العربية'
    },
    {
      id: 2,
      title: 'التسويق الرقمي الشامل',
      instructor: 'فاطمة الزروق',
      instructorId: 2,
      price: 200,
      originalPrice: 300,
      rating: 4.9,
      reviewCount: 890,
      students: 2500,
      lessonsCount: 38,
      duration: 10,
      level: 'متوسط',
      category: 'التسويق',
      image: '📱',
      description: 'تعلم استراتيجيات التسويق الرقمي الحديثة والفعالة لنمو أعمالك',
      isBestseller: false,
      isNew: true,
      lastUpdated: 'ديسمبر 2023',
      language: 'العربية'
    },
    {
      id: 3,
      title: 'تصميم الجرافيك للمبتدئين',
      instructor: 'محمد السنوسي',
      instructorId: 3,
      price: 180,
      originalPrice: 250,
      rating: 4.7,
      reviewCount: 650,
      students: 1800,
      lessonsCount: 32,
      duration: 8,
      level: 'مبتدئ',
      category: 'التصميم',
      image: '🎨',
      description: 'أساسيات تصميم الجرافيك باستخدام أدوات احترافية',
      isBestseller: false,
      isNew: false,
      lastUpdated: 'نوفمبر 2023',
      language: 'العربية'
    },
    {
      id: 4,
      title: 'إدارة المشاريع الاحترافية',
      instructor: 'أحمد المنصوري',
      instructorId: 1,
      price: 220,
      originalPrice: 320,
      rating: 4.8,
      reviewCount: 720,
      students: 2100,
      lessonsCount: 40,
      duration: 11,
      level: 'متقدم',
      category: 'الأعمال',
      image: '💼',
      description: 'تعلم مهارات إدارة المشاريع وفق المعايير العالمية',
      isBestseller: true,
      isNew: false,
      lastUpdated: 'أكتوبر 2023',
      language: 'العربية'
    },
    {
      id: 5,
      title: 'تطوير تطبيقات الموبايل',
      instructor: 'فاطمة الزروق',
      instructorId: 2,
      price: 280,
      originalPrice: 380,
      rating: 4.9,
      reviewCount: 950,
      students: 2800,
      lessonsCount: 50,
      duration: 15,
      level: 'متقدم',
      category: 'البرمجة',
      image: '📲',
      description: 'بناء تطبيقات موبايل احترافية باستخدام أحدث التقنيات',
      isBestseller: false,
      isNew: true,
      lastUpdated: 'يناير 2024',
      language: 'العربية'
    },
    {
      id: 6,
      title: 'التصوير الفوتوغرافي الاحترافي',
      instructor: 'محمد السنوسي',
      instructorId: 3,
      price: 150,
      originalPrice: 200,
      rating: 4.6,
      reviewCount: 480,
      students: 1200,
      lessonsCount: 28,
      duration: 7,
      level: 'مبتدئ',
      category: 'التصميم',
      image: '📷',
      description: 'احترف التصوير الفوتوغرافي من الأساسيات إلى التقنيات المتقدمة',
      isBestseller: false,
      isNew: false,
      lastUpdated: 'سبتمبر 2023',
      language: 'العربية'
    },
    {
      id: 7,
      title: 'برمجة بايثون للمبتدئين',
      instructor: 'أحمد المنصوري',
      instructorId: 1,
      price: 0,
      rating: 4.7,
      reviewCount: 2100,
      students: 5500,
      lessonsCount: 35,
      duration: 9,
      level: 'مبتدئ',
      category: 'البرمجة',
      image: '🐍',
      description: 'دورة مجانية لتعلم لغة بايثون من الصفر',
      isBestseller: true,
      isNew: false,
      lastUpdated: 'ديسمبر 2023',
      language: 'العربية'
    },
    {
      id: 8,
      title: 'التجارة الإلكترونية وإدارة المتاجر',
      instructor: 'فاطمة الزروق',
      instructorId: 2,
      price: 190,
      originalPrice: 270,
      rating: 4.8,
      reviewCount: 560,
      students: 1650,
      lessonsCount: 42,
      duration: 10,
      level: 'متوسط',
      category: 'الأعمال',
      image: '🛒',
      description: 'تعلم كيفية إنشاء وإدارة متجر إلكتروني ناجح',
      isBestseller: false,
      isNew: true,
      lastUpdated: 'يناير 2024',
      language: 'العربية'
    }
  ];

  getAllCourses(): Course[] {
    return this.courses;
  }

  getCourseById(id: number): Course | undefined {
    return this.courses.find(course => course.id === id);
  }

  getCoursesByInstructor(instructorId: number): Course[] {
    return this.courses.filter(course => course.instructorId === instructorId);
  }

  getFeaturedCourses(limit: number = 3): Course[] {
    return this.courses.filter(c => c.isBestseller).slice(0, limit);
  }
}