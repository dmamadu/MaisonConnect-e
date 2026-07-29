import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { RootService } from '../../shared/services/root.service';

const STORAGE_BASE = 'https://admin.itsloneed.com/storage/';

interface ApiProduct {
  id: number;
  title: { fr: string; en: string } | string;
  description: { fr: string; en: string } | string;
  price: string;
  image: string;
  category: { id: number; slug: string; name: { fr: string; en: string } };
}

interface GridCard {
  product: ApiProduct | null;
  categorySlug: string;
  categoryRoute: string;
  label: string;
  fallbackImage: string;
}

@Component({
  selector: 'app-produits-grid-domotique',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink],
  template: `
    <section class="slide-section bg-white dark:bg-black py-4 px-4 transition-colors duration-300">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">

          <!-- Skeletons chargement -->
          <ng-container *ngIf="loading">
            <div *ngFor="let _ of [1,2,3,4]"
                 class="min-h-[200px] md:h-[35vh] rounded-3xl bg-gray-100 dark:bg-zinc-800 animate-pulse">
            </div>
          </ng-container>

          <!-- 4 cartes produits -->
          <ng-container *ngIf="!loading">
            <div *ngFor="let card of cards"
                 [routerLink]="card.categoryRoute"
                 class="relative rounded-3xl overflow-hidden cursor-pointer
                        group transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl
                        min-h-[200px] md:h-[35vh] bg-zinc-900">

              <!-- Image produit ou repli catégorie -->
              <img [src]="card.product ? imageUrl(card.product.image) : card.fallbackImage"
                   [alt]="card.product ? getTitle(card.product) : card.label"
                   class="absolute inset-0 w-full h-full object-cover
                          group-hover:scale-105 transition-transform duration-700 ease-out"
                   (error)="onImgError($event, card)" />

              <!-- Overlay gradient -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10"></div>

              <!-- Contenu bas de carte -->
              <div class="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                <!-- Badge catégorie -->
                <span class="inline-block text-[10px] font-bold uppercase tracking-widest
                             text-[#42B7C4] mb-1.5">
                  {{ card.label }}
                </span>

                <!-- Titre produit -->
                <h3 class="text-sm md:text-base font-semibold text-white leading-snug mb-3
                           overflow-hidden" style="display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical">
                  {{ card.product ? getTitle(card.product) : ('Découvrir ' + card.label) }}
                </h3>

                <!-- Bouton -->
                <a [routerLink]="card.categoryRoute"
                   (click)="$event.stopPropagation()"
                   class="inline-flex items-center gap-1.5 min-h-[40px]
                          bg-white/15 hover:bg-[#0097A7] backdrop-blur-sm
                          border border-white/30 hover:border-[#0097A7]
                          text-white text-xs font-semibold
                          px-4 py-2.5 rounded-full
                          transition-all duration-300">
                  Voir les modèles
                  <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>
          </ng-container>

        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ProduitsGridDomotiqueComponent implements OnInit, OnDestroy {

  loading = true;
  cards: GridCard[] = [
    { product: null, categorySlug: 'securite',   categoryRoute: '/securite',   label: 'Sécurité Électronique', fallbackImage: 'https://i.pinimg.com/1200x/3b/2e/f2/3b2ef28bfb6d62e21e88f1c1c5f12345.jpg' },
    { product: null, categorySlug: 'smart-home', categoryRoute: '/domotique',  label: 'Domotique',             fallbackImage: 'https://i.pinimg.com/1200x/fa/09/26/fa0926e1a56aaa1c1d5eb8bb84f3f29f.jpg' },
    { product: null, categorySlug: 'energie',    categoryRoute: '/energie',    label: 'Énergie Solaire',       fallbackImage: 'https://i.pinimg.com/1200x/e4/4d/a5/e44da5f0251f003cb6e5a3054b24e670.jpg' },
    { product: null, categorySlug: 'finitions',  categoryRoute: '/finitions',  label: 'Finitions Premium',     fallbackImage: 'https://i.pinimg.com/1200x/7b/12/4f/7b124f42aefb35999bab0f52ebf07e85.jpg' },
  ];

  private destroy$ = new Subject<void>();
  private rootService = inject(RootService);
  private translate = inject(TranslateService);

  ngOnInit(): void {
    this.rootService.all('products').pipe(takeUntil(this.destroy$)).subscribe({
      next: (response: any) => {
        const all: ApiProduct[] = Array.isArray(response) ? response : (response?.data ?? []);

        const bySlugs = (slugs: string[]) =>
          all.filter(p => slugs.includes(p.category?.slug?.toLowerCase() ?? ''));

        const securite  = bySlugs(['securite', 'security', 'electronics', 'electronic-security']);
        const domotique = bySlugs(['smart-home', 'domotics', 'home-automation', 'domotique']);
        const energie   = bySlugs(['energie', 'energy', 'solar', 'solaire', 'energie-solaire']);
        const finitions = bySlugs(['finitions', 'finition', 'luxury', 'luxe', 'finishing', 'prestations']);

        this.cards[0].product = securite[0]  ?? null;
        this.cards[1].product = domotique[0] ?? null;
        this.cards[2].product = energie[0]   ?? null;
        this.cards[3].product = finitions[0] ?? null;

        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getTitle(product: ApiProduct): string {
    const lang = (this.translate.currentLang || 'fr') as 'fr' | 'en';
    if (typeof product.title === 'string') return product.title;
    return product.title[lang] ?? product.title['fr'];
  }

  imageUrl(image: string): string {
    if (!image) return '';
    return image.startsWith('http') ? image : STORAGE_BASE + image;
  }

  onImgError(event: Event, card: GridCard): void {
    const img = event.target as HTMLImageElement;
    if (img.src !== card.fallbackImage) {
      img.src = card.fallbackImage;
    } else {
      img.style.display = 'none';
    }
  }
}

