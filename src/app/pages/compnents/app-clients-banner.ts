// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { TranslateModule } from '@ngx-translate/core';

// @Component({
//   selector: 'app-clients-banner',
//   standalone: true,
//   imports: [CommonModule, TranslateModule],
//   template: `
// <section class="relative py-16 md:py-24 bg-gray-50 dark:bg-slate-900 overflow-hidden transition-colors duration-300">
  
//   <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
//     <div class="text-center">
//       <div class="inline-block mb-6">
//         <div class="flex items-center gap-3 bg-black dark:bg-white px-6 py-3 rounded-full">
//           <div class="w-2 h-2 bg-white dark:bg-black rounded-full animate-pulse"></div>
//           <span class="text-white dark:text-black text-sm font-medium tracking-wider">
//             {{ 'Clients.badge' | translate }}
//           </span>
//         </div>
//       </div>
      
//       <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
//         {{ 'Clients.title' | translate }}
//       </h2>
      
//       <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//         {{ 'Clients.subtitle' | translate }}
//       </p>
//     </div>
//   </div>

//   <!-- Scrolling Banner -->
//   <div class="relative">
//     <!-- Gradient Overlays -->
//     <div class="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 dark:from-slate-900 to-transparent z-10"></div>
//     <div class="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 dark:from-slate-900 to-transparent z-10"></div>
    
//     <!-- Scrolling Container -->
//     <div class="flex overflow-hidden">
//       <div class="flex animate-scroll">
//         <!-- First Set of Logos -->
//         <div *ngFor="let client of clients" 
//              class="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center">
//           <div class="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-slate-700 hover:border-gray-900 dark:hover:border-white group">
//             <img 
//               [src]="client.logo" 
//               [alt]="client.name"
//               class="h-12 md:h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
//             />
//           </div>
//         </div>
        
//         <!-- Duplicate Set for Seamless Loop -->
//         <div *ngFor="let client of clients" 
//              class="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center">
//           <div class="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-slate-700 hover:border-gray-900 dark:hover:border-white group">
//             <img 
//               [src]="client.logo" 
//               [alt]="client.name"
//               class="h-12 md:h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>

//   <!-- Trust Indicators -->
//   <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
//     <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
//       <div class="text-center">
//         <div class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
//           {{ trustStats.clients }}+
//         </div>
//         <div class="text-sm text-gray-600 dark:text-gray-400">
//           {{ 'Clients.stats.happy' | translate }}
//         </div>
//       </div>
      
//       <div class="text-center">
//         <div class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
//           {{ trustStats.projects }}+
//         </div>
//         <div class="text-sm text-gray-600 dark:text-gray-400">
//           {{ 'Clients.stats.projects' | translate }}
//         </div>
//       </div>
      
//       <div class="text-center">
//         <div class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
//           {{ trustStats.satisfaction }}%
//         </div>
//         <div class="text-sm text-gray-600 dark:text-gray-400">
//           {{ 'Clients.stats.satisfaction' | translate }}
//         </div>
//       </div>
      
//       <div class="text-center">
//         <div class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
//           {{ trustStats.years }}+
//         </div>
//         <div class="text-sm text-gray-600 dark:text-gray-400">
//           {{ 'Clients.stats.experience' | translate }}
//         </div>
//       </div>
//     </div>
//   </div>

// </section>
//   `,
//   styles: [`
//     @keyframes scroll {
//       0% {
//         transform: translateX(0);
//       }
//       100% {
//         transform: translateX(-50%);
//       }
//     }

//     .animate-scroll {
//       animation: scroll 40s linear infinite;
//     }

//     .animate-scroll:hover {
//       animation-play-state: paused;
//     }

//     /* Faster animation on mobile */
//     @media (max-width: 768px) {
//       .animate-scroll {
//         animation: scroll 30s linear infinite;
//       }
//     }
//   `]
// })
// export class ClientsBannerComponent {
//   // Tableau des clients - Remplacez les URLs par vos vrais logos
//   clients = [
//     { name: 'Client 1', logo: 'assets/clients/client-1.png' },
//     { name: 'Client 2', logo: 'assets/clients/client-2.png' },
//     { name: 'Client 3', logo: 'assets/clients/client-3.png' },
//     { name: 'Client 4', logo: 'assets/clients/client-4.png' },
//     { name: 'Client 5', logo: 'assets/clients/client-5.png' },
//     { name: 'Client 6', logo: 'assets/clients/client-6.png' },
//     { name: 'Client 7', logo: 'assets/clients/client-7.png' },
//     { name: 'Client 8', logo: 'assets/clients/client-8.png' },
//     { name: 'Client 9', logo: 'assets/clients/client-9.png' },
//     { name: 'Client 10', logo: 'assets/clients/client-10.png' }
//   ];

//   trustStats = {
//     clients: 500,
//     projects: 1200,
//     satisfaction: 98,
//     years: 10
//   };
// }
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
<section class="relative py-20 md:py-28 bg-gray-50 dark:bg-slate-950 overflow-hidden transition-colors duration-300">

  <!-- Header -->
  <div class="max-w-3xl mx-auto px-6 mb-16 text-center">
    <p class="text-[#0097A7] text-xs font-bold tracking-[0.2em] uppercase mb-5">
      {{ 'Clients.badge' | translate }}
    </p>
    <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
      {{ 'Clients.title' | translate }}
    </h2>
    <p class="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
      {{ 'Clients.subtitle' | translate }}
    </p>
  </div>

  <!-- Track -->
  <div class="relative">
    <!-- Fade edges -->
    <div class="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-gray-50 dark:from-slate-950 to-transparent z-10 pointer-events-none"></div>
    <div class="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-gray-50 dark:from-slate-950 to-transparent z-10 pointer-events-none"></div>

    <!-- Skeleton -->
    <div *ngIf="isLoading" class="flex gap-6 px-12 overflow-hidden">
      <div *ngFor="let i of [1,2,3,4,5,6]"
           class="flex-shrink-0 w-56 h-36 bg-gray-200 dark:bg-slate-800 rounded-3xl animate-pulse"></div>
    </div>

    <!-- Logos -->
    <div *ngIf="!isLoading && clients.length > 0" class="flex overflow-hidden">
      <div class="flex items-stretch animate-scroll">

        <ng-container *ngFor="let _ of [1, 2]">
          <div *ngFor="let client of clients"
               class="flex-shrink-0 mx-4 md:mx-5 py-2">
            <div class="flex flex-col items-center justify-center
                        bg-white dark:bg-slate-800
                        rounded-3xl
                        px-10 py-8 md:px-12 md:py-10
                        shadow-md hover:shadow-2xl
                        transition-all duration-300 ease-out
                        hover:-translate-y-1.5
                        min-w-[200px] md:min-w-[230px] h-full
                        cursor-default">
              <img
                [src]="getLogoUrl(client.logo)"
                [alt]="client.name"
                class="h-16 md:h-20 w-auto max-w-[180px] object-contain"
                (error)="onImageError($event)"
              />
              <span *ngIf="client.name"
                    class="mt-4 text-[11px] font-semibold text-gray-400 dark:text-slate-500
                           tracking-[0.15em] uppercase">
                {{ client.name }}
              </span>
            </div>
          </div>
        </ng-container>

      </div>
    </div>

    <!-- Empty state -->
    <div *ngIf="!isLoading && clients.length === 0"
         class="text-center py-16 text-gray-400 dark:text-slate-500 text-sm">
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