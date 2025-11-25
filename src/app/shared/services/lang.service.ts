import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class LangService {
  private translate = inject(TranslateService);
  private doc = inject(DOCUMENT);

  // supported = ['fr', 'en', 'ar'] as const;
    supported = ['fr', 'en'] as const;


  init() {
    const saved = localStorage.getItem('lang');
    const lang = saved && this.supported.includes(saved as any) ? saved! : 'fr';
    this.setLang(lang);
  }

  setLang(lang: string) {
    if (!this.supported.includes(lang as any)) return;
    this.translate.use(lang);
    localStorage.setItem('lang', lang);

    const isRtl = lang === 'ar';
    this.doc.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
    this.doc.documentElement.setAttribute('lang', lang);
  }

  current() {
    return this.translate.currentLang || 'fr';
  }
}
