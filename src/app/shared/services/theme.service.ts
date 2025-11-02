import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export type Theme = 'light'|'dark'|'system';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private doc = inject(DOCUMENT);

  init() {
    const saved = (localStorage.getItem('theme') as Theme) || 'system';
    this.apply(saved);
  }

  apply(theme: Theme) {
    const root = this.doc.documentElement;
    root.classList.remove('dark');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (theme === 'dark' || (theme === 'system' && prefersDark)) {
      root.classList.add('dark');
    }
    localStorage.setItem('theme', theme);
  }

  toggle() {
    const current = (localStorage.getItem('theme') as Theme) || 'system';
    this.apply(current === 'dark' ? 'light' : 'dark');
  }

  current(): Theme {
    return (localStorage.getItem('theme') as Theme) || 'system';
  }
}
