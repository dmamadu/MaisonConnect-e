import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'smart-home-section',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink],
  template: `
<section class="relative min-h-screen bg-white dark:bg-black overflow-hidden flex items-center justify-center px-4 py-12 md:py-20 transition-colors duration-300">

  <!-- Content Container -->
  <div class="relative z-10 w-full max-w-7xl mx-auto">
    
    <!-- Section Header -->
    <div class="text-center mb-10 md:mb-16">
      <!-- Badge -->
      <div class="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full text-sm font-medium mb-6 fade-in">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
        </svg>
        <span>{{ 'SmartHomeSection.badge' | translate }}</span>
      </div>

      <!-- Title -->
      <h2 class="section-title mb-6 tracking-tight fade-in transition-colors" style="animation-delay: 0.1s;">
        {{ 'SmartHomeSection.title' | translate }}
      </h2>

      <p class="section-subtitle mb-8 font-light max-w-4xl mx-auto fade-in transition-colors" style="animation-delay: 0.2s;">
        {{ 'SmartHomeSection.description' | translate }}
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center fade-in" style="animation-delay: 0.3s;">
        <button class="bg-gray-900 dark:bg-white hover:bg-black dark:hover:bg-gray-100 text-white dark:text-black px-8 py-3 rounded-full text-base font-semibold tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
          {{ 'SmartHomeSection.ctaDiscover' | translate }}
        </button>

        <a href="" routerLink="/devis">
          <button class="border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-black px-8 py-3 rounded-full text-base font-semibold tracking-wide transition-all duration-300">
            {{ 'SmartHomeSection.ctaQuote' | translate }}
          </button>
        </a>
      </div>
    </div>

    <!-- Smart Home Hub Product Display -->
    <div class="relative w-full max-w-5xl mx-auto mb-20 product-reveal">
      <div class="relative flex items-center justify-center">
        <!-- Smart Hub Device -->
      </div>
    </div>

    <!-- Features Grid -->
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-10 md:mb-16 fade-in" style="animation-delay: 0.6s;">
      
      <!-- Feature 1: Éclairage -->
      <div class="group bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-6 hover:shadow-xl hover:border-gray-900 dark:hover:border-white transition-all duration-300 hover:-translate-y-2">
        <div class="w-14 h-14 bg-gray-900 dark:bg-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
          <svg class="w-7 h-7 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
          </svg>
        </div>
        <h3 class="block-title mb-2 transition-colors">
          {{ 'SmartHomeSection.features.lighting.title' | translate }}
        </h3>
        <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed transition-colors">
          {{ 'SmartHomeSection.features.lighting.description' | translate }}
        </p>
      </div>

      <!-- Feature 2: Climatisation -->
      <div class="group bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-6 hover:shadow-xl hover:border-gray-900 dark:hover:border-white transition-all duration-300 hover:-translate-y-2">
        <div class="w-14 h-14 bg-gray-900 dark:bg-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
          <svg class="w-7 h-7 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"/>
          </svg>
        </div>
        <h3 class="block-title mb-2 transition-colors">
          {{ 'SmartHomeSection.features.climate.title' | translate }}
        </h3>
        <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed transition-colors">
          {{ 'SmartHomeSection.features.climate.description' | translate }}
        </p>
      </div>

      <!-- Feature 3: Volets -->
      <div class="group bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-6 hover:shadow-xl hover:border-gray-900 dark:hover:border-white transition-all duration-300 hover:-translate-y-2">
        <div class="w-14 h-14 bg-gray-900 dark:bg-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
          <svg class="w-7 h-7 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/>
          </svg>
        </div>
        <h3 class="block-title mb-2 transition-colors">
          {{ 'SmartHomeSection.features.blinds.title' | translate }}
        </h3>
        <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed transition-colors">
          {{ 'SmartHomeSection.features.blinds.description' | translate }}
        </p>
      </div>

      <!-- Feature 4: Scénarios -->
      <div class="group bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-6 hover:shadow-xl hover:border-gray-900 dark:hover:border-white transition-all duration-300 hover:-translate-y-2">
        <div class="w-14 h-14 bg-gray-900 dark:bg-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
          <svg class="w-7 h-7 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
          </svg>
        </div>
        <h3 class="block-title mb-2 transition-colors">
          {{ 'SmartHomeSection.features.scenarios.title' | translate }}
        </h3>
        <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed transition-colors">
          {{ 'SmartHomeSection.features.scenarios.description' | translate }}
        </p>
      </div>

      <!-- Feature 5: Monitoring -->
      <div class="group bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-6 hover:shadow-xl hover:border-gray-900 dark:hover:border-white transition-all duration-300 hover:-translate-y-2">
        <div class="w-14 h-14 bg-gray-900 dark:bg-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
          <svg class="w-7 h-7 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
          </svg>
        </div>
        <h3 class="block-title mb-2 transition-colors">
          {{ 'SmartHomeSection.features.monitoring.title' | translate }}
        </h3>
        <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed transition-colors">
          {{ 'SmartHomeSection.features.monitoring.description' | translate }}
        </p>
      </div>

      <!-- Feature 6: Avantages (Highlighted) -->
      <div class="group bg-gray-900 dark:bg-white border-2 border-gray-900 dark:border-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-white dark:text-black">
        <div class="w-14 h-14 bg-white dark:bg-black rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <svg class="w-7 h-7 text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
          </svg>
        </div>
        <h3 class="text-lg font-bold mb-2">
          {{ 'SmartHomeSection.advantages.title' | translate }}
        </h3>
        <p class="text-gray-300 dark:text-gray-700 text-sm leading-relaxed">
          {{ 'SmartHomeSection.advantages.description' | translate }}
        </p>
      </div>

    </div>

    <!-- Marketing Hooks -->
    <div class="bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 fade-in transition-colors" style="animation-delay: 0.8s;">
      <div class="grid md:grid-cols-2 gap-6">
        
        <!-- Hook 1 -->
        <div class="flex items-start gap-4 group cursor-pointer">
          <div class="flex-shrink-0">
            <div class="w-10 h-10 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-all">
              <svg class="w-5 h-5 text-white dark:text-black" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
            </div>
          </div>
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
            {{ 'SmartHomeSection.hooks.hook1' | translate }}
          </p>
        </div>

        <!-- Hook 2 -->
        <div class="flex items-start gap-4 group cursor-pointer">
          <div class="flex-shrink-0">
            <div class="w-10 h-10 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-all">
              <svg class="w-5 h-5 text-white dark:text-black" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
            </div>
          </div>
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
            {{ 'SmartHomeSection.hooks.hook2' | translate }}
          </p>
        </div>

        <!-- Hook 3 -->
        <div class="flex items-start gap-4 group cursor-pointer">
          <div class="flex-shrink-0">
            <div class="w-10 h-10 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-all">
              <svg class="w-5 h-5 text-white dark:text-black" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
            </div>
          </div>
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
            {{ 'SmartHomeSection.hooks.hook3' | translate }}
          </p>
        </div>

        <!-- Hook 4 -->
        <div class="flex items-start gap-4 group cursor-pointer">
          <div class="flex-shrink-0">
            <div class="w-10 h-10 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-all">
              <svg class="w-5 h-5 text-white dark:text-black" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
            </div>
          </div>
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
            {{ 'SmartHomeSection.hooks.hook4' | translate }}
          </p>
        </div>

      </div>
    </div>

  </div>

</section>
  `,
  styles: [`
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes productReveal {
      from {
        opacity: 0;
        transform: translateY(30px) scale(0.95);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }
    
    .fade-in {
      animation: fadeIn 1s ease-out forwards;
      opacity: 0;
    }
    
    .product-reveal {
      animation: productReveal 1.2s ease-out 0.4s forwards;
      opacity: 0;
    }
  `]
})
export class SmartHomeSectionSectionComponent {}