import { Component, signal, OnInit, HostListener } from '@angular/core';
import { RouterOutlet, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';

interface SearchResult {
  title: string;
  description: string;
  link: string;
  icon: string;
  hasVideo?: boolean;
  videoUrl?: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, RouterLink, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class App implements OnInit {
  protected readonly title = signal('milliy-taomlar');
  
  // Theme
  isDarkMode = false;
  
  // Navigation Dropdowns (removed)
  
  // Mobile Menu
  isMobileMenuOpen = false;
  
  // Search
  searchQuery = '';
  isSearchActive = false;
  searchResults: SearchResult[] = [];
  
  // Language
  showLanguageMenu = false;
  currentLanguage = 'uz';
  
  // All available recipes/pages for search
  private allItems: SearchResult[] = [
    { 
      title: 'Osh', 
      description: 'Milliy taom - O\'zbek oshi', 
      link: '/taomlar', 
      icon: '🍚',
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/watch?v=example1'
    },
    { 
      title: 'Somsa', 
      description: 'Tandir somsasi', 
      link: '/taomlar', 
      icon: '🥟',
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/watch?v=example2'
    },
    { 
      title: 'Lag\'mon', 
      description: 'Issiq lag\'mon', 
      link: '/taomlar', 
      icon: '🍜',
      hasVideo: false
    },
    { 
      title: 'Manti', 
      description: 'Bug\'da pishirilgan manti', 
      link: '/taomlar', 
      icon: '🥟',
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/watch?v=example3'
    },
    { 
      title: 'Shurva', 
      description: 'Go\'shtli sho\'rva', 
      link: '/taomlar', 
      icon: '🥣',
      hasVideo: false
    },
    { 
      title: 'Norin', 
      description: 'Salqin norin', 
      link: '/taomlar', 
      icon: '🍝',
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/watch?v=example4'
    },
    { 
      title: 'Mastava', 
      description: 'To\'yimli mastava', 
      link: '/taomlar', 
      icon: '🍲',
      hasVideo: false
    },
    { title: 'Taomlar', description: 'Barcha milliy taomlar', link: '/taomlar', icon: '🍲' },
    { title: 'Biz haqimizda', description: 'Kompaniya haqida ma\'lumot', link: '/biz-haqimizda', icon: 'ℹ️' },
    { title: 'Professional maslahatlar', description: 'Oshpazlik sirlari', link: '/professional-tips', icon: '👨‍🍳' },
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    this.isDarkMode = savedTheme === 'dark';
    this.applyTheme();
    
    // Load language from localStorage
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      this.currentLanguage = savedLanguage;
    }
  }

  // Theme Management
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }

  private applyTheme() {
    document.documentElement.setAttribute('data-theme', this.isDarkMode ? 'dark' : 'light');
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }

  // Navigation
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onHomeClick = () => {
    this.closeMobileMenu();
    this.router.navigate(['/']).then(() => {
      this.scrollToTop();
    });
  }

  // Dropdown Menus (removed)
  closeAllDropdowns() {
    this.showLanguageMenu = false;
  }

  // Mobile Menu
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (this.isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    document.body.style.overflow = '';
  }

  // Search Functionality
  onSearch() {
    if (this.searchQuery.trim().length > 0) {
      this.searchResults = this.allItems.filter(item =>
        item.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.searchResults = [];
    }
  }

  performSearch() {
    if (this.searchQuery.trim()) {
      this.onSearch();
    }
  }

  onSearchBlur() {
    setTimeout(() => {
      this.isSearchActive = false;
    }, 200);
  }

  clearSearch() {
    this.searchQuery = '';
    this.searchResults = [];
    this.isSearchActive = false;
  }

  // Video Management
  openVideo(videoUrl: string | undefined, event: Event) {
    if (videoUrl) {
      event.stopPropagation();
      window.open(videoUrl, '_blank');
    }
  }

  // Language Management
  toggleLanguageMenu() {
    this.showLanguageMenu = !this.showLanguageMenu;
  }

  changeLanguage(lang: string) {
    this.currentLanguage = lang;
    this.showLanguageMenu = false;
    localStorage.setItem('language', lang);
    
    // Here you would typically integrate with a translation service
    console.log('Language changed to:', lang);
  }

  getCurrentLanguage(): string {
    const languages: { [key: string]: string } = {
      'uz': "O'zbek",
      'ru': 'Русский',
      'en': 'English'
    };
    return languages[this.currentLanguage] || "O'zbek";
  }

  getCurrentFlag(): string {
    const flags: { [key: string]: string } = {
      'uz': '🇺🇿',
      'ru': '🇷🇺',
      'en': '🇬🇧'
    };
    return flags[this.currentLanguage] || '🇺🇿';
  }

  // Close dropdowns when clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.language-selector')) {
      this.closeAllDropdowns();
    }
  }

  // Close mobile menu on route change
  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth > 768 && this.isMobileMenuOpen) {
      this.closeMobileMenu();
    }
  }
}
