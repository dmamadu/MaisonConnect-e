import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';
import { RootService } from '../../shared/services/root.service';
import { CartService } from '../../shared/services/cart.service';

const STORAGE_BASE = 'https://admin.itsloneed.com/storage/';
const FINITIONS_SLUGS = ['finitions', 'finition', 'luxury', 'luxe', 'finishing', 'prestations'];

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
  selector: 'app-finitions',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, TranslateModule],
  templateUrl: './finitions.component.html',
  styleUrls: ['./finitions.component.scss'],
})
export class FinitionsComponent implements OnInit, OnDestroy {

  loadData = false;
  products: ApiProduct[] = [];
  selectedProduct: ApiProduct | null = null;
  cart: { product: ApiProduct; quantity: number }[] = [];
  query = '';
  filter = 'all';
  subFilters: { key: string; label: string }[] = [{ key: 'all', label: 'Toutes' }];

  private destroy$ = new Subject<void>();
  private rootService = inject(RootService);
  private translate = inject(TranslateService);
  constructor(public cartService: CartService) {}

  ngOnInit(): void {
    this.load();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private load(): void {
    this.loadData = true;
    this.rootService
      .all('products')
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response: any) => {
          this.loadData = false;
          const data: ApiProduct[] = Array.isArray(response)
            ? response
            : (response?.data ?? []);

          this.products = data.filter(p =>
            p.category && FINITIONS_SLUGS.includes(p.category.slug)
          );

          this.buildSubFilters(this.products);
        },
        error: () => { this.loadData = false; },
      });
  }

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

    this.subFilters = [{ key: 'all', label: 'Toutes' }, ...extras];
  }

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

  get visibleProducts(): ApiProduct[] {
    return this.products.filter(p => {
      const matchFilter = this.filter === 'all' || p.sub_category?.slug === this.filter;
      const matchQuery = !this.query ||
        this.getTitle(p).toLowerCase().includes(this.query.toLowerCase());
      return matchFilter && matchQuery;
    });
  }

  openDetail(p: ApiProduct): void {
    this.selectedProduct = p;
    document.body.style.overflow = 'hidden';
  }

  closeDetail(): void {
    this.selectedProduct = null;
    document.body.style.overflow = '';
  }

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
    return `${0.06 * i}s`;
  }
}
