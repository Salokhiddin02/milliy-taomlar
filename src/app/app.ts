import { Component, signal } from '@angular/core';
import { RouterOutlet, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('milliy-taomlar');

  constructor(private router: Router) {}

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onHomeClick = () => {
    console.log('Home button clicked!');
    
    // Navigate to home
    this.router.navigate(['/']).then(() => {
      // Scroll to top after navigation
      this.scrollToTop();
    });
  }
}
