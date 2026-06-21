import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { BaseService } from '../../core/services/base.service';

const STORAGE_BASE = 'https://admin.itsloneed.com/storage/';

@Component({
  selector: 'app-clients-banner',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
<section class="relative bg-black py-12 md:py-16 overflow-hidden transition-colors duration-300">

  <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>

  <!-- Background glow -->
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px]
              bg-[#0097A7]/5 rounded-full blur-3xl pointer-events-none"></div>

  <!-- Header -->
  <div class="relative z-10 max-w-3xl mx-auto px-6 text-center mb-10 md:mb-12">
    <p class="text-xs font-semibold tracking-[0.2em] uppercase text-[#0097A7] mb-4">
      {{ 'Clients.badge' | translate }}
    </p>
    <h2 class="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
      {{ 'Clients.title' | translate }}
    </h2>
    <p class="text-sm md:text-base text-gray-400 font-light">
      {{ 'Clients.subtitle' | translate }}
    </p>
  </div>

  <!-- Skeleton -->
  <div *ngIf="isLoading" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto px-6">
    <div *ngFor="let i of [1,2,3,4,5,6,7,8]"
         class="aspect-[4/3] bg-zinc-900 rounded-2xl animate-pulse"></div>
  </div>

  <!-- Cards grid -->
  <div *ngIf="!isLoading && clients.length > 0"
       class="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto px-6">

    <div *ngFor="let client of clients"
         class="group relative aspect-[4/3] rounded-2xl overflow-hidden
                bg-zinc-900 border border-zinc-800
                hover:border-[#0097A7]/60
                transition-all duration-300 cursor-default">

      <!-- Photo fills the whole card, no empty bands -->
      <img
        [src]="getLogoUrl(client.logo)"
        [alt]="client.name"
        width="320"
        height="240"
        loading="lazy"
        decoding="async"
        class="absolute inset-0 w-full h-full object-cover
               saturate-75 brightness-90
               group-hover:saturate-100 group-hover:brightness-100
               group-hover:scale-105
               transition-all duration-500 ease-out"
        (error)="onImageError($event)"
      />

      <!-- Gradient overlay so text stays readable -->
      <div class="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

      <!-- Info -->
      <div class="absolute bottom-0 left-0 right-0 p-3 md:p-4">
        <p class="text-white text-sm md:text-base font-semibold leading-tight truncate">
          {{ client.name }}
        </p>
        <p *ngIf="client.city" class="text-zinc-400 text-xs mt-0.5 truncate">
          {{ client.city }}<span *ngIf="client.industry"> · {{ client.industry }}</span>
        </p>
      </div>

      <!-- Featured badge -->
      <div *ngIf="client.is_featured"
           class="absolute top-3 right-3 px-2 py-0.5 rounded-full
                  bg-[#0097A7]/90 text-white text-[10px] font-semibold uppercase tracking-wide">
        {{ 'Clients.featured' | translate }}
      </div>
    </div>

  </div>

  <!-- Empty state -->
  <div *ngIf="!isLoading && clients.length === 0"
       class="text-center py-10 text-zinc-600 text-sm">
    Aucun partenaire disponible.
  </div>

  <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>

</section>
  `,
  styles: [``]
})
export class ClientsBannerComponent implements OnInit {

  clients: any[] = [];
  isLoading = false;

  private baseService = inject(BaseService);
  private _changeDetectorRef = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.getClients();
  }

  getClients(): void {
    this.isLoading = true;
    this.baseService.all('clients').subscribe({
      next: (response: any) => {
        this.clients = (response?.data || []).filter((c: any) => c.is_active);
        this.isLoading = false;
        this._changeDetectorRef.markForCheck();
      },
      error: () => {
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
    (event.target as HTMLImageElement).src = 'assets/images/placeholder-logo.png';
  }
}