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
  mobileSubmenuOpen = signal<string | null>(null);

  // Lang menu
  langMenuOpen = signal(false);

  // Desktop hover menu
  hoverMenu = signal<string | null>(null);

  // Inject services
  t = inject(TranslateService);
  lang = inject(LangService);
  theme = inject(ThemeService);

  langs = ['fr', 'en'];

  // Flags for Apple-like UI
  flags: Record<string, string> = {
    fr: '🇫🇷',
    en: '🇬🇧'
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

    // Close lang menu when clicking outside
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.lang-switcher')) {
        this.langMenuOpen.set(false);
      }
    });
  }

  // Menu items - liens directs
  menuItems = [
    { labelKey: 'nav.accueil', link: '/', hasSubmenu: false },
    { labelKey: 'nav.a-propos', link: '/about', hasSubmenu: false },
    { labelKey: 'nav.packs', link: '/packs', hasSubmenu: false },
    { labelKey: 'nav.realisations', link: '/realisations', hasSubmenu: false },
    { labelKey: 'nav.blog', link: '/blog', hasSubmenu: false },
    { labelKey: 'nav.contact', link: '/contact', hasSubmenu: false },
    { labelKey: 'nav.assistance', link: '/support', hasSubmenu: false }
  ];

  // // Boutique avec sous-menu
  // boutiqueMenu = {
  //   labelKey: 'nav.boutique',
  //   link: '/shop',
  //   submenu: [
  //     { labelKey: 'nav.securite', link: '/shop/securite', icon: '🔒' },
  //     { labelKey: 'nav.domotique', link: '/shop/domotique', icon: '🏠' },
  //     { labelKey: 'nav.solaire', link: '/shop/solaire', icon: '☀️' },
  //     { labelKey: 'nav.packs', link: '/shop/packs', icon: '📦' },
  //     { labelKey: 'nav.accessoires', link: '/shop/accessoires', icon: '🔌' }
  //   ]
  // };
  // Boutique avec sous-menu
  boutiqueMenu = {
    labelKey: 'nav.boutique',
    link: '/shop',
    submenu: [
      { labelKey: 'nav.securite', link: '/securite', icon: '🔒' },
      { labelKey: 'nav.domotique', link: '/domotique', icon: '🏠' },
      { labelKey: 'nav.solaire', link: '/solaire', icon: '☀️' },
      { labelKey: 'nav.packs', link: '/packs', icon: '📦' },
      { labelKey: 'nav.accessoires', link: '/accessoires', icon: '🔌' }
      // { labelKey: 'nav.finition', link: '/shop/finition', icon: '🎨' }
    ]
  };

  // Show/hide hover menu
  showSubmenu(menu: string) {
    this.hoverMenu.set(menu);
  }

  hideSubmenu() {
    this.hoverMenu.set(null);
  }

  // Mobile submenu toggle
  toggleMobileSubmenu(menu: string) {
    this.mobileSubmenuOpen.set(this.mobileSubmenuOpen() === menu ? null : menu);
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

  // Close mobile menu
  closeMobileMenu() {
    this.open.set(false);
    this.mobileSubmenuOpen.set(null);
  }


  private hideTimeout: any;

scheduleHideSubmenu() {
  this.hideTimeout = setTimeout(() => {
    this.hideSubmenu();
  }, 300); // Délai de 300ms avant de fermer
}

cancelHideSubmenu() {
  if (this.hideTimeout) {
    clearTimeout(this.hideTimeout);
    this.hideTimeout = null;
  }
}

}