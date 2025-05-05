import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private darkMode = new BehaviorSubject<boolean>(false);
  darkMode$ = this.darkMode.asObservable();

  constructor() {
    this.loadSavedTheme();
  }

  toggleTheme(): void {
    const isDark = !this.darkMode.value;
    this.darkMode.next(isDark);
    document.body.classList.toggle('dark-theme', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

  loadSavedTheme(): void {
    const savedTheme = localStorage.getItem('theme');
    const isDark = savedTheme === 'dark';
    this.darkMode.next(isDark);
    document.body.classList.toggle('dark-theme', isDark);
  }

}