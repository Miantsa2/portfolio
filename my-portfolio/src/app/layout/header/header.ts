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
  this.translate.setDefaultLang('fr');

  const browserLang = this.translate.getBrowserLang();
  const lang = browserLang?.match(/fr|en/) ? browserLang : 'fr';
  this.translate.use(lang);
  this.currentLang = lang;  // <-- important
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


 // quand tu changes la langue
switchLanguage(lang: string) {
  this.translate.use(lang);
  this.currentLang = lang; // <-- met à jour la variable
}

}