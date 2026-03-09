// import { Component, HostListener, inject, OnDestroy, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { TranslateModule } from '@ngx-translate/core';
// import { CartService } from '../../shared/services/cart.service';
// import { Subject, takeUntil } from 'rxjs';
// import { SnackBarService } from '../../shared/services/snackBar.service';
// import { RootService } from '../../shared/services/root.service';

// interface Product {
//   id: number;
//   category: 'camera' | 'alarm' | 'nvr';
//   title: string;
//   description: string;
//   price: string;
//   image: string;
//   link?: string;
//   highlights?: string[];
//   specs?: Record<string, string>;
// }

// @Component({
//   selector: 'app-securite',
//   standalone: true,
//   imports: [CommonModule, FormsModule,TranslateModule],
//   templateUrl: './securite.component.html',
//   styleUrl: './securite.component.scss'
// })
// export class SecuriteComponent  implements   OnDestroy , OnInit  {



//   private destroy$ = new Subject<void>();
//   private  baseService= inject(RootService)
//   private snackbar= inject(SnackBarService)   

  
//   // Pour indiquer le chargement (spinner)
//     loadData: boolean = false;


//   ngOnInit(): void {
//   }
//   ngOnDestroy(): void {
//     this.destroy$.next();
//     this.destroy$.complete();
//   }


//   bgOffset = 0;

//   filter: 'all' | Product['category'] = 'all';

//   selectedProduct: Product | null = null;
//   products: Product[] = [
//     {
//       id: 1,
//       category: 'camera',
//       title: `Product 1`,
//       description: `Caméra intérieure/extérieure, audio bidirectionnel et détection de mouvement intelligente.`,
//       price: '29 000 FCFA',
//       image: 'assets/images/products/6.jpg',
//       link: 'https://www.amazon.com/dp/B08XYZEXAMPLE',
//       highlights: [`Vision nocturne`, `Audio bidirectionnel`, `App mobile`],
//       specs: { 'Résolution': '1080p', 'Connexion': 'Wi-Fi', 'Étanchéité': 'IP65' }
//     },
//     {
//       id: 2,
//       category: 'camera',
//       title: `Product 2`,
//       description: `Rotation 360°, zoom optique, idéale pour surveillance extérieur/industriel.`,
//       price: '150 000 FCFA',
//       image: 'assets/images/products/7.jpg',
//       link: 'https://www.amazon.com/dp/B07PTZEXAMPLE',
//       highlights: [`Zoom optique`, `PTZ 360°`, `Contrôle mobile`],
//       specs: { 'Résolution': '4K', 'Zoom': '20x optique', 'Alimentation': 'PoE / 12V' }
//     },
//     {
//       id: 3,
//       category: 'alarm',
//       title: `Kit Alarme S`,
//       description: `Détecteurs d'ouverture, capteurs de mouvement et sirène 120 dB.`,
//       price: '89 000 FCFA',
//       image: 'assets/images/products/8.jpg',
//       link: 'https://www.amazon.com/dp/B07ALARMEXAMPLE',
//       highlights: [`Installation facile`, `Sirène 120dB`, `Notifications mobile`],
//       specs: { 'Détecteurs inclus': '3 portes + 1 mouvement', 'Autonomie': '2 ans', 'Compatibilité': 'Wi-Fi' }
//     },
//     {
//       id: 4,
//       category: 'nvr',
//       title: `Produit 4`,
//       description: `Supporte caméras IP jusqu'à 5MP, accès distant et stockage sécurisé.`,
//       price: '110 000 FCFA',
//       image: 'assets/images/products/9.jpg',
//       link: 'https://www.amazon.com/dp/B08NVREXAMPLE',
//       highlights: [`8 canaux`, `Accès distant`, `Raid/backup`],
//       specs: { 'Entrées': '8 PoE', 'Stockage': '2 x SATA (max 16TB)', 'Sortie': 'HDMI' }
//     },
//     {
//       id: 5,
//       category: 'camera',
//       title: `Product 5`,
//       description: `Bullet camera compacte, vision longue portée et weatherproof.`,
//       price: '45 000 FCFA',
//       image: 'assets/images/products/10.jpg',
//       link: 'https://www.amazon.com/dp/B08BULLET',
//       highlights: [`Longue portée`, `HD 2K`, `IP67`],
//       specs: { 'Résolution': '2K', 'Portée IR': '40m', 'Indice': 'IP67' }
//     }
//   ];

//   get visibleProducts(): Product[] {
//     return this.filter === 'all' ? this.products : this.products.filter(p => p.category === this.filter);
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

//       cart: { product: any, quantity: number }[] = [];
//     constructor(public cartService: CartService) {}
  
  
//       addToCart(product: any) {
//       const existing = this.cart.find(c => c.product.id === product.id);
//       if(existing) {
//         existing.quantity++;
//       } else {
//         this.cart.push({ product, quantity: 1 });
//       }
//           this.cartService.addToCart(product);
//     }

//     getEnergie() {
//       this.loadData = true;
//       console.log('Chargement des accessoires...');
//       return this.baseService
//         .all('accessories')
//         .pipe(takeUntil(this.destroy$))
//         .subscribe(
//           (data: any) => {
//             this.loadData = false;
//             console.log('Accessoires chargés :', data);
    
//             if (data && data.length > 0) {
//               this.products = data;
//             } else {
//               this.products = [];
//             }
//           },
//           (error) => {
//             this.loadData = false;
//             console.error('Erreur lors du chargement des accessoires :', error);
//           }
//         );
//     }
  
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

// Slug(s) de la catégorie sécurité dans ton API
const SECURITE_SLUGS = ['electronics', 'securite', 'security', 'electronic-security'];

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
  selector: 'app-securite',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './securite.component.html',
  styleUrl: './securite.component.scss'
})
export class SecuriteComponent implements OnDestroy, OnInit {

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
    this.getSecurite();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // ─── Chargement produits sécurité ────────────────────────────────────────────
  getSecurite(): void {
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

          // Garder uniquement la catégorie sécurité
          this.products = data.filter(p =>
            p.category && SECURITE_SLUGS.includes(p.category.slug)
          );

          this.buildSubFilters(this.products);
        },
        error: (err) => {
          this.loadData = false;
          console.error('Erreur chargement sécurité :', err);
          // this.snackbar.error('Impossible de charger les produits.');
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