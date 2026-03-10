// import { Component, HostListener, inject, OnDestroy, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { TranslateModule } from '@ngx-translate/core';
// import { CartService } from '../../shared/services/cart.service';
// import { CartComponent } from "../cart/cart.component";
// import { Subject, takeUntil } from 'rxjs';
// import { RootService } from '../../shared/services/root.service';
// import { SnackBarService } from '../../shared/services/snackBar.service';

// interface SolarProduct {
//   id: number;
//   category: 'panel' | 'battery' | 'inverter' | 'accessory';
//   title: string;
//   description: string;
//   price: string;
//   image: string;
//   link?: string;
//   highlights?: string[];
//   specs?: Record<string, string>;
// }

// @Component({
//   selector: 'app-energie',
//   standalone: true,
//   imports: [CommonModule, FormsModule, TranslateModule, CartComponent],
//   templateUrl: './energie.component.html',
//   styleUrl: './energie.component.scss'
// })
// export class EnergieComponent implements  OnInit , OnDestroy {


//   // Pour indiquer le chargement (spinner)
//     loadData: boolean = false;
//   // Pour gérer les subscriptions et éviter les memory leaks
//     private destroy$ = new Subject<void>();
//     private  baseService= inject(RootService)
//     private snackbar= inject(SnackBarService)
  
//     ngOnDestroy(): void {
//       this.destroy$.next();
//       this.destroy$.complete();
//     }
  
//       ngOnInit(): void {
//       }


//   constructor(private cartService: CartService) {}
//   bgOffset = 0;

//   filter: 'all' | SolarProduct['category'] = 'all';
//   query = '';

//   selectedProduct: SolarProduct | null = null;

//   products: SolarProduct[] = [
//     {
//       id: 1,
//       category: 'panel',
//       title: 'Panneau Solaire Monocristallin 550W',
//       description: 'Haute efficacité, idéal pour installations résidentielles ou industrielles.',
//       price: '165 000 FCFA',
//       image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=80',
//       link: 'https://www.amazon.com/solar-panels',
//       highlights: ['Cellules monocristallines', 'Rendement 21%', 'Durée de vie 25 ans'],
//       specs: { Puissance: '550W', Tension: '41V', Dimensions: '2279 x 1134 mm' }
//     },
//     {
//       id: 2,
//       category: 'battery',
//       title: 'Batterie Lithium 5KWh — 48V',
//       description: 'Stockage longue durée, sécurité BMS, idéale pour autonomie solaire.',
//       price: '690 000 FCFA',
//       image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80',
//       link: 'https://www.amazon.com/lifepo4-battery',
//       highlights: ['Technologie LiFePO4', '6000 cycles', 'Protection BMS'],
//       specs: { Capacité: '5KWh', Tension: '48V', Cycles: '6000 cycles' }
//     },
//     {
//       id: 3,
//       category: 'inverter',
//       title: 'Onduleur Hybride 5KW MPPT',
//       description: 'Compatible réseau, gestion intelligente charge/solaire/batterie.',
//       price: '350 000 FCFA',
//       image: 'https://i.pinimg.com/1200x/da/c5/ba/dac5ba9b284d64d3c0c1aae10f52678a.jpg',
//       link: 'https://www.amazon.com/solar-inverter',
//       highlights: ['MPPT 120A', 'Mode hybride', 'Écran LCD'],
//       specs: { Puissance: '5000W', Tension: '48V', MPPT: '120A' }
//     },
//     {
//       id: 4,
//       category: 'accessory',
//       title: 'Kit Câbles Solaires + Connecteurs MC4',
//       description: 'Câbles 4mm² haute qualité + connecteurs étanches.',
//       price: '18 000 FCFA',
//       image: 'https://i.pinimg.com/1200x/db/18/60/db1860142120734da4c2fb33e0fb440a.jpg',
//       link: 'https://www.amazon.com/mc4-kit',
//       highlights: ['Norme IP67', 'Haute conductivité', 'Résistant UV'],
//       specs: { Section: '4mm²', Longueur: '5m', Type: 'MC4' }
//     },
//     {
//       id: 5,
//       category: 'panel',
//       title: 'Mini Panneau Solaire Portable 100W',
//       description: 'Idéal camping, recharge powerbank, autonome et léger.',
//       price: '45 000 FCFA',
//       image: 'https://i.pinimg.com/1200x/c1/09/e6/c109e6f6ab30ff323a5ed257fb3a7573.jpg',
//       link: 'https://www.amazon.com/portable-solar-panel',
//       highlights: ['Portable', 'USB 5V/12V', 'Résistant outdoor'],
//       specs: { Puissance: '100W', Poids: '2.5kg', Format: 'pliable' }
//     }
//   ];

//   get visibleProducts(): SolarProduct[] {
//     let list = this.filter === 'all'
//       ? this.products
//       : this.products.filter(p => p.category === this.filter);

//     if (this.query.trim().length > 0) {
//       list = list.filter(p =>
//         p.title.toLowerCase().includes(this.query.toLowerCase()) ||
//         p.description.toLowerCase().includes(this.query.toLowerCase())
//       );
//     }

//     return list;
//   }

//   openDetail(p: SolarProduct) {
//     this.selectedProduct = p;
//     document.body.style.overflow = 'hidden';
//   }

//   closeDetail() {
//     this.selectedProduct = null;
//     document.body.style.overflow = '';
//   }

//   @HostListener('window:scroll')
//   onScroll() {
//     const sc = window.scrollY || 0;
//     this.bgOffset = sc * 0.25;
//     document.documentElement.style.setProperty('--bg-offset', `${this.bgOffset}px`);
//   }

//   delayForIndex(i: number) {
//     return `${i * 0.06}s`;
//   }

//       cart: { product: any, quantity: number }[] = [];


// //   addToCart(product: any) {
// //   this.cartService.addToCart(product);
// // }

//     addToCart(product: any) {
//     const existing = this.cart.find(c => c.product.id === product.id);
//     if(existing) {
//       existing.quantity++;
//     } else {
//       this.cart.push({ product, quantity: 1 });
//     }
//         this.cartService.addToCart(product);

//   }






// getEnergie() {
//   this.loadData = true;
//   console.log('Chargement des accessoires...');
//   return this.baseService
//     .all('accessories')
//     .pipe(takeUntil(this.destroy$))
//     .subscribe(
//       (data: any) => {
//         this.loadData = false;
//         console.log('Accessoires chargés :', data);

//         if (data && data.length > 0) {
//           this.products = data;
//         } else {
//           this.products = [];
//         }
//       },
//       (error) => {
//         this.loadData = false;
//         console.error('Erreur lors du chargement des accessoires :', error);
//       }
//     );
// }

// }

import { Component, HostListener, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CartService } from '../../shared/services/cart.service';
import { Subject, takeUntil } from 'rxjs';
import { SnackBarService } from '../../shared/services/snackBar.service';
import { RootService } from '../../shared/services/root.service';

const STORAGE_BASE = 'https://bo.itsloneed.com/storage/';

// Slug(s) de la catégorie énergie dans ton API
const ENERGIE_SLUGS = ['energie', 'energy', 'solar', 'solaire', 'energie-solaire'];

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
  selector: 'app-energie',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './energie.component.html',
  styleUrl: './energie.component.scss'
})
export class EnergieComponent implements OnDestroy, OnInit {

  loadData = false;
  products: ApiProduct[] = [];
  selectedProduct: ApiProduct | null = null;
  cart: { product: ApiProduct; quantity: number }[] = [];
  bgOffset = 0;
  query = '';

  filter = 'all';
  subFilters: { key: string; label: string }[] = [
    { key: 'all', label: 'Tous' }
  ];

  private destroy$    = new Subject<void>();
  private baseService = inject(RootService);
  private snackbar    = inject(SnackBarService);
  private translate   = inject(TranslateService);
  constructor(public cartService: CartService) {}

  ngOnInit(): void {
    this.getEnergie();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // ─── Chargement produits énergie ─────────────────────────────────────────────
  getEnergie(): void {
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

          // Garder uniquement la catégorie énergie
          this.products = data.filter(p =>
            p.category && ENERGIE_SLUGS.includes(p.category.slug)
          );

          this.buildSubFilters(this.products);
        },
        error: (err) => {
          this.loadData = false;
          console.error('Erreur chargement énergie :', err);
        }
      });
  }

  // ─── Filtres depuis sous-catégories ─────────────────────────────────────────
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

    this.subFilters = [{ key: 'all', label: 'Tous' }, ...extras];
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

  getCategoryName(p: ApiProduct): string {
    return p.category?.name?.[this.lang] ?? p.category?.name?.['fr'] ?? '';
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
    return this.products.filter(p => {
      const matchFilter = this.filter === 'all' || p.sub_category?.slug === this.filter;
      const matchQuery  = !this.query ||
        this.getTitle(p).toLowerCase().includes(this.query.toLowerCase());
      return matchFilter && matchQuery;
    });
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