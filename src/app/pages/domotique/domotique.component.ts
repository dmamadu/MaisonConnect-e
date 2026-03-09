// import { Component, HostListener, inject, OnDestroy, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { TranslateModule } from '@ngx-translate/core';
// import { CartService } from '../../shared/services/cart.service';
// import { CartComponent } from "../cart/cart.component";
// import { Subject, takeUntil } from 'rxjs';
// import { RootService } from '../../shared/services/root.service';

// interface Product {
//   id: number;
//   category: 'light' | 'sensor' | 'automation';
//   title: string;
//   description: string;
//   price: string;
//   image: string;
//   link?: string;
//   highlights?: string[];
//   specs?: Record<string, string>;
// }

// @Component({
//   selector: 'app-domotique',
//   standalone: true,
//   imports: [CommonModule, FormsModule, TranslateModule, CartComponent],
//   templateUrl: './domotique.component.html',
//   styleUrl: './domotique.component.scss'
// })
// export class DomotiqueComponent implements  OnInit , OnDestroy  {

//     // Pour indiquer le chargement (spinner)
//   loadData: boolean = false;

//   private destroy$ = new Subject<void>();
//   private  baseService= inject(RootService)
  
//   ngOnInit(): void {
//   }
//   ngOnDestroy(): void {
//     this.destroy$.next();
//     this.destroy$.complete();
//   }




//   // Parallax
//   bgOffset = 0;

//   // Filtre
//   filter: 'all' | Product['category'] = 'all';

//   selectedProduct: Product | null = null;

//   // Produits domotiques
//   products: Product[] = [
//     {
//       id: 1,
//       category: 'light',
//       title: `Ampoule LED Intelligente RGB`,
//       description: `Contrôlez la couleur, la luminosité et les ambiances via smartphone ou assistant vocal.`,
//       price: '12 000 FCFA',
//       image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR30Z5mH_iPr0Qutox3hAuufxq1gGW6fHlYXw&s',
//       link: '#',
//       highlights: ['16 millions de couleurs', 'Contrôle à distance', 'Scénarios lumineux'],
//       specs: {
//         'Connexion': 'Wi-Fi',
//         'Durée de vie': '25 000h',
//         'Compatibilité': 'Google / Alexa'
//       }
//     },
//     {
//       id: 2,
//       category: 'sensor',
//       title: `Capteur de Mouvement Intelligent`,
//       description: `Active automatiquement vos lumières ou déclenche une alerte en cas de mouvement.`,
//       price: '18 500 FCFA',
//       image: 'https://i.pinimg.com/1200x/0a/79/b5/0a79b52c6df8e3e3dc0634db93486708.jpg',
//       link: '#',
//       highlights: ['Haute sensibilité', 'Automatisations', 'Basse consommation'],
//       specs: {
//         'Angle': '170°',
//         'Autonomie': '2 ans',
//         'Technologie': 'Zigbee 3.0'
//       }
//     },
//     {
//       id: 3,
//       category: 'automation',
//       title: `Prise Connectée Wi-Fi`,
//       description: `Contrôlez vos appareils à distance, mesurez la consommation et planifiez des routines.`,
//       price: '9 500 FCFA',
//       image: 'https://i.pinimg.com/1200x/b1/d6/34/b1d63417cabf71c6475aace3bf76d527.jpg',
//       link: '#',
//       highlights: ['Programmation', 'Suivi énergie', 'Mode absence'],
//       specs: {
//         'Puissance': '2300W max',
//         'Application': 'Mobile / Cloud',
//         'Compatibilité': 'Alexa / Google'
//       }
//     },
//     {
//       id: 4,
//       category: 'light',
//       title: `Bande LED RGBIC Intelligente`,
//       description: `Idéal pour salon, chambre, TV ou éclairage d’ambiance.`,
//       price: '20 000 FCFA',
//       image: 'https://i.pinimg.com/1200x/37/e8/3f/37e83ff4f9b59901bfa82ae08a43cdfb.jpg',
//       link: '#',
//       highlights: ['Effets dynamiques', 'Synchronisation musicale', 'Découpe possible'],
//       specs: {
//         'Longueur': '5m',
//         'Connexion': 'Wi-Fi',
//         'Type LED': 'RGBIC'
//       }
//     },
//     {
//       id: 5,
//       category: 'sensor',
//       title: `Capteur d’Ouverture Portes/Fenêtres`,
//       description: `Recevez une alerte instantanée dès qu’une porte ou fenêtre s’ouvre.`,
//       price: '7 000 FCFA',
//       image: 'https://i.pinimg.com/1200x/cd/23/57/cd2357830d8b654b8ccea866241f86b7.jpg',
//       link: '#',
//       highlights: ['Ultra compact', 'Alerte en temps réel', 'Automatisation'],
//       specs: {
//         'Autonomie': '2 ans',
//         'Technologie': 'Zigbee',
//         'Fixation': 'Adhésif'
//       }
//     }
//   ];

//   get visibleProducts(): Product[] {
//     return this.filter === 'all'
//       ? this.products
//       : this.products.filter(p => p.category === this.filter);
//   }

//   openDetail(p: Product) {
//     this.selectedProduct = p;
//     document.body.style.overflow = 'hidden';
//   }

//   closeDetail() {
//     this.selectedProduct = null;
//     document.body.style.overflow = '';
//   }

//   @HostListener('window:scroll')
//   onWindowScroll() {
//     const sc = window.scrollY || window.pageYOffset;
//     this.bgOffset = sc * 0.25;
//     (document.documentElement as any).style.setProperty('--bg-offset', `${this.bgOffset}px`);
//   }

//   delayForIndex(i: number) {
//     return `${0.06 * i}s`;
//   }
//     cart: { product: any, quantity: number }[] = [];
//   constructor(public cartService: CartService) {}


//     addToCart(product: any) {
//     const existing = this.cart.find(c => c.product.id === product.id);
//     if(existing) {
//       existing.quantity++;
//     } else {
//       this.cart.push({ product, quantity: 1 });
//     }
//         this.cartService.addToCart(product);
//   }

//       getDomotique() {
//         this.loadData = true;
//         console.log('Chargement des accessoires...');
//         return this.baseService
//           .all('accessories')
//           .pipe(takeUntil(this.destroy$))
//           .subscribe(
//             (data: any) => {
//               this.loadData = false;
//               console.log('Accessoires chargés :', data);
      
//               if (data && data.length > 0) {
//                 this.products = data;
//               } else {
//                 this.products = [];
//               }
//             },
//             (error) => {
//               this.loadData = false;
//               console.error('Erreur lors du chargement des accessoires :', error);
//             }
//           );
//       }

// }

import { Component, HostListener, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CartService } from '../../shared/services/cart.service';
import { CartComponent } from '../cart/cart.component';
import { Subject, takeUntil } from 'rxjs';
import { RootService } from '../../shared/services/root.service';
import { SnackBarService } from '../../shared/services/snackBar.service';

const STORAGE_BASE = 'https://bo.itsloneed.com/storage/';

// Slug(s) correspondant à la catégorie domotique dans ton API
const DOMOTIQUE_SLUGS = ['domotics', 'smart-home', 'home-automation'];

export interface ApiProduct {
  id: number;
  category_id: number;
  subcategory_id: number | null;
  title: { fr: string; en: string };
  description: { fr: string; en: string };
  price: string;
  image: string;
  link: string | null;
  highlights: { text: string }[];
  specs: { label: string; value: string }[];
  category: { id: number; slug: string; name: { fr: string; en: string } };
  sub_category: any | null;
  images: any[];
}

@Component({
  selector: 'app-domotique',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule, CartComponent],
  templateUrl: './domotique.component.html',
  styleUrl: './domotique.component.scss'
})
export class DomotiqueComponent implements OnInit, OnDestroy {

  loadData = false;
  products: ApiProduct[] = [];
  selectedProduct: ApiProduct | null = null;
  cart: { product: ApiProduct; quantity: number }[] = [];
  bgOffset = 0;

  // Filtres construits dynamiquement depuis les sous-catégories
  filter = 'all';
  subFilters: { key: string; label: string }[] = [
    { key: 'all', label: 'filters.all' }
  ];

  private destroy$    = new Subject<void>();
  private baseService = inject(RootService);
  private snackbar    = inject(SnackBarService);
  private translate   = inject(TranslateService);
  constructor(public cartService: CartService) {}

  ngOnInit(): void {
    this.getDomotique();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // ─── Chargement des produits domotique ──────────────────────────────────────
  getDomotique(): void {
    this.loadData = true;

    this.baseService
      .all('products')
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response: any) => {
          this.loadData = false;
          const data: ApiProduct[] = Array.isArray(response)
            ? response
            : (response?.data ?? []);

          // Filtrer uniquement la catégorie domotique
          this.products = data.filter(p =>
            p.category && DOMOTIQUE_SLUGS.includes(p.category.slug)
          );

          this.buildSubFilters(this.products);
        },
        error: (err) => {
          this.loadData = false;
          console.error('Erreur chargement domotique :', err);
          // this.snackbar.error('Impossible de charger les produits.');
        }
      });
  }

  // ─── Construire les filtres depuis les sous-catégories ──────────────────────
  private buildSubFilters(products: ApiProduct[]): void {
    const seen = new Set<number>();
    const extras: { key: string; label: string }[] = [];

    for (const p of products) {
      if (p.sub_category && !seen.has(p.sub_category.id)) {
        seen.add(p.sub_category.id);
        extras.push({
          key: p.sub_category.slug,
          label: p.sub_category.name?.[this.lang] ?? p.sub_category.name?.['fr'] ?? p.sub_category.slug
        });
      }
    }

    this.subFilters = [{ key: 'all', label: 'filters.all' }, ...extras];
  }

  // ─── Helpers multilingues ────────────────────────────────────────────────────
  private get lang(): 'fr' | 'en' {
    return (this.translate.currentLang || 'fr') as 'fr' | 'en';
  }

  getTitle(p: ApiProduct): string {
    return p.title[this.lang] ?? p.title['fr'];
  }

  getDescription(p: ApiProduct): string {
    const raw = p.description[this.lang] ?? p.description['fr'] ?? '';
    return raw.replace(/<[^>]*>/g, '');
  }

  getDescriptionHtml(p: ApiProduct): string {
    return p.description[this.lang] ?? p.description['fr'] ?? '';
  }

  getImageUrl(path: string): string {
    if (!path) return 'assets/images/placeholder.png';
    if (path.startsWith('http')) return path;
    return STORAGE_BASE + path;
  }

  formatPrice(price: string): string {
    const num = parseFloat(price);
    return isNaN(num) ? price : num.toLocaleString('fr-FR') + ' FCFA';
  }

  onImageError(event: Event): void {
    (event.target as HTMLImageElement).src = 'assets/images/placeholder.png';
  }

  // ─── Filtrage ────────────────────────────────────────────────────────────────
  get visibleProducts(): ApiProduct[] {
    if (this.filter === 'all') return this.products;
    return this.products.filter(p => p.sub_category?.slug === this.filter);
  }

  // ─── Détail ──────────────────────────────────────────────────────────────────
  openDetail(p: ApiProduct): void {
    this.selectedProduct = p;
    document.body.style.overflow = 'hidden';
  }

  closeDetail(): void {
    this.selectedProduct = null;
    document.body.style.overflow = '';
  }

  // ─── Panier ──────────────────────────────────────────────────────────────────
  addToCart(product: ApiProduct): void {
    const existing = this.cart.find(c => c.product.id === product.id);
    if (existing) {
      existing.quantity++;
    } else {
      this.cart.push({ product, quantity: 1 });
    }
    this.cartService.addToCart(product);
  }

  // ─── Parallax ────────────────────────────────────────────────────────────────
  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.bgOffset = (window.scrollY || window.pageYOffset) * 0.25;
  }

  delayForIndex(i: number): string {
    return `${0.06 * i}s`;
  }
}