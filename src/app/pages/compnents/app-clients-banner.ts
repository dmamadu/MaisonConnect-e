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

@Component({
  selector: 'app-clients-banner',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
<section class="relative py-16 md:py-24 bg-gray-50 dark:bg-slate-900 overflow-hidden transition-colors duration-300">
  
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
    <div class="text-center">
      <div class="inline-block mb-6">
        <div class="flex items-center gap-3 bg-black dark:bg-white px-6 py-3 rounded-full">
          <div class="w-2 h-2 bg-white dark:bg-black rounded-full animate-pulse"></div>
          <span class="text-white dark:text-black text-sm font-medium tracking-wider">
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
    <div class="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 dark:from-slate-900 to-transparent z-10"></div>
    <div class="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 dark:from-slate-900 to-transparent z-10"></div>

    <!-- Loading skeleton -->
    <div *ngIf="isLoading" class="flex gap-8 px-8 overflow-hidden">
      <div *ngFor="let i of [1,2,3,4,5]"
           class="flex-shrink-0 w-40 h-28 bg-gray-200 dark:bg-slate-700 rounded-2xl animate-pulse">
      </div>
    </div>

    <!-- Scrolling Container -->
    <div *ngIf="!isLoading && clients.length > 0" class="flex overflow-hidden">
      <div class="flex animate-scroll">

        <!-- First Set -->
        <div *ngFor="let client of clients"
             class="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center">
          <div class="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl
                      transition-all duration-300 border border-gray-200 dark:border-slate-700
                      hover:border-gray-900 dark:hover:border-white group">
            <img
              [src]="client.logo"
              [alt]="client.name"
              class="h-12 md:h-16 w-auto object-contain grayscale group-hover:grayscale-0
                     transition-all duration-300 opacity-70 group-hover:opacity-100"
              (error)="onImageError($event)"
            />
          </div>
        </div>

        <!-- Duplicate Set for Seamless Loop -->
        <div *ngFor="let client of clients"
             class="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center">
          <div class="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl
                      transition-all duration-300 border border-gray-200 dark:border-slate-700
                      hover:border-gray-900 dark:hover:border-white group">
            <img
              [src]="client.logo"
              [alt]="client.name"
              class="h-12 md:h-16 w-auto object-contain grayscale group-hover:grayscale-0
                     transition-all duration-300 opacity-70 group-hover:opacity-100"
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

  <!-- Trust Indicators -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div class="text-center">
        <div class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
          {{ trustStats.clients }}+
        </div>
        <div class="text-sm text-gray-600 dark:text-gray-400">
          {{ 'Clients.stats.happy' | translate }}
        </div>
      </div>
      <div class="text-center">
        <div class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
          {{ trustStats.projects }}+
        </div>
        <div class="text-sm text-gray-600 dark:text-gray-400">
          {{ 'Clients.stats.projects' | translate }}
        </div>
      </div>
      <div class="text-center">
        <div class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
          {{ trustStats.satisfaction }}%
        </div>
        <div class="text-sm text-gray-600 dark:text-gray-400">
          {{ 'Clients.stats.satisfaction' | translate }}
        </div>
      </div>
      <div class="text-center">
        <div class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
          {{ trustStats.years }}+
        </div>
        <div class="text-sm text-gray-600 dark:text-gray-400">
          {{ 'Clients.stats.experience' | translate }}
        </div>
      </div>
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
  loadData: boolean = false;

  private baseService  = inject(BaseService);
  private _changeDetectorRef = inject(ChangeDetectorRef);

  trustStats = {
    clients: 500,
    projects: 1200,
    satisfaction: 98,
    years: 10
  };

  ngOnInit(): void {
    this.getClients();
  }

  getClients(): void {
    this.isLoading = true;

    this.baseService.all('clients').subscribe({
      next: (response: any) => {
        const data = response?.data || [];
        this.clients = data.filter((c: any) => c.is_active);  // uniquement les clients actifs
        this.isLoading = false;
        this._changeDetectorRef.markForCheck();
      },
      error: (err : any) => {
        console.error('Erreur chargement clients :', err);
        this.isLoading = false;
        this._changeDetectorRef.markForCheck();
      }
    });
  }

  /** Fallback si l'image ne charge pas */
  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.src = 'assets/images/placeholder-logo.png';
  }
}