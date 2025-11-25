import { Component, signal, inject, effect } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LangService } from '../services/lang.service';
import { ThemeService } from '../services/theme.service';
import { CartService } from '../services/cart.service';




@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf, TranslateModule, CommonModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  cartLength = 0;

  // Mobile menu
  open = signal(false);
  submenuOpen = signal<number | null>(null);

  // Lang menu
  langMenuOpen = signal(false);

  // Inject services
  t = inject(TranslateService);
  lang = inject(LangService);
  theme = inject(ThemeService);

  langs = ['fr', 'en'];

  // Flags for Apple-like UI
  flags: Record<string, string> = {
    fr: '🇫🇷',
    en: '🇬🇧',
    // ar: '🇦🇪'
  };

  // Current language as signal
  currentLang = signal(this.t.currentLang || 'fr');

  constructor(public cartService: CartService) {

    this.cartService.cart$.subscribe(cart => {
      this.cartLength = cart.reduce((sum, item) => sum + item.quantity, 0);
    });
    // Update currentLang when service changes
    effect(() => {
      this.currentLang.set(this.t.currentLang);
    });

    // Close all menus when clicking outside
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;

      if (!target.closest('.lang-switcher')) {
        this.langMenuOpen.set(false);
      }

      if (!target.closest('.dropdown-container')) {
        this.activeMenu.set(null);
      }
    });
  }

  // Menu definition
  menu = [
    {
      label: 'Produits',
      children: [
        { key: 'securite', link: '/securite' },
        { key: 'domotique', link: '/domotique' },
        { key: 'energie', link: '/energie' },
        { key: 'packs', link: '/packs' },
        { key: 'accessoires', link: '/accessoires' },
      ]
    },
    {
      label: 'Services',
      children: [
        { key: 'services', link: '/services' },
        { key: 'support', link: '/support' },
        { key: 'devis', link: '/devis' },
      ]
    },
    {
      label: 'Boutique',
      children: [
        { key: 'shop', link: '/shop' },
      ]
    },
    {
      label: 'Contact',
      children: [
        { key: 'contact', link: '/contact' },
        // { key: 'recherche', link: '/recherche' },
      ]
    }
  ];

  // Desktop menu active dropdown
  activeMenu = signal<number | null>(null);

  toggleMenu(i: number) {
    this.activeMenu.set(this.activeMenu() === i ? null : i);
  }

  closeMenu() {
    this.activeMenu.set(null);
  }

  // Language management
  toggleLangMenu() {
    this.langMenuOpen.set(!this.langMenuOpen());
  }

  setLang(l: string) {
    this.lang.setLang(l);
    this.currentLang.set(l);
    this.langMenuOpen.set(false);
  }

  // Theme
  toggleTheme() {
    this.theme.toggle();
  }
}
