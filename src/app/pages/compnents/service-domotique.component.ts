import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-services-domotique',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
<div class="bg-white dark:bg-black transition-colors duration-300 py-10 md:py-16">
  <div class="mx-auto px-4 md:px-6">
    <div class="text-center mb-8 md:mb-12">
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4
                 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-400 
                 bg-clip-text text-transparent">
        {{ 'home.services.title' | translate }}
      </h2>
      <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        {{ 'home.services.subtitle' | translate }}
      </p>
    </div>
    <div class="relative">
      <div 
        #scrollContainer
        (mouseenter)="pauseAutoScroll()"
        (mouseleave)="resumeAutoScroll()"
        class="flex gap-4 overflow-x-auto scroll-smooth pb-6 scrollbar-hide snap-x snap-mandatory"
        style="scrollbar-width: none; -ms-overflow-style: none;">
        <div class="flex-none w-[280px] md:w-[320px] snap-start">
          <div class="card-apple group">
            
            <div class="icon-zone-apple">
              <div class="icon-bubble-apple bg-gray-800 dark:bg-gray-200">
                <svg class="w-10 h-10 text-white dark:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
              </div>
            </div>

            <div class="content-zone-apple">
              <h3 class="card-title-apple">{{ 'home.services.lighting.title' | translate }}</h3>
              <p class="card-desc-apple">{{ 'home.services.lighting.description' | translate }}</p>
              <div class="card-footer-apple">
                <span class="card-price-apple">{{ 'home.services.lighting.price' | translate }}</span>
                <svg class="arrow-apple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </div>

          </div>
        </div>
        <div class="flex-none w-[280px] md:w-[320px] snap-start">
          <div class="card-apple group">

            <div class="icon-zone-apple">
              <div class="grid grid-cols-2 gap-3">
                <div class="icon-square-apple bg-gray-800 dark:bg-gray-200">
                  <svg class="w-7 h-7 text-white dark:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div class="icon-square-apple bg-gray-700 dark:bg-gray-300">
                  <svg class="w-7 h-7 text-white dark:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                  </svg>
                </div>
              </div>
            </div>
            <div class="content-zone-apple">
              <h3 class="card-title-apple">{{ 'home.services.security.title' | translate }}</h3>
              <p class="card-desc-apple">{{ 'home.services.security.description' | translate }}</p>
              <div class="card-footer-apple">
                <span class="card-price-apple">{{ 'home.services.security.price' | translate }}</span>
                <svg class="arrow-apple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </div>

          </div>
        </div>
        <div class="flex-none w-[280px] md:w-[320px] snap-start">
          <div class="card-apple group">

            <div class="icon-zone-apple">
              <div class="icon-bubble-apple bg-gray-800 dark:bg-gray-200">
                <svg class="w-10 h-10 text-white dark:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
                </svg>
              </div>
            </div>

            <div class="content-zone-apple">
              <h3 class="card-title-apple">{{ 'home.services.climate.title' | translate }}</h3>
              <p class="card-desc-apple">{{ 'home.services.climate.description' | translate }}</p>
              <div class="card-footer-apple">
                <span class="card-price-apple">{{ 'home.services.climate.price' | translate }}</span>
                <svg class="arrow-apple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </div>

          </div>
        </div>
        <div class="flex-none w-[280px] md:w-[320px] snap-start">
          <div class="card-apple-premium group">

            <div class="icon-zone-apple">
              <div class="icon-bubble-apple bg-gradient-to-br from-purple-600 to-pink-600">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                </svg>
              </div>
            </div>

            <div class="content-zone-apple">
              <h3 class="card-title-apple">{{ 'home.services.complete.title' | translate }}</h3>
              <p class="card-desc-apple">{{ 'home.services.complete.description' | translate }}</p>
              <div class="card-footer-apple">
                <span class="card-price-premium">{{ 'home.services.complete.price' | translate }}</span>
                <svg class="arrow-apple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </div>

          </div>
        </div>
        <!-- CARD 5 – Volets -->
        <div class="flex-none w-[280px] md:w-[320px] snap-start">
          <div class="card-apple group">

            <div class="icon-zone-apple">
              <div class="icon-bubble-apple bg-gray-700 dark:bg-gray-300">
                <svg class="w-10 h-10 text-white dark:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M4 4h16M4 8h16M4 12h16M4 16h16M4 20h16"/>
                </svg>
              </div>
            </div>

            <div class="content-zone-apple">
              <h3 class="card-title-apple">{{ 'home.services.shutters.title' | translate }}</h3>
              <p class="card-desc-apple">{{ 'home.services.shutters.description' | translate }}</p>
              <div class="card-footer-apple">
                <span class="card-price-apple">{{ 'home.services.shutters.price' | translate }}</span>
                <svg class="arrow-apple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </div>

          </div>
        </div>

        <!-- CARD 6 – Audio -->
        <div class="flex-none w-[280px] md:w-[320px] snap-start">
          <div class="card-apple group">

            <div class="icon-zone-apple">
              <div class="icon-bubble-apple bg-gray-800 dark:bg-gray-200">
                <svg class="w-10 h-10 text-white dark:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/>
                </svg>
              </div>
            </div>

            <div class="content-zone-apple">
              <h3 class="card-title-apple">{{ 'home.services.audio.title' | translate }}</h3>
              <p class="card-desc-apple">{{ 'home.services.audio.description' | translate }}</p>
              <div class="card-footer-apple">
                <span class="card-price-apple">{{ 'home.services.audio.price' | translate }}</span>
                <svg class="arrow-apple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </div>

          </div>
        </div>

        <!-- CARD 7 – Arrosage -->
        <div class="flex-none w-[280px] md:w-[320px] snap-start">
          <div class="card-apple group">

            <div class="icon-zone-apple">
              <div class="icon-bubble-apple bg-gray-700 dark:bg-gray-300">
                <svg class="w-10 h-10 text-white dark:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
                </svg>
              </div>
            </div>

            <div class="content-zone-apple">
              <h3 class="card-title-apple">{{ 'home.services.garden.title' | translate }}</h3>
              <p class="card-desc-apple">{{ 'home.services.garden.description' | translate }}</p>
              <div class="card-footer-apple">
                <span class="card-price-apple">{{ 'home.services.garden.price' | translate }}</span>
                <svg class="arrow-apple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </div>

          </div>
        </div>

        <!-- CARD 8 – Accès -->
        <div class="flex-none w-[280px] md:w-[320px] snap-start">
          <div class="card-apple group">

            <div class="icon-zone-apple">
              <div class="icon-bubble-apple bg-gray-800 dark:bg-gray-200">
                <svg class="w-10 h-10 text-white dark:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
              </div>
            </div>

            <div class="content-zone-apple">
              <h3 class="card-title-apple">{{ 'home.services.access.title' | translate }}</h3>
              <p class="card-desc-apple">{{ 'home.services.access.description' | translate }}</p>
              <div class="card-footer-apple">
                <span class="card-price-apple">{{ 'home.services.access.price' | translate }}</span>
                <svg class="arrow-apple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </div>

          </div>
        </div>

      </div>

      <!-- Navigation Dots -->
      <div class="flex justify-center gap-2 mt-8">
        <button 
          *ngFor="let dot of totalCards; let i = index"
          (click)="scrollToCard(i)"
          [class.w-8]="currentIndex === i"
          [class.w-2]="currentIndex !== i"
          [class.bg-gray-800]="currentIndex === i && isDarkMode"
          [class.bg-gray-300]="currentIndex === i && !isDarkMode"
          [class.bg-gray-400]="currentIndex !== i && isDarkMode"
          [class.bg-gray-300]="currentIndex !== i && !isDarkMode"
          class="h-2 rounded-full transition-all duration-300 hover:bg-gray-500 dark:hover:bg-gray-400">
        </button>
      </div>
    </div>

  </div>
</div>
  `,
  styles: [`
    .scrollbar-hide::-webkit-scrollbar {
      display: none;
    }

    /* Apple-style Card */
    .card-apple {
      @apply bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 
             rounded-2xl p-6 
             border border-gray-200 dark:border-gray-700/50 backdrop-blur-xl
             transition-all duration-500 cursor-pointer
             flex flex-col;
      height: 380px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    }

    .dark .card-apple {
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
    }

    .card-apple:hover {
      @apply border-gray-300 dark:border-gray-600 transform scale-[1.02];
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
    }

    .dark .card-apple:hover {
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.6);
    }

    /* Premium Card */
    .card-apple-premium {
      @apply bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900
             text-gray-900 dark:text-white rounded-2xl p-6 
             border-2 border-purple-200 dark:border-purple-500/30 
             transition-all duration-500 cursor-pointer
             flex flex-col;
      height: 380px;
      box-shadow: 0 4px 20px rgba(168, 85, 247, 0.15);
    }

    .dark .card-apple-premium {
      box-shadow: 0 4px 20px rgba(168, 85, 247, 0.3);
    }

    .card-apple-premium:hover {
      @apply transform scale-[1.02] border-purple-300 dark:border-purple-400;
      box-shadow: 0 8px 30px rgba(168, 85, 247, 0.25);
    }

    .dark .card-apple-premium:hover {
      box-shadow: 0 8px 30px rgba(168, 85, 247, 0.5);
    }

    /* Icon Zones */
    .icon-zone-apple {
      @apply mb-6;
    }

    .icon-bubble-apple {
      @apply w-16 h-16 rounded-xl flex items-center justify-center
             shadow-lg transition-transform duration-300;
    }

    .card-apple:hover .icon-bubble-apple {
      @apply transform rotate-3 scale-110;
    }

    .icon-square-apple {
      @apply w-full h-16 rounded-lg flex items-center justify-center
             shadow-md transition-transform duration-300;
    }

    .card-apple:hover .icon-square-apple:first-child {
      @apply transform -rotate-3;
    }

    .card-apple:hover .icon-square-apple:last-child {
      @apply transform rotate-3;
    }

    /* Content */
    .content-zone-apple {
      @apply flex flex-col flex-1 justify-between;
    }

    .card-title-apple {
      @apply text-xl font-bold mb-3 text-gray-900 dark:text-white;
    }

    .card-desc-apple {
      @apply text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-1;
    }

    .card-footer-apple {
      @apply flex items-center justify-between mt-auto pt-4 
             border-t border-gray-200 dark:border-gray-700/50;
    }

    .card-price-apple {
      @apply text-xl font-semibold text-gray-900 dark:text-white;
    }

    .card-price-premium {
      @apply text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 
             bg-clip-text text-transparent;
    }

    .arrow-apple {
      @apply w-5 h-5 text-gray-500 dark:text-gray-400 transition-all duration-300;
    }

    .card-apple:hover .arrow-apple {
      @apply text-gray-900 dark:text-white transform translate-x-2;
    }

    .card-apple-premium:hover .arrow-apple {
      @apply text-purple-600 dark:text-purple-400 transform translate-x-2;
    }
  `]
})
export class ServicesDomotiqueComponent implements AfterViewInit, OnDestroy {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  
  currentIndex = 0;
  totalCards = Array(8).fill(0); // 8 cards
  isDarkMode = false;
  private autoScrollInterval: any;
  private isPaused = false;

  ngAfterViewInit() {
    this.detectDarkMode();
    this.startAutoScroll();
    this.observeScroll();
  }

  ngOnDestroy() {
    this.stopAutoScroll();
  }

  detectDarkMode() {
    // Détecter le mode sombre via la classe 'dark' sur l'élément html
    this.isDarkMode = document.documentElement.classList.contains('dark');
    
    // Observer les changements de thème
    const observer = new MutationObserver(() => {
      this.isDarkMode = document.documentElement.classList.contains('dark');
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
  }

  startAutoScroll() {
    this.autoScrollInterval = setInterval(() => {
      if (!this.isPaused && this.isComponentVisible()) {
        this.currentIndex = (this.currentIndex + 1) % 8;
        this.scrollToCard(this.currentIndex);
      }
    }, 4000);
  }

  stopAutoScroll() {
    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
    }
  }

  pauseAutoScroll() {
    this.isPaused = true;
  }

  resumeAutoScroll() {
    this.isPaused = false;
  }

  isComponentVisible(): boolean {
    if (!this.scrollContainer) return false;
    
    const container = this.scrollContainer.nativeElement;
    const rect = container.getBoundingClientRect();
    
    // Vérifie si le composant est visible dans le viewport
    return (
      rect.top < window.innerHeight &&
      rect.bottom > 0
    );
  }

  scrollToCard(index: number) {
    if (!this.scrollContainer) return;
    
    const container = this.scrollContainer.nativeElement;
    const cards = container.querySelectorAll('.flex-none');
    
    if (cards[index]) {
      // Scroll UNIQUEMENT à l'intérieur du container, pas la page entière
      const card = cards[index] as HTMLElement;
      const scrollLeft = card.offsetLeft - (container.offsetWidth / 2) + (card.offsetWidth / 2);
      
      container.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
    }
    
    this.currentIndex = index;
  }

  observeScroll() {
    if (!this.scrollContainer) return;
    
    const container = this.scrollContainer.nativeElement;
    let scrollTimeout: any;
    
    container.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const cards = container.querySelectorAll('.flex-none');
        const containerRect = container.getBoundingClientRect();
        
        cards.forEach((card: any, index: number) => {
          const cardRect = card.getBoundingClientRect();
          const cardCenter = cardRect.left + cardRect.width / 2;
          const containerCenter = containerRect.left + containerRect.width / 2;
          
          if (Math.abs(cardCenter - containerCenter) < cardRect.width / 2) {
            this.currentIndex = index;
          }
        });
      }, 100);
    });
  }
}