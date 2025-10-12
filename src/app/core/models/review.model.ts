export interface Review {
  id: number;
  studentName: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
  courseId?: number;
  creatorId?: number;
}