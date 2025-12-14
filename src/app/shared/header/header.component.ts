// import { Component, signal, inject, effect } from '@angular/core';
// import { RouterLink } from '@angular/router';
// import { CommonModule, NgFor, NgIf } from '@angular/common';
// import { TranslateModule, TranslateService } from '@ngx-translate/core';
// import { LangService } from '../services/lang.service';
// import { ThemeService } from '../services/theme.service';
// import { CartService } from '../services/cart.service';

// @Component({
//   selector: 'app-header',
//   standalone: true,
//   imports: [RouterLink, NgFor, NgIf, TranslateModule, CommonModule],
//   templateUrl: './header.component.html'
// })
// export class HeaderComponent {
//   cartLength = 0;

//   // Mobile menu
//   open = signal(false);
//   mobileSubmenuOpen = signal<string | null>(null);

//   // Lang menu
//   langMenuOpen = signal(false);

//   // Desktop hover menu
//   hoverMenu = signal<string | null>(null);

//   // Inject services
//   t = inject(TranslateService);
//   lang = inject(LangService);
//   theme = inject(ThemeService);

//   langs = ['fr', 'en'];

//   // Flags for Apple-like UI
//   flags: Record<string, string> = {
//     fr: '🇫🇷',
//     en: '🇬🇧'
//   };

//   // Current language as signal
//   currentLang = signal(this.t.currentLang || 'fr');

//   constructor(public cartService: CartService) {
//     this.cartService.cart$.subscribe(cart => {
//       this.cartLength = cart.reduce((sum, item) => sum + item.quantity, 0);
//     });

//     // Update currentLang when service changes
//     effect(() => {
//       this.currentLang.set(this.t.currentLang);
//     });

//     // Close lang menu when clicking outside
//     document.addEventListener('click', (e) => {
//       const target = e.target as HTMLElement;
//       if (!target.closest('.lang-switcher')) {
//         this.langMenuOpen.set(false);
//       }
//     });
//   }

//   // Menu items - liens directs
//   menuItems = [
//     { labelKey: 'nav.accueil', link: '/', hasSubmenu: false },
//     { labelKey: 'nav.a-propos', link: '/about', hasSubmenu: false },
//     { labelKey: 'nav.packs', link: '/packs', hasSubmenu: false },
//     { labelKey: 'nav.realisations', link: '/realisations', hasSubmenu: false },
//     { labelKey: 'nav.blog', link: '/blog', hasSubmenu: false },
//     { labelKey: 'nav.contact', link: '/contact', hasSubmenu: false },
//     { labelKey: 'nav.assistance', link: '/support', hasSubmenu: false },
//      { labelKey: 'nav.securite', link: '/securite', hasSubmenu: false  },
//      { labelKey: 'nav.domotique', link: '/domotique',  hasSubmenu: false },
//       { labelKey: 'nav.solaire', link: '/solaire',  hasSubmenu: false },
//        { labelKey: 'nav.accessoires', link: '/accessoires', hasSubmenu: false }
//   ];


//   // Boutique avec sous-menu
//   boutiqueMenu = {
//     labelKey: 'nav.boutique',
//     link: '/shop',
//     submenu: [
//       { labelKey: 'nav.securite', link: '/securite', icon: '🔒' },

//     ]
//   };

//   // Show/hide hover menu
//   showSubmenu(menu: string) {
//     this.hoverMenu.set(menu);
//   }

//   hideSubmenu() {
//     this.hoverMenu.set(null);
//   }

//   // Mobile submenu toggle
//   toggleMobileSubmenu(menu: string) {
//     this.mobileSubmenuOpen.set(this.mobileSubmenuOpen() === menu ? null : menu);
//   }

//   // Language management
//   toggleLangMenu() {
//     this.langMenuOpen.set(!this.langMenuOpen());
//   }

//   setLang(l: string) {
//     this.lang.setLang(l);
//     this.currentLang.set(l);
//     this.langMenuOpen.set(false);
//   }

//   // Theme
//   toggleTheme() {
//     this.theme.toggle();
//   }

//   // Close mobile menu
//   closeMobileMenu() {
//     this.open.set(false);
//     this.mobileSubmenuOpen.set(null);
//   }


//   private hideTimeout: any;

// scheduleHideSubmenu() {
//   this.hideTimeout = setTimeout(() => {
//     this.hideSubmenu();
//   }, 300); // Délai de 300ms avant de fermer
// }

// cancelHideSubmenu() {
//   if (this.hideTimeout) {
//     clearTimeout(this.hideTimeout);
//     this.hideTimeout = null;
//   }
// }

// }

import { Component, signal, inject, effect } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LangService } from '../services/lang.service';
import { ThemeService } from '../services/theme.service';
import { CartService } from '../services/cart.service';

interface MenuItem {
  labelKey: string;
  link: string;
  icon?: string;
  submenu?: MenuItem[];
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, TranslateModule, CommonModule],
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

  langs = ['fr', 'en', 'wo'];

  // Flags for language switcher
  flags: Record<string, string> = {
    fr: '🇫🇷',
    en: '🇬🇧',
    wo: '🇸🇳'
  };

  // Current language as signal
  currentLang = signal(this.t.currentLang || 'fr');

  private hideTimeout: any;

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

  // Menu items - Navigation principale (sans sous-menus complexes)
  menuItems: MenuItem[] = [
    { labelKey: 'nav.accueil', link: '/' },
    { labelKey: 'nav.a-propos', link: '/about' },
    { labelKey: 'nav.packs', link: '/packs' },
    { labelKey: 'nav.realisations', link: '/realisations' },
    { labelKey: 'nav.blog', link: '/blog' },
    { labelKey: 'nav.contact', link: '/contact' },
    { labelKey: 'nav.assistance', link: '/support' }
  ];

  // Menus avec sous-menus (chacun indépendant)
  menuWithSubmenu: MenuItem[] = [
    // BOUTIQUE
    {
      labelKey: 'nav.shop.boutique',
      link: '/shop',
      icon: '🏪',
      submenu: [
        { labelKey: 'nav.shop.securite', link: '/shop/securite', icon: '🔒' },
        { labelKey: 'nav.shop.domotique', link: '/shop/domotique', icon: '🏠' },
        { labelKey: 'nav.shop.solaire', link: '/shop/solaire', icon: '☀️' },
        { labelKey: 'nav.shop.finition', link: '/shop/finition', icon: '🎨' }
      ]
    },
    
    // SÉCURITÉ ÉLECTRONIQUE
    {
      labelKey: 'nav.securiteElectronique.securite',
      link: '/securite',
      icon: '🔒',
      submenu: [
        { labelKey: 'nav.securiteElectronique.alarme', link: '/securite/alarme' },
        { labelKey: 'nav.securiteElectronique.videosurveillance', link: '/securite/videosurveillance' },
        { labelKey: 'nav.securiteElectronique.controleacces', link: '/securite/controle-acces' },
        { labelKey: 'nav.securiteElectronique.detection', link: '/securite/detection' }
      ]
    },
    
    // DOMOTIQUE & SMART HOME
    {
      labelKey: 'nav.domotiqueSmartHome.domotique',
      link: '/domotique',
      icon: '🏠',
      submenu: [
        { labelKey: 'nav.domotiqueSmartHome.eclairage', link: '/domotique/eclairage' },
        { labelKey: 'nav.domotiqueSmartHome.controlevolets', link: '/domotique/volets' },
        { labelKey: 'nav.domotiqueSmartHome.climatisation', link: '/domotique/climatisation' },
        { labelKey: 'nav.domotiqueSmartHome.automatisation', link: '/domotique/automatisation' },
        { labelKey: 'nav.domotiqueSmartHome.controle', link: '/domotique/controle' }
      ]
    },
    
    // SOLAIRE & ÉNERGIE
    {
      labelKey: 'nav.solaireSolaireEnergie.solaire',
      link: '/solaire',
      icon: '☀️',
      submenu: [
        { labelKey: 'nav.solaireSolaireEnergie.panneaux', link: '/solaire/panneaux' },
        { labelKey: 'nav.solaireSolaireEnergie.batteries', link: '/solaire/batteries' },
        { labelKey: 'nav.solaireSolaireEnergie.onduleurs', link: '/solaire/onduleurs' },
        { labelKey: 'nav.solaireSolaireEnergie.accessoires', link: '/solaire/accessoires' },
        { labelKey: 'nav.solaireSolaireEnergie.kits', link: '/solaire/kits' }
      ]
    },
    
    // FINITIONS & PRESTATIONS LUXE
    {
      labelKey: 'nav.finitionPrestationLuxe.finition',
      link: '/finition',
      icon: '🎨',
      submenu: [
        { labelKey: 'nav.finitionPrestationLuxe.peinture', link: '/finition/peinture' },
        { labelKey: 'nav.finitionPrestationLuxe.carrelage', link: '/finition/carrelage' },
        { labelKey: 'nav.finitionPrestationLuxe.menuiserie', link: '/finition/menuiserie' },
        { labelKey: 'nav.finitionPrestationLuxe.design', link: '/finition/design' },
        { labelKey: 'nav.finitionPrestationLuxe.plafonds', link: '/finition/plafonds' }
      ]
    }
  ];

  // Show/hide hover menu
  showSubmenu(menu: string) {
    this.cancelHideSubmenu();
    this.hoverMenu.set(menu);
  }

  hideSubmenu() {
    this.hoverMenu.set(null);
  }

  scheduleHideSubmenu() {
    this.hideTimeout = setTimeout(() => {
      this.hideSubmenu();
    }, 300);
  }

  cancelHideSubmenu() {
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }
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

  ngOnDestroy() {
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
    }
  }
}