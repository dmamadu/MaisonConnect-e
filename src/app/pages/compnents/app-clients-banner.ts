import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { BaseService } from '../../core/services/base.service';

const STORAGE_BASE = 'https://bo.itsloneed.com/storage/';

@Component({
  selector: 'app-clients-banner',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
<section class="relative py-16 md:py-24 bg-white dark:bg-slate-900 overflow-hidden transition-colors duration-300">

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
    <div class="text-center">
      <div class="inline-block mb-6">
        <div class="flex items-center gap-3 bg-[#0097A7] px-6 py-3 rounded-full">
          <div class="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <span class="text-white text-sm font-medium tracking-wider">
            {{ 'Clients.badge' | translate }}
          </span>
        </div>
      </div>

      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        {{ 'Clients.title' | translate }}
      </h2>

      <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
        {{ 'Clients.subtitle' | translate }}
      </p>
    </div>
  </div>

  <!-- Scrolling Banner -->
  <div class="relative">
    <!-- Gradient Overlays -->
    <div class="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white dark:from-slate-900 to-transparent z-10 pointer-events-none"></div>
    <div class="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-slate-900 to-transparent z-10 pointer-events-none"></div>

    <!-- Loading skeleton -->
    <div *ngIf="isLoading" class="flex gap-6 px-8 overflow-hidden">
      <div *ngFor="let i of [1,2,3,4,5]"
           class="flex-shrink-0 w-44 h-28 bg-gray-100 dark:bg-slate-800 rounded-2xl animate-pulse">
      </div>
    </div>

    <!-- Scrolling Container -->
    <div *ngIf="!isLoading && clients.length > 0" class="flex overflow-hidden">
      <div class="flex animate-scroll">

        <!-- First Set -->
        <div *ngFor="let client of clients"
             class="flex-shrink-0 mx-6 md:mx-10 flex items-center justify-center">
          <div class="logo-card bg-white dark:bg-slate-800 rounded-2xl px-8 py-6
                      shadow-sm hover:shadow-lg border border-gray-100 dark:border-slate-700
                      hover:border-[#0097A7] dark:hover:border-[#0097A7]
                      transition-all duration-300 group cursor-default">
            <img
              [src]="getLogoUrl(client.logo)"
              [alt]="client.name"
              class="h-14 md:h-20 w-auto max-w-[160px] object-contain
                     transition-transform duration-300 group-hover:scale-105"
              (error)="onImageError($event)"
            />
          </div>
        </div>

        <!-- Duplicate Set for Seamless Loop -->
        <div *ngFor="let client of clients"
             class="flex-shrink-0 mx-6 md:mx-10 flex items-center justify-center">
          <div class="logo-card bg-white dark:bg-slate-800 rounded-2xl px-8 py-6
                      shadow-sm hover:shadow-lg border border-gray-100 dark:border-slate-700
                      hover:border-[#0097A7] dark:hover:border-[#0097A7]
                      transition-all duration-300 group cursor-default">
            <img
              [src]="getLogoUrl(client.logo)"
              [alt]="client.name"
              class="h-14 md:h-20 w-auto max-w-[160px] object-contain
                     transition-transform duration-300 group-hover:scale-105"
              (error)="onImageError($event)"
            />
          </div>
        </div>

      </div>
    </div>

    <!-- Empty state -->
    <div *ngIf="!isLoading && clients.length === 0"
         class="text-center py-8 text-gray-400 dark:text-slate-500 text-sm">
      Aucun client disponible.
    </div>
  </div>

</section>
  `,
  styles: [`
    @keyframes scroll {
      0%   { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-scroll {
      animation: scroll 40s linear infinite;
    }
    .animate-scroll:hover {
      animation-play-state: paused;
    }
    @media (max-width: 768px) {
      .animate-scroll { animation-duration: 30s; }
    }
  `]
})
export class ClientsBannerComponent implements OnInit {

  clients: any[] = [];
  isLoading: boolean = false;

  private baseService = inject(BaseService);
  private _changeDetectorRef = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.getClients();
  }

  getClients(): void {
    this.isLoading = true;
    this.baseService.all('clients').subscribe({
      next: (response: any) => {
        const data = response?.data || [];
        this.clients = data.filter((c: any) => c.is_active);
        this.isLoading = false;
        this._changeDetectorRef.markForCheck();
      },
      error: (err: any) => {
        console.error('Erreur chargement clients :', err);
        this.isLoading = false;
        this._changeDetectorRef.markForCheck();
      }
    });
  }

  getLogoUrl(path: string): string {
    if (!path) return 'assets/images/placeholder-logo.png';
    if (path.startsWith('http')) return path;
    return STORAGE_BASE + path;
  }

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.src = 'assets/images/placeholder-logo.png';
  }
}