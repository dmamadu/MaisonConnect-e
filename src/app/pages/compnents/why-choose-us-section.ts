import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-why-choose-us-section',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink],
  template: `
<section class="relative py-20 md:py-32 bg-white dark:bg-black overflow-hidden transition-colors duration-300">

  <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <!-- Main Slogan -->
    <div class="text-center mb-20">
      <div class="inline-block mb-8">
        <div class="flex items-center gap-3 bg-black dark:bg-white px-6 py-3 rounded-full">
          <div class="w-2 h-2 bg-white dark:bg-black rounded-full animate-pulse"></div>
          <span class="text-white dark:text-black text-sm font-medium tracking-wider">{{ 'WhyUs.badge' | translate }}</span>
        </div>
      </div>

      <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
        {{ 'WhyUs.mainSlogan' | translate }}
      </h2>
      
      <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light mb-4">
        {{ 'WhyUs.shortSlogan' | translate }}
      </p>

      <!-- Decorative line -->
      <div class="flex items-center justify-center gap-3 mt-8">
        <div class="h-px w-16 bg-gradient-to-r from-transparent to-gray-900 dark:to-white"></div>
        <div class="w-2 h-2 bg-gray-900 dark:bg-white rounded-full"></div>
        <div class="h-px w-16 bg-gradient-to-l from-transparent to-gray-900 dark:to-white"></div>
      </div>
    </div>

    <!-- Reasons Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
      
      <!-- Reason 1: Qualité de service -->
      <div class="group relative bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-8 hover:bg-white dark:hover:bg-slate-800 hover:border-gray-900 dark:hover:border-white hover:shadow-xl transition-all duration-300 overflow-hidden">
        
        <div class="relative z-10">
          <div class="w-16 h-16 bg-gray-900 dark:bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
            <svg class="w-8 h-8 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
            </svg>
          </div>
          
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
            {{ 'WhyUs.reasons.quality.title' | translate }}
          </h3>
          
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
            {{ 'WhyUs.reasons.quality.description' | translate }}
          </p>
        </div>
      </div>

      <!-- Reason 2: Design -->
      <div class="group relative bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-8 hover:bg-white dark:hover:bg-slate-800 hover:border-gray-900 dark:hover:border-white hover:shadow-xl transition-all duration-300 overflow-hidden">
        
        <div class="relative z-10">
          <div class="w-16 h-16 bg-gray-900 dark:bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
            <svg class="w-8 h-8 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>
            </svg>
          </div>
          
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
            {{ 'WhyUs.reasons.design.title' | translate }}
          </h3>
          
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
            {{ 'WhyUs.reasons.design.description' | translate }}
          </p>
        </div>
      </div>

      <!-- Reason 3: Confort -->
      <div class="group relative bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-8 hover:bg-white dark:hover:bg-slate-800 hover:border-gray-900 dark:hover:border-white hover:shadow-xl transition-all duration-300 overflow-hidden">
        
        <div class="relative z-10">
          <div class="w-16 h-16 bg-gray-900 dark:bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
            <svg class="w-8 h-8 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
            </svg>
          </div>
          
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
            {{ 'WhyUs.reasons.comfort.title' | translate }}
          </h3>
          
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
            {{ 'WhyUs.reasons.comfort.description' | translate }}
          </p>
        </div>
      </div>

      <!-- Reason 4: Modernité -->
      <div class="group relative bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-8 hover:bg-white dark:hover:bg-slate-800 hover:border-gray-900 dark:hover:border-white hover:shadow-xl transition-all duration-300 overflow-hidden">
        
        <div class="relative z-10">
          <div class="w-16 h-16 bg-gray-900 dark:bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
            <svg class="w-8 h-8 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
            {{ 'WhyUs.reasons.modernity.title' | translate }}
          </h3>
          
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
            {{ 'WhyUs.reasons.modernity.description' | translate }}
          </p>
        </div>
      </div>

      <!-- Reason 5: Sécurité -->
      <div class="group relative bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-8 hover:bg-white dark:hover:bg-slate-800 hover:border-gray-900 dark:hover:border-white hover:shadow-xl transition-all duration-300 overflow-hidden">
        
        <div class="relative z-10">
          <div class="w-16 h-16 bg-gray-900 dark:bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
            <svg class="w-8 h-8 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
            </svg>
          </div>
          
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
            {{ 'WhyUs.reasons.security.title' | translate }}
          </h3>
          
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
            {{ 'WhyUs.reasons.security.description' | translate }}
          </p>
        </div>
      </div>

      <!-- Reason 6: Économie d'énergie -->
      <div class="group relative bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-8 hover:bg-white dark:hover:bg-slate-800 hover:border-gray-900 dark:hover:border-white hover:shadow-xl transition-all duration-300 overflow-hidden">
        
        <div class="relative z-10">
          <div class="w-16 h-16 bg-gray-900 dark:bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
            <svg class="w-8 h-8 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
            </svg>
          </div>
          
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
            {{ 'WhyUs.reasons.energy.title' | translate }}
          </h3>
          
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
            {{ 'WhyUs.reasons.energy.description' | translate }}
          </p>
        </div>
      </div>

      <!-- Reason 7: Garantie Premium -->
      <div class="group relative bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-8 hover:bg-white dark:hover:bg-slate-800 hover:border-gray-900 dark:hover:border-white hover:shadow-xl transition-all duration-300 overflow-hidden">
        
        <div class="relative z-10">
          <div class="w-16 h-16 bg-gray-900 dark:bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
            <svg class="w-8 h-8 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
            </svg>
          </div>
          
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
            {{ 'WhyUs.reasons.warranty.title' | translate }}
          </h3>
          
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
            {{ 'WhyUs.reasons.warranty.description' | translate }}
          </p>
        </div>
      </div>

      <!-- Reason 8: Installation certifiée -->
      <div class="group relative bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-8 hover:bg-white dark:hover:bg-slate-800 hover:border-gray-900 dark:hover:border-white hover:shadow-xl transition-all duration-300 overflow-hidden">
        
        <div class="relative z-10">
          <div class="w-16 h-16 bg-gray-900 dark:bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
            <svg class="w-8 h-8 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
          </div>
          
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
            {{ 'WhyUs.reasons.installation.title' | translate }}
          </h3>
          
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
            {{ 'WhyUs.reasons.installation.description' | translate }}
          </p>
        </div>
      </div>

      <!-- Reason 9: Support 24/7 -->
      <div class="group relative bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-8 hover:bg-white dark:hover:bg-slate-800 hover:border-gray-900 dark:hover:border-white hover:shadow-xl transition-all duration-300 overflow-hidden">
        
        <div class="relative z-10">
          <div class="w-16 h-16 bg-gray-900 dark:bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
            <svg class="w-8 h-8 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
            </svg>
          </div>
          
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
            {{ 'WhyUs.reasons.support.title' | translate }}
          </h3>
          
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
            {{ 'WhyUs.reasons.support.description' | translate }}
          </p>
        </div>
      </div>

    </div>

    <!-- Stats Section -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
      <div class="text-center p-6 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl hover:bg-white dark:hover:bg-slate-800 transition-all duration-300">
        <div class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
          500+
        </div>
        <div class="text-sm text-gray-600 dark:text-gray-400">{{ 'WhyUs.stats.projects' | translate }}</div>
      </div>
      
      <div class="text-center p-6 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl hover:bg-white dark:hover:bg-slate-800 transition-all duration-300">
        <div class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
          98%
        </div>
        <div class="text-sm text-gray-600 dark:text-gray-400">{{ 'WhyUs.stats.satisfaction' | translate }}</div>
      </div>
      
      <div class="text-center p-6 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl hover:bg-white dark:hover:bg-slate-800 transition-all duration-300">
        <div class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
          10+
        </div>
        <div class="text-sm text-gray-600 dark:text-gray-400">{{ 'WhyUs.stats.experience' | translate }}</div>
      </div>
      
      <div class="text-center p-6 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl hover:bg-white dark:hover:bg-slate-800 transition-all duration-300">
        <div class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
          24/7
        </div>
        <div class="text-sm text-gray-600 dark:text-gray-400">{{ 'WhyUs.stats.support' | translate }}</div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="text-center">
      <div class="inline-block bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-3xl p-8 md:p-12">
        <h3 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
          {{ 'WhyUs.cta.title' | translate }}
        </h3>
        
        <p class="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          {{ 'WhyUs.cta.description' | translate }}
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="" routerLink="/devis">
            <button class="group relative bg-gray-900 dark:bg-white hover:bg-black dark:hover:bg-gray-100 text-white dark:text-black px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              <span class="flex items-center gap-2">
                {{ 'WhyUs.cta.button' | translate }}
                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </span>
            </button>
          </a>
          
          <button class="bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 text-gray-900 dark:text-white border border-gray-300 dark:border-slate-700 hover:border-gray-900 dark:hover:border-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300">
            {{ 'WhyUs.cta.contact' | translate }}
          </button>
        </div>
      </div>
    </div>

  </div>

</section>
  `,
  styles: [`
    /* Minimal animations */
  `]
})
export class WhyChooseUsSectionComponent {}