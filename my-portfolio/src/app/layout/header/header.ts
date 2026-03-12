import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, OnInit, Inject, PLATFORM_ID, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})

export class Header implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  
  isMenuOpen = false;
  isSettingsOpen = false;
  isDarkMode = false;

  ngOnInit() {

    if (isPlatformBrowser(this.platformId)) {

      const theme = localStorage.getItem('theme');

      if (theme === 'dark') {
        this.isDarkMode = true;
        document.documentElement.classList.add('dark');
      } else {
        this.isDarkMode = false;
        document.documentElement.classList.remove('dark');
      }

    }

  }

  toggleSettings() {
    this.isSettingsOpen = !this.isSettingsOpen;
  }

  toggleTheme() {

    if (isPlatformBrowser(this.platformId)) {

      this.isDarkMode = !this.isDarkMode;

      if (this.isDarkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }

    }

  }

  isMobileMenuOpen = false;
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }



  setLanguage(lang: string) {

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('language', lang);
    }

    console.log("language changed to", lang);
  }

}