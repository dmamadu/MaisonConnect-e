import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-solar-section',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink],
  template: `
<section class="relative py-12 md:py-20 lg:py-32 bg-white dark:bg-black overflow-hidden transition-colors duration-300">

  <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <!-- Section Header -->
    <div class="text-center mb-16">
      <div class="inline-block bg-black dark:bg-white text-white dark:text-black px-5 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-6">
        {{ 'Solar.badge' | translate }}
      </div>
      
      <h2 class="section-title mb-6">
        {{ 'Solar.title' | translate }}
      </h2>

      <p class="section-subtitle max-w-3xl mx-auto">
        {{ 'Solar.description' | translate }}
      </p>
    </div>



    <!-- Installations Grid -->
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-10 md:mb-16">
      
      <!-- Installation 1: Kits solaires -->
      <div class="group bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-8 hover:border-gray-900 dark:hover:border-white hover:shadow-xl transition-all duration-300">
        <div class="w-12 h-12 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
          <svg class="w-6 h-6 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
          </svg>
        </div>
        
        <h3 class="block-title mb-3">
          {{ 'Solar.installations.kits.title' | translate }}
        </h3>
        
        <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
          {{ 'Solar.installations.kits.description' | translate }}
        </p>
      </div>

      <!-- Installation 2: Batteries -->
      <div class="group bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-8 hover:border-gray-900 dark:hover:border-white hover:shadow-xl transition-all duration-300">
        <div class="w-12 h-12 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
          <svg class="w-6 h-6 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
          </svg>
        </div>
        
        <h3 class="block-title mb-3">
          {{ 'Solar.installations.batteries.title' | translate }}
        </h3>
        
        <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
          {{ 'Solar.installations.batteries.description' | translate }}
        </p>
      </div>

      <!-- Installation 3: Onduleurs -->
      <div class="group bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-8 hover:border-gray-900 dark:hover:border-white hover:shadow-xl transition-all duration-300">
        <div class="w-12 h-12 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
          <svg class="w-6 h-6 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
          </svg>
        </div>
        
        <h3 class="block-title mb-3">
          {{ 'Solar.installations.inverters.title' | translate }}
        </h3>
        
        <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
          {{ 'Solar.installations.inverters.description' | translate }}
        </p>
      </div>

      <!-- Installation 4: Hybrid & Off-grid -->
      <div class="group bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-8 hover:border-gray-900 dark:hover:border-white hover:shadow-xl transition-all duration-300">
        <div class="w-12 h-12 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
          <svg class="w-6 h-6 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>
        </div>
        
        <h3 class="block-title mb-3">
          {{ 'Solar.installations.hybrid.title' | translate }}
        </h3>
        
        <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
          {{ 'Solar.installations.hybrid.description' | translate }}
        </p>
      </div>

      <!-- Installation 5: Secours électriques -->
      <div class="group bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-8 hover:border-gray-900 dark:hover:border-white hover:shadow-xl transition-all duration-300">
        <div class="w-12 h-12 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
          <svg class="w-6 h-6 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
          </svg>
        </div>
        
        <h3 class="block-title mb-3">
          {{ 'Solar.installations.backup.title' | translate }}
        </h3>
        
        <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
          {{ 'Solar.installations.backup.description' | translate }}
        </p>
      </div>

      <!-- Advantages Card - Highlighted -->
      <div class="group bg-gray-900 dark:bg-white border-2 border-gray-900 dark:border-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300">
        <div class="w-12 h-12 bg-white dark:bg-black rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
          <svg class="w-6 h-6 text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
          </svg>
        </div>
        
        <h3 class="text-xl font-bold text-white dark:text-black mb-3">
          {{ 'Solar.advantages.title' | translate }}
        </h3>
        
        <p class="text-gray-300 dark:text-gray-700 leading-relaxed">
          {{ 'Solar.advantages.description' | translate }}
        </p>
      </div>

    </div>

    <!-- Marketing Hooks -->
    <div class="bg-gray-50 dark:bg-slate-900 rounded-3xl p-12 border border-gray-200 dark:border-slate-800 mb-16">
      <div class="max-w-4xl mx-auto space-y-8">
        
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-8 h-8 bg-gray-900 dark:bg-white rounded-full flex items-center justify-center">
            <span class="text-white dark:text-black text-sm font-bold">1</span>
          </div>
          <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed pt-1">
            {{ 'Solar.hooks.hook1' | translate }}
          </p>
        </div>

        <div class="h-px bg-gray-200 dark:bg-slate-800"></div>

        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-8 h-8 bg-gray-900 dark:bg-white rounded-full flex items-center justify-center">
            <span class="text-white dark:text-black text-sm font-bold">2</span>
          </div>
          <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed pt-1">
            {{ 'Solar.hooks.hook2' | translate }}
          </p>
        </div>

        <div class="h-px bg-gray-200 dark:bg-slate-800"></div>

        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-8 h-8 bg-gray-900 dark:bg-white rounded-full flex items-center justify-center">
            <span class="text-white dark:text-black text-sm font-bold">3</span>
          </div>
          <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed pt-1">
            {{ 'Solar.hooks.hook3' | translate }}
          </p>
        </div>

      </div>
    </div>

    <!-- CTA Button -->
    <div class="text-center">
      <a href="" routerLink="/devis">
        <button class="bg-gray-900 dark:bg-white hover:bg-black dark:hover:bg-gray-100 text-white dark:text-black px-10 py-4 rounded-full text-base font-semibold tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
          {{ 'Solar.ctaButton' | translate }}
        </button>
      </a>
      <p class="text-sm text-gray-500 dark:text-gray-400 mt-4">
        Consultation gratuite pour votre projet solaire
      </p>
    </div>

  </div>

</section>
  `,
  styles: [`
    /* Minimal styles - no complex animations */
  `]
})
export class SolarSectionComponent implements OnInit, OnDestroy {
  ngOnInit() {}
  ngOnDestroy() {}
}