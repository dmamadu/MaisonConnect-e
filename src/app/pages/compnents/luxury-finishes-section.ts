import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-luxury-finishes-section',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink],
  template: `
<section class="relative py-6 md:py-12 lg:py-16 bg-gray-50 dark:bg-slate-950 overflow-hidden transition-colors duration-300">
  
  <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <!-- Section Header -->
    <div class="text-center mb-8">
      <div class="inline-block bg-black dark:bg-white text-white dark:text-black px-5 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-6">
        {{ 'Luxury.badge' | translate }}
      </div>
      
      <h2 class="section-title mb-6">
        {{ 'Luxury.title' | translate }}
      </h2>

      <p class="section-subtitle max-w-3xl mx-auto">
        {{ 'Luxury.description' | translate }}
      </p>
    </div>

    <!-- Services Grid -->
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-10 md:mb-16">
      
      <!-- Service 1 -->
      <div class="group bg-white dark:bg-slate-900 p-8 rounded-2xl border border-gray-200 dark:border-slate-800 hover:border-gray-900 dark:hover:border-white transition-all duration-300 hover:shadow-xl">
        <div class="w-12 h-12 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center mb-6">
          <svg class="w-6 h-6 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
          </svg>
        </div>
        
        <h3 class="block-title mb-3">
          {{ 'Luxury.services.ceilings.title' | translate }}
        </h3>
        
        <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
          {{ 'Luxury.services.ceilings.description' | translate }}
        </p>
      </div>

      <!-- Service 2 -->
      <div class="group bg-white dark:bg-slate-900 p-8 rounded-2xl border border-gray-200 dark:border-slate-800 hover:border-gray-900 dark:hover:border-white transition-all duration-300 hover:shadow-xl">
        <div class="w-12 h-12 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center mb-6">
          <svg class="w-6 h-6 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>
          </svg>
        </div>
        
        <h3 class="block-title mb-3">
          {{ 'Luxury.services.paint.title' | translate }}
        </h3>
        
        <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
          {{ 'Luxury.services.paint.description' | translate }}
        </p>
      </div>

      <!-- Service 3 -->
      <div class="group bg-white dark:bg-slate-900 p-8 rounded-2xl border border-gray-200 dark:border-slate-800 hover:border-gray-900 dark:hover:border-white transition-all duration-300 hover:shadow-xl">
        <div class="w-12 h-12 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center mb-6">
          <svg class="w-6 h-6 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/>
          </svg>
        </div>
        
        <h3 class="block-title mb-3">
          {{ 'Luxury.services.tiles.title' | translate }}
        </h3>
        
        <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
          {{ 'Luxury.services.tiles.description' | translate }}
        </p>
      </div>

      <!-- Service 4 -->
      <div class="group bg-white dark:bg-slate-900 p-8 rounded-2xl border border-gray-200 dark:border-slate-800 hover:border-gray-900 dark:hover:border-white transition-all duration-300 hover:shadow-xl">
        <div class="w-12 h-12 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center mb-6">
          <svg class="w-6 h-6 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
        </div>
        
        <h3 class="block-title mb-3">
          {{ 'Luxury.services.carpentry.title' | translate }}
        </h3>
        
        <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
          {{ 'Luxury.services.carpentry.description' | translate }}
        </p>
      </div>

      <!-- Service 5 -->
      <div class="group bg-white dark:bg-slate-900 p-8 rounded-2xl border border-gray-200 dark:border-slate-800 hover:border-gray-900 dark:hover:border-white transition-all duration-300 hover:shadow-xl">
        <div class="w-12 h-12 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center mb-6">
          <svg class="w-6 h-6 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>
          </svg>
        </div>
        
        <h3 class="block-title mb-3">
          {{ 'Luxury.services.design.title' | translate }}
        </h3>
        
        <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
          {{ 'Luxury.services.design.description' | translate }}
        </p>
      </div>

      <!-- Quality Card - Highlighted -->
      <div class="group bg-gray-900 dark:bg-white p-8 rounded-2xl border-2 border-gray-900 dark:border-white hover:shadow-2xl transition-all duration-300">
        <div class="w-12 h-12 bg-white dark:bg-black rounded-lg flex items-center justify-center mb-6">
          <svg class="w-6 h-6 text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
          </svg>
        </div>
        
        <h3 class="text-xl font-bold text-white dark:text-black mb-3">
          {{ 'Luxury.quality.title' | translate }}
        </h3>
        
        <p class="text-gray-300 dark:text-gray-700 leading-relaxed">
          {{ 'Luxury.quality.description' | translate }}
        </p>
      </div>

    </div>

    <!-- Marketing Hooks -->
    <div class="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-gray-200 dark:border-slate-800 mb-16">
      <div class="max-w-4xl mx-auto space-y-8">
        
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-8 h-8 bg-gray-900 dark:bg-white rounded-full flex items-center justify-center">
            <span class="text-white dark:text-black text-sm font-bold">1</span>
          </div>
          <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed pt-1">
            {{ 'Luxury.hooks.hook1' | translate }}
          </p>
        </div>

        <div class="h-px bg-gray-200 dark:bg-slate-800"></div>

        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-8 h-8 bg-gray-900 dark:bg-white rounded-full flex items-center justify-center">
            <span class="text-white dark:text-black text-sm font-bold">2</span>
          </div>
          <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed pt-1">
            {{ 'Luxury.hooks.hook2' | translate }}
          </p>
        </div>

        <div class="h-px bg-gray-200 dark:bg-slate-800"></div>

        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-8 h-8 bg-gray-900 dark:bg-white rounded-full flex items-center justify-center">
            <span class="text-white dark:text-black text-sm font-bold">3</span>
          </div>
          <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed pt-1">
            {{ 'Luxury.hooks.hook3' | translate }}
          </p>
        </div>

      </div>
    </div>

    <!-- CTA Button -->
    <div class="text-center">
      <a href="" routerLink="/devis">
        <button class="bg-gray-900 dark:bg-white hover:bg-black dark:hover:bg-gray-100 text-white dark:text-black px-10 py-4 rounded-full text-base font-semibold tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
          {{ 'Luxury.ctaButton' | translate }}
        </button>
      </a>
      <p class="text-sm text-gray-500 dark:text-gray-400 mt-4">
        {{ 'Luxury.ctaSubtext' | translate }}
      </p>
    </div>

  </div>

</section>
  `,
  styles: [`
    /* Pas de styles complexes nécessaires - Tailwind gère tout */
  `]
})
export class LuxuryFinishesSectionComponent {}