import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, OnInit, Inject, PLATFORM_ID, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule], // modules nécessaires
  templateUrl: './header.html',
  styleUrl: './header.css',
})

export class Header implements OnInit {

  public currentLang: string;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    public translate: TranslateService
  ) {
    this.translate.addLangs(['fr', 'en']);

    this.currentLang = 'en';

    if (isPlatformBrowser(this.platformId)) {
      let lang = 'en';

    if (isPlatformBrowser(this.platformId)) {

      const savedLang = localStorage.getItem('lang');

      if (savedLang) {
          lang = savedLang;
      } 
      else {
        const browserLang = this.translate.getBrowserLang();
        lang = browserLang?.match(/fr|en/) ? browserLang : 'en';
      }

      this.translate.use(lang);
    }

      this.currentLang = lang;
    }
  }


  
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


  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;

    if (typeof window !== 'undefined') {
      localStorage.setItem('lang', lang);
    }
  }

}