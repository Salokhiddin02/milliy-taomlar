import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(private router: Router) {}

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onGlobalDishesSectionClick = () => {
    console.log("Global Taomlar bo'limi clicked!");
    window.open('/global-taomlar', '_blank');
  };

  // Video Management
  openVideo(videoUrl: string, event: Event) {
    event.stopPropagation();
    window.open(videoUrl, '_blank');
  }
}
