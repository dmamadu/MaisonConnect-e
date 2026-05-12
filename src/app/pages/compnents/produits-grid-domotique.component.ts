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
}

@Component({
  selector: 'app-produits-grid-domotique',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink],
  template: `
    <section class="bg-white dark:bg-black py-4 px-4 transition-colors duration-300">
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

              <!-- Image produit -->
              <img *ngIf="card.product"
                   [src]="imageUrl(card.product.image)"
                   [alt]="getTitle(card.product)"
                   class="absolute inset-0 w-full h-full object-cover
                          group-hover:scale-105 transition-transform duration-700 ease-out"
                   (error)="onImgError($event)" />

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
                  {{ card.product ? getTitle(card.product) : card.label }}
                </h3>

                <!-- Bouton -->
                <a [routerLink]="card.categoryRoute"
                   (click)="$event.stopPropagation()"
                   class="inline-flex items-center gap-1.5
                          bg-white/15 hover:bg-[#0097A7] backdrop-blur-sm
                          border border-white/30 hover:border-[#0097A7]
                          text-white text-xs font-semibold
                          px-4 py-2 rounded-full
                          transition-all duration-300">
                  Voir les modèles
                  <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>
          </ng-container>

          <!-- 5e carte : Support — pleine largeur -->
          <div class="relative bg-white dark:bg-black rounded-3xl overflow-hidden
                      group cursor-pointer transition-all duration-500 hover:scale-[1.01]
                      hover:shadow-2xl border-2 border-gray-200 dark:border-zinc-800
                      p-6 md:p-8 md:col-span-2
                      flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div class="relative flex-shrink-0">
              <div class="w-16 h-16 md:w-20 md:h-20 rounded-full
                          bg-gradient-to-br from-gray-100 to-gray-200 dark:from-zinc-800 dark:to-zinc-900
                          border-4 border-black dark:border-white
                          flex items-center justify-center shadow-xl
                          group-hover:scale-110 transition-transform duration-500 relative">
                <svg class="w-8 h-8 md:w-10 md:h-10 text-black dark:text-white"
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/>
                </svg>
                <div class="absolute inset-0 rounded-full border-2 border-black dark:border-white animate-ping opacity-20"></div>
              </div>
            </div>
            <div class="flex-1 text-center md:text-left">
              <h3 class="text-xl md:text-2xl font-semibold text-black dark:text-white mb-2">
                {{ 'home2.products.support.title' | translate }}
              </h3>
              <p class="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-lg">
                {{ 'home2.products.support.description' | translate }}
              </p>
            </div>
            <div class="flex-shrink-0">
              <a routerLink="/support">
                <button class="bg-[#0097A7] text-white px-6 py-2.5 rounded-full text-sm font-medium
                               hover:bg-[#42B7C4] transition-all duration-300
                               inline-flex items-center gap-2">
                  {{ 'home2.products.support.cta' | translate }}
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </button>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ProduitsGridDomotiqueComponent implements OnInit, OnDestroy {

  loading = true;
  cards: GridCard[] = [
    { product: null, categorySlug: 'domotique', categoryRoute: '/domotique', label: 'Domotique' },
    { product: null, categorySlug: 'domotique', categoryRoute: '/domotique', label: 'Domotique' },
    { product: null, categorySlug: 'energie',   categoryRoute: '/energie',   label: 'Énergie Solaire' },
    { product: null, categorySlug: 'securite',  categoryRoute: '/securite',  label: 'Sécurité Électronique' },
  ];

  private destroy$ = new Subject<void>();
  private rootService = inject(RootService);
  private translate = inject(TranslateService);

  ngOnInit(): void {
    this.rootService.all('products').pipe(takeUntil(this.destroy$)).subscribe({
      next: (response: any) => {
        const all: ApiProduct[] = Array.isArray(response) ? response : (response?.data ?? []);

        const bySlug = (slug: string) =>
          all.filter(p => p.category?.slug?.toLowerCase() === slug);

        const domotique = bySlug('domotics');
        const energie   = bySlug('energie');
        const securite  = bySlug('electronics');

        this.cards[0].product = domotique[0] ?? null;
        this.cards[1].product = domotique[1] ?? domotique[0] ?? null;
        this.cards[2].product = energie[0] ?? null;
        this.cards[3].product = securite[0] ?? null;

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

  onImgError(event: Event): void {
    (event.target as HTMLImageElement).style.display = 'none';
  }
}

// import { Component, OnInit, OnDestroy, ViewChild, ElementRef, NgZone } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { TranslateModule } from '@ngx-translate/core';
// import { RouterLink } from '@angular/router';

// @Component({
//   selector: 'app-produits-grid-domotique',
//   standalone: true,
//   imports: [CommonModule, TranslateModule, RouterLink],
//   template: `
//     <section class="bg-white dark:bg-black py-20 px-4 md:px-8 transition-colors duration-300">
//       <div class="max-w-7xl mx-auto">

//         <p class="text-xs font-semibold uppercase tracking-widest text-[#0097A7] mb-3">
//           <!-- {{ 'home2.products.label' | translate }} -->
//         </p>

//         <!-- Slider wrapper -->
//         <div class="relative overflow-hidden rounded-2xl">
//           <div #sliderTrack
//                class="flex gap-4 md:gap-5 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] will-change-transform"
//                [style.transform]="'translateX(-' + (activeSlide * slideWidth) + 'px)'">

//             <!-- ── Caméras de Surveillance ── -->
//             <div class="product-card bg-[#0a0a0a] dark:bg-[#f5f5f5] rounded-2xl p-7 md:p-9
//                         flex-shrink-0 w-[80vw] md:w-[42vw] lg:w-[520px]
//                         min-h-[360px] md:min-h-[400px]
//                         flex flex-col justify-between
//                         cursor-pointer group
//                         transition-transform duration-300 hover:scale-[1.015]">
//               <div>
//                 <span class="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest
//                              bg-[#0097A7]/15 text-[#42B7C4] rounded-full px-3 py-1.5 mb-5">
//                   <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
//                           d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.9L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
//                   </svg>
//                   <!-- {{ 'home2.products.cameras.tag' | translate }} -->
//                 </span>
//                 <h3 class="text-xl md:text-2xl font-bold text-white dark:text-[#0a0a0a] leading-tight mb-2">
//                   {{ 'home2.products.cameras.title' | translate }}
//                 </h3>
//                 <p class="text-sm text-white/55 dark:text-black/55 leading-relaxed">
//                   {{ 'home2.products.cameras.feature1' | translate }}
//                 </p>
//               </div>
//               <div class="flex items-end justify-between mt-6">
//                 <div class="flex flex-col gap-2">
//                   <a routerLink="/shop" class="inline-flex items-center gap-2 bg-[#0097A7] hover:bg-[#42B7C4]
//                                text-white text-xs font-semibold px-4 py-2 rounded-full
//                                transition-colors duration-200">
//                     {{ 'home2.products.cameras.cta1' | translate }}
//                     <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
//                     </svg>
//                   </a>
//                   <a routerLink="/shop" class="inline-flex items-center gap-2 border border-white/20 dark:border-black/20
//                                text-white/70 dark:text-black/70 text-xs font-medium px-4 py-2 rounded-full
//                                hover:border-white/40 dark:hover:border-black/40 transition-colors duration-200">
//                     {{ 'home2.products.cameras.cta2' | translate }}
//                   </a>
//                 </div>
//                 <div class="w-16 h-16 rounded-full bg-white/7 dark:bg-black/7
//                             border border-white/10 dark:border-black/10
//                             flex items-center justify-center
//                             group-hover:scale-110 transition-transform duration-500">
//                   <svg class="w-8 h-8 text-white/80 dark:text-black/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
//                           d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.9L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
//                   </svg>
//                 </div>
//               </div>
//             </div>

//             <!-- ── Interrupteurs Intelligents ── -->
//             <div class="product-card bg-[#f0f0f0] dark:bg-[#1a1a1a] rounded-2xl p-7 md:p-9
//                         flex-shrink-0 w-[80vw] md:w-[42vw] lg:w-[520px]
//                         min-h-[360px] md:min-h-[400px]
//                         flex flex-col justify-between border border-black/8 dark:border-white/8
//                         cursor-pointer group
//                         transition-transform duration-300 hover:scale-[1.015]">
//               <div>
//                 <span class="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest
//                              bg-[#0097A7]/10 text-[#006f7a] dark:text-[#42B7C4] rounded-full px-3 py-1.5 mb-5">
//                   <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
//                           d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
//                   </svg>
//                           <!-- {{ 'home2.products.switches.tag' | translate }} -->
//                 </span>
//                 <h3 class="text-xl md:text-2xl font-bold text-[#0a0a0a] dark:text-white leading-tight mb-2">
//                   {{ 'home2.products.switches.title' | translate }}
//                 </h3>
//                 <p class="text-sm text-black/50 dark:text-white/50 leading-relaxed">
//                   {{ 'home2.products.switches.description' | translate }}
//                 </p>
//               </div>
//               <div class="flex items-end justify-between mt-6">
//                 <a routerLink="/shop" class="inline-flex items-center gap-2 bg-[#0097A7] hover:bg-[#42B7C4]
//                              text-white text-xs font-semibold px-4 py-2 rounded-full
//                              transition-colors duration-200">
//                   {{ 'home2.products.switches.cta' | translate }}
//                   <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
//                   </svg>
//                 </a>
//                 <div class="w-16 h-16 rounded-full bg-black/6 dark:bg-white/6
//                             border border-black/10 dark:border-white/10
//                             flex items-center justify-center
//                             group-hover:scale-110 transition-transform duration-500">
//                   <svg class="w-8 h-8 text-black/70 dark:text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
//                           d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
//                   </svg>
//                 </div>
//               </div>
//             </div>

//             <!-- ── Thermostats Connectés ── -->
//             <div class="product-card bg-[#0a0a0a] dark:bg-[#f5f5f5] rounded-2xl p-7 md:p-9
//                         flex-shrink-0 w-[80vw] md:w-[42vw] lg:w-[520px]
//                         min-h-[360px] md:min-h-[400px]
//                         flex flex-col justify-between
//                         cursor-pointer group
//                         transition-transform duration-300 hover:scale-[1.015]">
//               <div>
//                 <span class="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest
//                              bg-[#0097A7]/15 text-[#42B7C4] rounded-full px-3 py-1.5 mb-5">
//                   <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
//                           d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
//                   </svg>
//                   <!-- {{ 'home2.products.thermostats.tag' | translate }} -->
//                 </span>
//                 <h3 class="text-xl md:text-2xl font-bold text-white dark:text-[#0a0a0a] leading-tight mb-2">
//                   {{ 'home2.products.thermostats.title' | translate }}
//                 </h3>
//                 <p class="text-sm text-white/55 dark:text-black/55 leading-relaxed">
//                   {{ 'home2.products.thermostats.description' | translate }}
//                 </p>
//               </div>
//               <div class="flex items-end justify-between mt-6">
//                 <div class="flex flex-col gap-2">
//                   <a routerLink="/shop" class="inline-flex items-center gap-2 bg-[#0097A7] hover:bg-[#42B7C4]
//                                text-white text-xs font-semibold px-4 py-2 rounded-full
//                                transition-colors duration-200">
//                     {{ 'home2.products.thermostats.cta1' | translate }}
//                     <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
//                     </svg>
//                   </a>
//                   <a routerLink="/shop" class="inline-flex items-center gap-2 border border-white/20 dark:border-black/20
//                                text-white/70 dark:text-black/70 text-xs font-medium px-4 py-2 rounded-full
//                                hover:border-white/40 dark:hover:border-black/40 transition-colors duration-200">
//                     {{ 'home2.products.thermostats.cta2' | translate }}
//                   </a>
//                 </div>
//                 <div class="w-16 h-16 rounded-full bg-white/7 dark:bg-black/7
//                             border border-white/10 dark:border-black/10
//                             flex items-center justify-center
//                             group-hover:scale-110 transition-transform duration-500">
//                   <span class="text-white/80 dark:text-black/80 text-lg font-light">23°</span>
//                 </div>
//               </div>
//             </div>

//             <!-- ── Serrures Intelligentes ── -->
//             <div class="product-card bg-[#f0f0f0] dark:bg-[#1a1a1a] rounded-2xl p-7 md:p-9
//                         flex-shrink-0 w-[80vw] md:w-[42vw] lg:w-[520px]
//                         min-h-[360px] md:min-h-[400px]
//                         flex flex-col justify-between border border-black/8 dark:border-white/8
//                         cursor-pointer group
//                         transition-transform duration-300 hover:scale-[1.015]">
//               <div>
//                 <span class="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest
//                              bg-[#0097A7]/10 text-[#006f7a] dark:text-[#42B7C4] rounded-full px-3 py-1.5 mb-5">
//                   <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
//                           d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
//                   </svg>
//                   <!-- {{ 'home2.products.locks.tag' | translate }} -->
//                 </span>
//                 <h3 class="text-xl md:text-2xl font-bold text-[#0a0a0a] dark:text-white leading-tight mb-2">
//                   {{ 'home2.products.locks.title' | translate }}
//                 </h3>
//                 <p class="text-sm text-black/50 dark:text-white/50 leading-relaxed">
//                   {{ 'home2.products.locks.description' | translate }}
//                 </p>
//               </div>
//               <div class="flex items-end justify-between mt-6">
//                 <div class="flex flex-col gap-2">
//                   <a routerLink="/shop" class="inline-flex items-center gap-2 bg-[#0097A7] hover:bg-[#42B7C4]
//                                text-white text-xs font-semibold px-4 py-2 rounded-full
//                                transition-colors duration-200">
//                     {{ 'home2.products.locks.cta1' | translate }}
//                     <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
//                     </svg>
//                   </a>
//                   <a routerLink="/shop" class="inline-flex items-center gap-2 border border-black/15 dark:border-white/15
//                                text-black/60 dark:text-white/60 text-xs font-medium px-4 py-2 rounded-full
//                                hover:border-black/30 dark:hover:border-white/30 transition-colors duration-200">
//                     {{ 'home2.products.locks.cta2' | translate }}
//                   </a>
//                 </div>
//                 <div class="w-16 h-16 rounded-full bg-black/6 dark:bg-white/6
//                             border border-black/10 dark:border-white/10
//                             flex items-center justify-center
//                             group-hover:scale-110 transition-transform duration-500">
//                   <svg class="w-8 h-8 text-black/70 dark:text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
//                           d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
//                   </svg>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>

//         <!-- Progress bar -->
//         <div class="h-[2px] bg-black/8 dark:bg-white/8 rounded-full mt-5 overflow-hidden">
//           <div class="h-full bg-[#0097A7] rounded-full transition-all duration-700 ease-out"
//                [style.width.%]="(activeSlide + 1) * 25">
//           </div>
//         </div>

//         <!-- Controls: dots + arrows -->
//         <div class="flex items-center justify-between mt-4">
//           <div class="flex items-center gap-2">
//             <button *ngFor="let i of [0,1,2,3]"
//                     (click)="goTo(i)"
//                     class="rounded-full transition-all duration-300 cursor-pointer"
//                     [style.width]="activeSlide === i ? '20px' : '6px'"
//                     [style.height]="'6px'"
//                     [style.background]="activeSlide === i ? '#0097A7' : 'rgba(0,0,0,0.18)'">
//             </button>
//           </div>
//           <div class="flex gap-2">
//             <button (click)="move(-1)"
//                     class="w-9 h-9 rounded-full border border-black/12 dark:border-white/12
//                            bg-white dark:bg-black text-black/55 dark:text-white/55
//                            flex items-center justify-center
//                            hover:border-[#0097A7] hover:text-[#0097A7]
//                            transition-colors duration-200">
//               <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
//               </svg>
//             </button>
//             <button (click)="move(1)"
//                     class="w-9 h-9 rounded-full border border-black/12 dark:border-white/12
//                            bg-white dark:bg-black text-black/55 dark:text-white/55
//                            flex items-center justify-center
//                            hover:border-[#0097A7] hover:text-[#0097A7]
//                            transition-colors duration-200">
//               <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
//               </svg>
//             </button>
//           </div>
//         </div>

//         <!-- ── Support Card ── -->
//         <div class="mt-5 bg-white dark:bg-[#111] border border-black/8 dark:border-white/8
//                     rounded-2xl p-7 md:p-9
//                     flex flex-col md:flex-row items-center gap-6 md:gap-10
//                     group cursor-pointer
//                     transition-all duration-300 hover:border-[#0097A7]/30">

//           <div class="relative flex-shrink-0">
//             <div class="w-16 h-16 rounded-full border-2 border-black dark:border-white
//                         flex items-center justify-center
//                         group-hover:scale-105 transition-transform duration-500">
//               <svg class="w-7 h-7 text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
//                       d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/>
//               </svg>
//             </div>
//             <div class="absolute inset-0 rounded-full border-2 border-black dark:border-white
//                         animate-ping-slow opacity-15"></div>
//           </div>

//           <div class="flex-1 text-center md:text-left">
//             <h3 class="text-lg md:text-xl font-bold text-black dark:text-white mb-1">
//               {{ 'home2.products.support.title' | translate }}
//             </h3>
//             <p class="text-sm text-black/50 dark:text-white/50 leading-relaxed max-w-md">
//               {{ 'home2.products.support.description' | translate }}
//             </p>
//           </div>

//           <a routerLink="/support" class="flex-shrink-0">
//             <button class="inline-flex items-center gap-2 bg-[#0097A7] hover:bg-[#42B7C4]
//                          text-white text-sm font-semibold px-5 py-2.5 rounded-full
//                          transition-colors duration-200">
//               {{ 'home2.products.support.cta' | translate }}
//               <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
//               </svg>
//             </button>
//           </a>
//         </div>

//       </div>
//     </section>
//   `,
//   styles: [`
//     @keyframes ping-slow {
//       0%, 100% { opacity: 0.15; transform: scale(1); }
//       50% { opacity: 0; transform: scale(1.25); }
//     }
//     .animate-ping-slow { animation: ping-slow 2.5s ease-in-out infinite; }
//   `]
// })
// export class ProduitsGridDomotiqueComponent implements OnInit, OnDestroy {
//   @ViewChild('sliderTrack') sliderTrack!: ElementRef<HTMLElement>;

//   activeSlide = 0;
//   slideWidth = 360;
//   private autoTimer: ReturnType<typeof setInterval> | null = null;

//   constructor(private ngZone: NgZone) {}

//   ngOnInit(): void {
//     this.startAutoplay();
//   }

//   ngOnDestroy(): void {
//     this.stopAutoplay();
//   }

//   goTo(index: number): void {
//     this.activeSlide = index;
//     this.recalcSlideWidth();
//     this.resetAutoplay();
//   }

//   move(dir: number): void {
//     this.goTo((this.activeSlide + dir + 4) % 4);
//   }

//   private recalcSlideWidth(): void {
//     if (!this.sliderTrack) return;
//     const card = this.sliderTrack.nativeElement.querySelector('.product-card') as HTMLElement;
//     if (card) {
//       const gap = window.innerWidth >= 768 ? 20 : 16;
//       this.slideWidth = card.offsetWidth + gap;
//     }
//   }

//   private startAutoplay(): void {
//     this.ngZone.runOutsideAngular(() => {
//       this.autoTimer = setInterval(() => {
//         this.ngZone.run(() => {
//           this.activeSlide = (this.activeSlide + 1) % 4;
//           this.recalcSlideWidth();
//         });
//       }, 4000);
//     });
//   }

//   private stopAutoplay(): void {
//     if (this.autoTimer) {
//       clearInterval(this.autoTimer);
//       this.autoTimer = null;
//     }
//   }

//   private resetAutoplay(): void {
//     this.stopAutoplay();
//     this.startAutoplay();
//   }
// }