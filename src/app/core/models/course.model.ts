export interface Course {
  id: number;
  title: string;
  instructor: string;
  instructorId: number;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount?: number;
  students: number;
  duration: number;
  lessonsCount: number;
  level: 'مبتدئ' | 'متوسط' | 'متقدم';
  category: string;
  image: string;
  description?: string;
  isBestseller?: boolean;
  isNew?: boolean;
  lastUpdated?: string;
  language?: string;
}