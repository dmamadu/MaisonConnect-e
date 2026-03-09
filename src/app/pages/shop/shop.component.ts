// import { CommonModule } from '@angular/common';
// import { Component, inject, OnDestroy, OnInit } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { CartComponent } from '../cart/cart.component';
// import { CartService } from '../../shared/services/cart.service';
// import { TranslateModule } from '@ngx-translate/core';
// import { Subject, takeUntil } from 'rxjs';
// import { RootService } from '../../shared/services/root.service';
// import { SnackBarService } from '../../shared/services/snackBar.service';
// import { CategoryService } from '../../shared/services/category.service';

// interface Product {
//   id: number;
//   category: 'securite' | 'domotique' | 'energie' | 'packs' | 'accessory';
//   title: string;
//   description: string;
//   price: string;
//   image: string;
//   link?: string;
//   highlights?: string[];
//   specs?: Record<string, string>;
// }

// @Component({
//   selector: 'app-shop',
//   standalone: true,
//   imports: [CommonModule,FormsModule,CartComponent,TranslateModule],
//   templateUrl: './shop.component.html',
//   styleUrls: ['./shop.component.scss'],
// })
// export class ShopComponent implements  OnInit , OnDestroy {
//   filter: string = 'all';
//   query: string = '';
//     loadData: boolean = false;
//     private destroy$ = new Subject<void>();
//     private  baseService= inject(RootService)
//     private snackbar= inject(SnackBarService)
//     private categoryService= inject(CategoryService)
  
//     ngOnDestroy(): void {
//       this.destroy$.next();
//       this.destroy$.complete();
//     }
  
//       ngOnInit(): void {
//       }


//         getProduits() {
//           this.loadData = true;
//           console.log('Chargement des produits...');
//           return this.baseService
//             .all('products')
//             .pipe(takeUntil(this.destroy$))
//             .subscribe(
//               (data: any) => {
//                 this.loadData = false;
//                 console.log('Accessoires chargés :', data);
        
//                 if (data && data.length > 0) {
//                   this.products = data;
//                 } else {
//                   this.products = [];
//                 }
//               },
//               (error) => {
//                 this.loadData = false;
//                 console.error('Erreur lors du chargement des accessoires :', error);
//               }
//             );
//         }


 
        
//     loadCategories() {
//     this.loadData = true;
//     this.categoryService.getCategories().subscribe({
//     next: (data) => {
//       this.categories = data;
//       this.loadData = false;
//     },
//     error: () => {
//       this.loadData = false;
//     }
//   });
// }


//   selectedProduct?: Product;
//   constructor(public cartService: CartService) {}
//   products: Product[] = [
//     {
//       id: 1,
//       category: 'securite',
//       title: 'Produit X',
//       description: 'Caméra de sécurité haute définition pour la surveillance intérieure et extérieure.',
//       price: '120 CFA',
//       image: 'assets/images/products/1.png',
//       highlights: ['HD 1080p', 'Vision nocturne', 'Résistant aux intempéries'],
//       specs: { Marque: 'SecureCam', Connexion: 'WiFi', Garantie: '2 ans' },
//       link: '#'
//     },
//     {
//       id: 2,
//       category: 'domotique',
//       title: 'Produit Y',
//       description: 'Contrôlez votre maison avec votre voix et automatisez vos routines.',
//       price: '80 CFA',
//       image: 'assets/images/products/2.png',
//       highlights: ['Contrôle vocal', 'Compatibilité multi-appareils', 'Mises à jour automatiques'],
//       specs: { Marque: 'HomeAI', Connectivité: 'WiFi', Langue: 'FR' },
//       link: '#'
//     },
//     {
//       id: 3,
//       category: 'energie',
//       title: 'Produit Z',
//       description: 'Panneau solaire autonome pour alimentation d\'appareils et recharge de batteries.',
//       price: '150 CFA',
//       image: 'assets/images/products/3.png',
//       highlights: ['100W', 'Polycristallin', 'Résistant aux UV'],
//       specs: { Marque: 'SolarTech', Tension: '12V', Garantie: '5 ans' },
//       link: '#'
//     },
//     {
//       id: 4,
//       category: 'packs',
//       title: 'Produit A',
//       description: 'Kit complet pour automatiser votre maison dès l\'installation.',
//       price: '350 CFA',
//       image: 'assets/images/products/4.png',
//       highlights: ['Assistant vocal', 'Caméra', 'Capteurs de mouvement'],
//       specs: { Marque: 'SmartHome', NombreAppareils: '10', Garantie: '3 ans' },
//       link: '#'
//     },
//     {
//       id: 5,
//       category: 'accessory',
//       title: 'Produit B',
//       description: 'Batterie externe pour vos équipements solaires et domotiques.',
//       price: '50 CFA',
//       image: 'assets/images/products/5.jpg',
//       highlights: ['10000 mAh', 'Charge rapide', 'Compact'],
//       specs: { Marque: 'PowerX', Type: 'Li-ion', Garantie: '1 an' },
//       link: '#'
//     },
//   ];
//   get visibleProducts() {
//     return this.products.filter(p =>
//       (this.filter === 'all' || p.category === this.filter) &&
//       (!this.query || p.title.toLowerCase().includes(this.query.toLowerCase()))
//     );
//   }
//   openDetail(product: Product) {
//     this.selectedProduct = product;
//   }
//   closeDetail() {
//     this.selectedProduct = undefined;
//   }

//   delayForIndex(i: number) {
//     return `${i * 100}ms`;
//   }


//     cart: { product: Product, quantity: number }[] = [];

//     addToCart(product: any) {
//     const existing = this.cart.find(c => c.product.id === product.id);
//     if(existing) {
//       existing.quantity++;
//     } else {
//       this.cart.push({ product, quantity: 1 });
//     }
//         this.cartService.addToCart(product);

//   }

//   categories = [
//   { key: 'all', label: 'shop.categories.all' },
//   { key: 'securite', label: 'shop.categories.securite' },
//   { key: 'domotique', label: 'shop.categories.domotique' },
//   { key: 'energie', label: 'shop.categories.energie' },,
// ];
// }

import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartComponent } from '../cart/cart.component';
import { CartService } from '../../shared/services/cart.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';
import { RootService } from '../../shared/services/root.service';
import { SnackBarService } from '../../shared/services/snackBar.service';

const STORAGE_BASE = 'https://bo.itsloneed.com/storage/';

// ─── Interfaces alignées sur la réponse API ───────────────────────────────────
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
  category: {
    id: number;
    slug: string;
    name: { fr: string; en: string };
  };
  sub_category: any | null;
  images: any[];
}

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, FormsModule, CartComponent, TranslateModule],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit, OnDestroy {

  filter: string = 'all';
  query: string = '';
  loadData: boolean = false;
  products: ApiProduct[] = [];
  selectedProduct?: ApiProduct;
  cart: { product: ApiProduct; quantity: number }[] = [];

  // Catégories construites dynamiquement depuis l'API
  categories: { key: string; label: string }[] = [
    { key: 'all', label: 'shop.categories.all' }
  ];

  private destroy$    = new Subject<void>();
  private baseService = inject(RootService);
  private snackbar    = inject(SnackBarService);
  private translate   = inject(TranslateService);
  constructor(public cartService: CartService) {}

  ngOnInit(): void {
    this.getProduits();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // ─── Chargement des produits ────────────────────────────────────────────────
  getProduits(): void {
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

          this.products = data;
          this.buildCategories(data);
        },
        error: (err) => {
          this.loadData = false;
          console.error('Erreur chargement produits :', err);
          // this.snackbar.error('Impossible de charger les produits.');
        }
      });
  }

  // ─── Construire les filtres depuis les catégories des produits ──────────────
  private buildCategories(products: ApiProduct[]): void {
    const seen = new Set<number>();
    const extras: { key: string; label: string }[] = [];

    for (const p of products) {
      if (p.category && !seen.has(p.category.id)) {
        seen.add(p.category.id);
        extras.push({
          key: p.category.slug,
          label: this.getCategoryName(p.category)
        });
      }
    }

    this.categories = [{ key: 'all', label: 'shop.categories.all' }, ...extras];
  }

  // ─── Helpers multilingues ────────────────────────────────────────────────────
  private get lang(): 'fr' | 'en' {
    return (this.translate.currentLang || 'fr') as 'fr' | 'en';
  }

  getTitle(product: ApiProduct): string {
    return product.title[this.lang] ?? product.title['fr'];
  }

  getDescription(product: ApiProduct): string {
    const raw = product.description[this.lang] ?? product.description['fr'] ?? '';
    // Supprimer les balises HTML pour l'affichage dans les cartes
    return raw.replace(/<[^>]*>/g, '');
  }

  getDescriptionHtml(product: ApiProduct): string {
    return product.description[this.lang] ?? product.description['fr'] ?? '';
  }

  getCategoryName(category: { name: { fr: string; en: string } }): string {
    return category?.name?.[this.lang] ?? category?.name?.['fr'] ?? '';
  }

  getImageUrl(path: string): string {
    if (!path) return 'assets/images/placeholder.png';
    if (path.startsWith('http')) return path;
    return STORAGE_BASE + path;
  }

  formatPrice(price: string): string {
    if (!price) return '';
    const num = parseFloat(price);
    return isNaN(num) ? price : num.toLocaleString('fr-FR') + ' FCFA';
  }

  onImageError(event: Event): void {
    (event.target as HTMLImageElement).src = 'assets/images/placeholder.png';
  }

  // ─── Filtrage ────────────────────────────────────────────────────────────────
  get visibleProducts(): ApiProduct[] {
    return this.products.filter(p => {
      const matchCat = this.filter === 'all' || p.category?.slug === this.filter;
      const matchQuery = !this.query ||
        this.getTitle(p).toLowerCase().includes(this.query.toLowerCase());
      return matchCat && matchQuery;
    });
  }

  // ─── Détail produit ──────────────────────────────────────────────────────────
  openDetail(product: ApiProduct): void {
    this.selectedProduct = product;
  }

  closeDetail(): void {
    this.selectedProduct = undefined;
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

  delayForIndex(i: number): string {
    return `${i * 100}ms`;
  }
}
