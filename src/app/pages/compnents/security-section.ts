import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-security-section',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink],
  template: `
<section class="relative py-12 md:py-20 lg:py-32 bg-gray-50 dark:bg-slate-950 overflow-hidden transition-colors duration-300">

  <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <!-- Section Header -->
    <div class="text-center mb-10 md:mb-16 lg:mb-20">
      <div class="inline-block bg-black dark:bg-white text-white dark:text-black px-5 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 md:mb-8">
        {{ 'Security.badge' | translate }}
      </div>

      <h2 class="section-title mb-6 leading-tight">
        {{ 'Security.title' | translate }}
      </h2>

      <p class="section-subtitle max-w-3xl mx-auto mb-8">
        {{ 'Security.description' | translate }}
      </p>

      <!-- Slogan with line -->
      <div class="flex items-center justify-center gap-4 mt-8">
        <div class="h-px w-16 bg-gradient-to-r from-transparent to-gray-900 dark:to-white"></div>
        <p class="text-lg font-medium text-gray-900 dark:text-white">
          {{ 'Security.slogan' | translate }}
        </p>
        <div class="h-px w-16 bg-gradient-to-l from-transparent to-gray-900 dark:to-white"></div>
      </div>
    </div>

    <!-- Large Featured Service -->
    <div class="mb-16">
      <div class="relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-gray-200 dark:border-slate-800 shadow-2xl">
        <div class="grid md:grid-cols-2 gap-0">
          <!-- Left: Image/Visual -->
          <div class="relative bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 p-6 md:p-12 flex items-center justify-center min-h-[220px] md:min-h-[400px]">
            <div class="relative">
              <!-- Shield icon large -->
              <div class="w-48 h-48 bg-black dark:bg-white rounded-full flex items-center justify-center shadow-2xl">
                <svg class="w-24 h-24 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <!-- Decorative circles -->
              <div class="absolute -top-4 -right-4 w-32 h-32 border-2 border-gray-900 dark:border-white rounded-full opacity-20"></div>
              <div class="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-gray-900 dark:border-white rounded-full opacity-20"></div>
            </div>
          </div>

          <!-- Right: Content -->
          <div class="p-12 flex flex-col justify-center">
            <h3 class="section-title mb-6">
              {{ 'Security.quality.title' | translate }}
            </h3>
            <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              {{ 'Security.quality.description' | translate }}
            </p>
            <div class="flex gap-4">
              <div class="flex items-center gap-2 text-gray-900 dark:text-white">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span class="text-sm font-medium">24/7</span>
              </div>
              <div class="flex items-center gap-2 text-gray-900 dark:text-white">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span class="text-sm font-medium">Certifié</span>
              </div>
              <div class="flex items-center gap-2 text-gray-900 dark:text-white">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span class="text-sm font-medium">Garanti</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Services Grid - Compact -->
    <div class="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
      
      <!-- Service 1 -->
      <div class="group bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-200 dark:border-slate-800 hover:border-gray-900 dark:hover:border-white hover:shadow-xl transition-all duration-300">
        <div class="w-10 h-10 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <svg class="w-5 h-5 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
          </svg>
        </div>
        <h4 class="block-title mb-2">
          {{ 'Security.services.alarm.title' | translate }}
        </h4>
        <p class="text-sm text-gray-600 dark:text-gray-400">
          Protection intelligente 24/7
        </p>
      </div>

      <!-- Service 2 -->
      <div class="group bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-200 dark:border-slate-800 hover:border-gray-900 dark:hover:border-white hover:shadow-xl transition-all duration-300">
        <div class="w-10 h-10 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <svg class="w-5 h-5 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
          </svg>
        </div>
        <h4 class="block-title mb-2">
          {{ 'Security.services.cctv.title' | translate }}
        </h4>
        <p class="text-sm text-gray-600 dark:text-gray-400">
          HD & IA avancée
        </p>
      </div>

      <!-- Service 3 -->
      <div class="group bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-200 dark:border-slate-800 hover:border-gray-900 dark:hover:border-white hover:shadow-xl transition-all duration-300">
        <div class="w-10 h-10 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <svg class="w-5 h-5 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
          </svg>
        </div>
        <h4 class="block-title mb-2">
          {{ 'Security.services.access.title' | translate }}
        </h4>
        <p class="text-sm text-gray-600 dark:text-gray-400">
          Accès sécurisé moderne
        </p>
      </div>

      <!-- Service 4 -->
      <div class="group bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-200 dark:border-slate-800 hover:border-gray-900 dark:hover:border-white hover:shadow-xl transition-all duration-300">
        <div class="w-10 h-10 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <svg class="w-5 h-5 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
          </svg>
        </div>
        <h4 class="block-title mb-2">
          {{ 'Security.services.intercom.title' | translate }}
        </h4>
        <p class="text-sm text-gray-600 dark:text-gray-400">
          Interphone connecté
        </p>
      </div>

      <!-- Service 5 -->
      <div class="group bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-200 dark:border-slate-800 hover:border-gray-900 dark:hover:border-white hover:shadow-xl transition-all duration-300">
        <div class="w-10 h-10 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <svg class="w-5 h-5 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"/>
          </svg>
        </div>
        <h4 class="block-title mb-2">
          {{ 'Security.services.detection.title' | translate }}
        </h4>
        <p class="text-sm text-gray-600 dark:text-gray-400">
          Détection incendie & gaz
        </p>
      </div>

    </div>

    <!-- Marketing Hooks - Two Column Layout -->
    <div class="grid md:grid-cols-2 gap-8 mb-16">
      
      <div class="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-gray-200 dark:border-slate-800">
        <div class="flex items-start gap-4 mb-6">
          <div class="w-8 h-8 bg-black dark:bg-white rounded-full flex items-center justify-center flex-shrink-0">
            <span class="text-white dark:text-black text-sm font-bold">1</span>
          </div>
          <p class="text-base text-gray-700 dark:text-gray-300 leading-relaxed pt-1">
            {{ 'Security.hooks.hook1' | translate }}
          </p>
        </div>
        
        <div class="flex items-start gap-4">
          <div class="w-8 h-8 bg-black dark:bg-white rounded-full flex items-center justify-center flex-shrink-0">
            <span class="text-white dark:text-black text-sm font-bold">2</span>
          </div>
          <p class="text-base text-gray-700 dark:text-gray-300 leading-relaxed pt-1">
            {{ 'Security.hooks.hook2' | translate }}
          </p>
        </div>
      </div>

      <div class="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-gray-200 dark:border-slate-800">
        <div class="flex items-start gap-4 mb-6">
          <div class="w-8 h-8 bg-black dark:bg-white rounded-full flex items-center justify-center flex-shrink-0">
            <span class="text-white dark:text-black text-sm font-bold">3</span>
          </div>
          <p class="text-base text-gray-700 dark:text-gray-300 leading-relaxed pt-1">
            {{ 'Security.hooks.hook3' | translate }}
          </p>
        </div>
        
        <div class="flex items-start gap-4">
          <div class="w-8 h-8 bg-black dark:bg-white rounded-full flex items-center justify-center flex-shrink-0">
            <span class="text-white dark:text-black text-sm font-bold">4</span>
          </div>
          <p class="text-base text-gray-700 dark:text-gray-300 leading-relaxed pt-1">
            {{ 'Security.hooks.hook4' | translate }}
          </p>
        </div>
      </div>

    </div>

    <!-- CTA -->
    <div class="text-center">
      <a href="" routerLink="/devis">
        <button class="bg-gray-900 dark:bg-white hover:bg-black dark:hover:bg-gray-100 text-white dark:text-black px-10 py-4 rounded-full text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
          {{ 'Security.ctaButton' | translate }}
        </button>
      </a>
      <p class="text-sm text-gray-500 dark:text-gray-400 mt-4">
        Consultation gratuite pour votre sécurité
      </p>
    </div>

  </div>

</section>
  `,
  styles: [`
    /* Minimal animations */
  `]
})
export class SecuritySectionComponent {}