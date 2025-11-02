import { Component, signal, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LangService } from '../services/lang.service';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgFor, TranslateModule,CommonModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  open = signal(false);
  langs = ['fr','en','ar'];

  t = inject(TranslateService);
  lang = inject(LangService);
  theme = inject(ThemeService);
  
  items = [
    { key: 'store', link: '/' },
    { key: 'mac', link: '/mac' },
    { key: 'ipad', link: '/ipad' },
    { key: 'iphone', link: '/iphone' },
    { key: 'watch', link: '/watch' },
    { key: 'airpods', link: '/airpods' },
    { key: 'support', link: '/support' },
  ];

  setLang(l: string){ this.lang.setLang(l); }
  toggleTheme(){ this.theme.toggle(); }
}
