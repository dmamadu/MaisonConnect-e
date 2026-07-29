import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-why-choose-us-section',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
<section class="relative py-8 md:py-12 lg:py-16 bg-black overflow-hidden transition-colors duration-300">

  <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <!-- En-tête -->
    <div class="text-center mb-6 md:mb-8">
      <div class="inline-block mb-4">
        <div class="flex items-center gap-3 bg-[#0097A7] px-6 py-3 rounded-full">
          <div class="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <span class="text-white text-sm font-medium tracking-wider">{{ 'WhyUs.badge' | translate }}</span>
        </div>
      </div>
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
        {{ 'WhyUs.mainSlogan' | translate }}
      </h2>
      <p class="text-base md:text-lg text-gray-400 font-light mb-4">
        {{ 'WhyUs.shortSlogan' | translate }}
      </p>
      <div class="flex items-center justify-center gap-3 mt-6">
        <div class="h-px w-16 bg-gradient-to-r from-transparent to-white"></div>
        <div class="w-2 h-2 bg-white rounded-full"></div>
        <div class="h-px w-16 bg-gradient-to-l from-transparent to-white"></div>
      </div>
    </div>

    <!-- Carrousel automatique horizontal (mobile uniquement) -->
    <div class="sm:hidden relative overflow-hidden">
      <div class="transition-transform duration-700 ease-in-out flex"
           [style.transform]="'translateX(-' + (mobileSlide * 100) + '%)'">
        <div *ngFor="let r of allReasons" class="min-w-full px-0.5">
          <div class="group bg-zinc-900 border border-zinc-800 rounded-2xl p-5 hover:bg-zinc-800 hover:border-[#0097A7] transition-all duration-300">
            <div class="w-16 h-16 bg-[#0097A7] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="r.icon"/>
              </svg>
            </div>
            <h3 class="text-base font-bold text-white mb-3">{{ r.title | translate }}</h3>
            <p class="text-gray-400 leading-relaxed">{{ r.desc | translate }}</p>
          </div>
        </div>
      </div>

      <!-- Dots -->
      <div class="flex items-center justify-center mt-6">
        <button *ngFor="let r of allReasons; let i = index"
                (click)="goToMobileSlide(i)"
                [attr.aria-label]="'Aller à la diapositive ' + (i + 1)"
                class="w-9 h-9 flex items-center justify-center">
          <span class="block rounded-full transition-all duration-300"
                [style.width]="mobileSlide === i ? '20px' : '6px'"
                [style.height]="'6px'"
                [style.background]="mobileSlide === i ? '#0097A7' : '#52525b'"></span>
        </button>
      </div>
    </div>

    <!-- Slider 2 slides (tablette / desktop) -->
    <div class="hidden sm:block relative">

      <!-- ── Slide 1 : 3 premières raisons ── -->
      <div *ngIf="activeSlide === 0" class="slide-panel grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
        <div *ngFor="let r of slide1" class="group bg-zinc-900 border border-zinc-800 rounded-2xl p-5 md:p-8 hover:bg-zinc-800 hover:border-[#0097A7] hover:shadow-xl hover:shadow-[#0097A7]/10 transition-all duration-300">
          <div class="w-16 h-16 bg-[#0097A7] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="r.icon"/>
            </svg>
          </div>
          <h3 class="text-base md:text-lg font-bold text-white mb-3">{{ r.title | translate }}</h3>
          <p class="text-gray-400 leading-relaxed">{{ r.desc | translate }}</p>
        </div>
      </div>

      <!-- ── Slide 2 : 6 raisons restantes ── -->
      <div *ngIf="activeSlide === 1" class="slide-panel grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <div *ngFor="let r of slide2" class="group bg-zinc-900 border border-zinc-800 rounded-2xl p-5 md:p-8 hover:bg-zinc-800 hover:border-[#0097A7] hover:shadow-xl hover:shadow-[#0097A7]/10 transition-all duration-300">
          <div class="w-16 h-16 bg-[#0097A7] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="r.icon"/>
            </svg>
          </div>
          <h3 class="text-base md:text-lg font-bold text-white mb-3">{{ r.title | translate }}</h3>
          <p class="text-gray-400 leading-relaxed">{{ r.desc | translate }}</p>
        </div>
      </div>

    </div>

    <!-- Navigation slides (tablette / desktop) -->
    <div class="hidden sm:flex items-center justify-center gap-6 mt-10">
      <button (click)="prev()"
              [disabled]="activeSlide === 0"
              class="w-10 h-10 rounded-full border-2 border-zinc-700 text-white
                     flex items-center justify-center
                     hover:border-[#0097A7] hover:text-[#0097A7]
                     disabled:opacity-30 disabled:cursor-not-allowed
                     transition-all duration-200">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
        </svg>
      </button>

      <!-- Dots -->
      <div class="flex gap-2">
        <button *ngFor="let i of [0,1]"
                (click)="goToSlide(i)"
                [attr.aria-label]="'Aller à la diapositive ' + (i + 1)"
                class="rounded-full transition-all duration-300"
                [style.width]="activeSlide === i ? '24px' : '8px'"
                [style.height]="'8px'"
                [style.background]="activeSlide === i ? '#0097A7' : '#d1d5db'">
        </button>
      </div>

      <button (click)="next()"
              [disabled]="activeSlide === 1"
              class="w-10 h-10 rounded-full border-2 border-zinc-700 text-white
                     flex items-center justify-center
                     hover:border-[#0097A7] hover:text-[#0097A7]
                     disabled:opacity-30 disabled:cursor-not-allowed
                     transition-all duration-200">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </button>
    </div>

    <!-- Support 24/7 -->
    <div class="mt-8 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 md:p-8">
      <div class="text-center mb-10">
        <div class="w-16 h-16 bg-[#0097A7]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-[#0097A7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
          </svg>
        </div>
        <!-- <h3 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">Support 24/7</h3> -->
        <p class="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          Notre équipe est disponible à tout moment — week-ends et jours fériés compris — pour répondre à vos questions et vous assurer une expérience sans stress.
        </p>
      </div>

    </div>

  </div>

</section>
  `,
  styles: [`
    @keyframes slidePanelIn {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .slide-panel { animation: slidePanelIn 0.4s ease-out; }
  `]
})
export class WhyChooseUsSectionComponent implements OnInit, OnDestroy {
  activeSlide = 0;
  mobileSlide = 0;
  private mobileAutoplayId?: ReturnType<typeof setInterval>;
  private desktopAutoplayId?: ReturnType<typeof setInterval>;
  private readonly autoplayDelay = 3500;

  slide1 = [
    { title: 'WhyUs.reasons.quality.title',      desc: 'WhyUs.reasons.quality.description',      icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' },
    { title: 'WhyUs.reasons.design.title',       desc: 'WhyUs.reasons.design.description',       icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01' },
    { title: 'WhyUs.reasons.comfort.title',      desc: 'WhyUs.reasons.comfort.description',      icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  ];

  slide2 = [
    { title: 'WhyUs.reasons.modernity.title',    desc: 'WhyUs.reasons.modernity.description',    icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
    { title: 'WhyUs.reasons.security.title',     desc: 'WhyUs.reasons.security.description',     icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
    { title: 'WhyUs.reasons.energy.title',       desc: 'WhyUs.reasons.energy.description',       icon: 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z' },
    { title: 'WhyUs.reasons.warranty.title',     desc: 'WhyUs.reasons.warranty.description',     icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' },
    { title: 'WhyUs.reasons.installation.title', desc: 'WhyUs.reasons.installation.description', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
    { title: 'WhyUs.reasons.support.title',      desc: 'WhyUs.reasons.support.description',      icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z' },
  ];

  allReasons = [...this.slide1, ...this.slide2];

  ngOnInit() {
    this.startMobileAutoplay();
    this.startDesktopAutoplay();
  }

  ngOnDestroy() {
    this.stopMobileAutoplay();
    this.stopDesktopAutoplay();
  }

  // --- Carrousel mobile ---

  startMobileAutoplay() {
    this.mobileAutoplayId = setInterval(() => {
      this.mobileSlide = (this.mobileSlide + 1) % this.allReasons.length;
    }, this.autoplayDelay);
  }

  stopMobileAutoplay() {
    if (this.mobileAutoplayId) {
      clearInterval(this.mobileAutoplayId);
    }
  }

  goToMobileSlide(i: number) {
    this.mobileSlide = i;
    this.stopMobileAutoplay();
    this.startMobileAutoplay();
  }

  // --- Slider desktop / tablette ---

  startDesktopAutoplay() {
    this.desktopAutoplayId = setInterval(() => {
      this.activeSlide = this.activeSlide === 0 ? 1 : 0;
    }, this.autoplayDelay);
  }

  stopDesktopAutoplay() {
    if (this.desktopAutoplayId) {
      clearInterval(this.desktopAutoplayId);
    }
  }

  goToSlide(i: number) {
    this.activeSlide = i;
    this.stopDesktopAutoplay();
    this.startDesktopAutoplay();
  }

  prev() { this.goToSlide(0); }
  next() { this.goToSlide(1); }
}