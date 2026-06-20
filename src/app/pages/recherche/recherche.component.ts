import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';
import { RootService } from '../../shared/services/root.service';

const STORAGE_BASE = 'https://admin.itsloneed.com/storage/';

@Component({
  selector: 'app-recherche',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, TranslateModule],
  templateUrl: './recherche.component.html',
  styleUrl: './recherche.component.scss'
})
export class RechercheComponent implements OnInit, OnDestroy {
  query = '';
  products: any[] = [];
  posts: any[] = [];
  loadData = false;
  searched = false;

  private destroy$ = new Subject<void>();
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private baseService = inject(RootService);
  private translate = inject(TranslateService);

  ngOnInit(): void {
    this.route.queryParams.pipe(takeUntil(this.destroy$)).subscribe(params => {
      const q = params['q'] ?? '';
      if (q) {
        this.query = q;
        this.runSearch();
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSubmit(): void {
    if (!this.query.trim()) return;
    this.router.navigate([], { queryParams: { q: this.query.trim() }, queryParamsHandling: 'merge' });
    this.runSearch();
  }

  private runSearch(): void {
    const q = this.query.trim().toLowerCase();
    if (!q) return;
    this.loadData = true;
    this.searched = true;
    this.products = [];
    this.posts = [];

    this.baseService.all<any>('products').pipe(takeUntil(this.destroy$)).subscribe({
      next: (res: any) => {
        const data: any[] = Array.isArray(res) ? res : (res?.data ?? []);
        this.products = data.filter(p => {
          const t = this.extractText(p.title);
          const d = this.extractText(p.description);
          return t.toLowerCase().includes(q) || d.toLowerCase().includes(q);
        });
        this.loadData = false;
      },
      error: () => { this.loadData = false; }
    });

    this.baseService.all<any>('posts').pipe(takeUntil(this.destroy$)).subscribe({
      next: (res: any) => {
        const data: any[] = Array.isArray(res) ? res : (res?.data ?? []);
        this.posts = data.filter(p => {
          const t = this.extractText(p.title);
          const e = this.extractText(p.excerpt ?? p.description ?? '');
          return t.toLowerCase().includes(q) || e.toLowerCase().includes(q);
        });
      },
      error: () => {}
    });
  }

  private extractText(val: any): string {
    if (!val) return '';
    if (typeof val === 'string') return val;
    const lang = this.translate.currentLang || 'fr';
    return val[lang] || val['fr'] || val['en'] || '';
  }

  get totalResults(): number {
    return this.products.length + this.posts.length;
  }

  getTitle(item: any): string { return this.extractText(item?.title); }
  getDescription(item: any): string { return this.extractText(item?.description); }
  getExcerpt(item: any): string { return this.extractText(item?.excerpt ?? item?.description ?? ''); }

  getImageUrl(path: string | null | undefined): string {
    if (!path) return 'assets/images/placeholder.png';
    if (path.startsWith('http')) return path;
    return STORAGE_BASE + path;
  }

  formatPrice(price: string | number | null | undefined): string {
    if (!price) return '';
    const num = typeof price === 'string' ? parseFloat(price.replace(/[^0-9.]/g, '')) : price;
    if (isNaN(num)) return String(price);
    return new Intl.NumberFormat('fr-FR').format(num) + ' FCFA';
  }

  getCategoryName(category: any): string {
    if (!category) return '';
    return this.extractText(category.name ?? category);
  }

  onImageError(event: Event): void {
    (event.target as HTMLImageElement).src = 'assets/images/placeholder.png';
  }
}
