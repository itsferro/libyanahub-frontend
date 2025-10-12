import { Component } from '@angular/core';
import { HeroComponent } from './sections/hero/hero';
import { FeaturedCoursesComponent } from './sections/featured-courses/featured-courses';
import { CategoriesComponent } from './sections/categories/categories';
import { HowToStartComponent } from './sections/how-to-start/how-to-start';
import { TestimonialsComponent } from './sections/testimonials/testimonials';
import { StatsComponent } from './sections/stats/stats';
import { CtaSectionComponent } from './sections/cta-section/cta-section';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    FeaturedCoursesComponent,
    CategoriesComponent,
    HowToStartComponent,
    TestimonialsComponent,
    StatsComponent,
    CtaSectionComponent
  ],
  templateUrl: './home.html'
})
export class HomeComponent {}