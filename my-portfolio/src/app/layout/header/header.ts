import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  isSettingsOpen = false;
  isDarkMode: boolean = true;

  ngOnInit() {
    if(localStorage.getItem('theme') === 'dark'){
      document.documentElement.classList.add('dark');
      this.isDarkMode = false
    }
  }

  toggleSettings() {
    this.isSettingsOpen = !this.isSettingsOpen;
  }


  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    if (!this.isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');

    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');

    }
  }


  setLanguage(lang: string) {
    localStorage.setItem('language', lang);

    // ici tu pourras connecter ngx-translate plus tard
    console.log("language changed to", lang);
  }
}
