export interface Creator {
  id: number;
  name: string;
  title: string;
  location: string;
  avatar: string;
  rating: number;
  totalStudents: number;
  totalCourses: number;
  totalReviews: number;
  bio: string;
  specialties: string[];
}