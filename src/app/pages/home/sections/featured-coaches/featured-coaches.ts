import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Coach {
  id: number;
  name: string;
  specialty: string;
  avatar: string;
  rating: number;
  students: number;
  courses: number;
}

@Component({
  selector: 'app-featured-coaches',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './featured-coaches.html'
})
export class FeaturedCoachesComponent {
  coaches: Coach[] = [
    {
      id: 1,
      name: 'د. سارة أحمد',
      specialty: 'خبيرة تطوير الأعمال',
      avatar: '👩‍💼',
      rating: 4.9,
      students: 8520,
      courses: 24
    },
    {
      id: 2,
      name: 'أ. محمد العلي',
      specialty: 'مدرب قيادة وإدارة',
      avatar: '👨‍🏫',
      rating: 4.8,
      students: 6350,
      courses: 18
    },
    {
      id: 3,
      name: 'د. ليلى حسن',
      specialty: 'متخصصة في التسويق الرقمي',
      avatar: '👩‍💻',
      rating: 4.9,
      students: 9240,
      courses: 31
    },
    {
      id: 4,
      name: 'م. عمر الشمري',
      specialty: 'خبير تطوير الذات',
      avatar: '👨‍🎓',
      rating: 4.7,
      students: 7180,
      courses: 22
    }
  ];
}