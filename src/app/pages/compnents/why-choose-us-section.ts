import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-why-choose-us-section',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink],
  template: `
<section class="relative py-12 md:py-20 lg:py-32 bg-white dark:bg-black overflow-hidden transition-colors duration-300">

  <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <!-- En-tête -->
    <div class="text-center mb-12 md:mb-16">
      <div class="inline-block mb-8">
        <div class="flex items-center gap-3 bg-[#0097A7] px-6 py-3 rounded-full">
          <div class="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <span class="text-white text-sm font-medium tracking-wider">{{ 'WhyUs.badge' | translate }}</span>
        </div>
      </div>
      <h2 class="section-title mb-6 leading-tight">
        {{ 'WhyUs.mainSlogan' | translate }}
      </h2>
      <p class="section-subtitle font-light mb-4">
        {{ 'WhyUs.shortSlogan' | translate }}
      </p>
      <div class="flex items-center justify-center gap-3 mt-6">
        <div class="h-px w-16 bg-gradient-to-r from-transparent to-gray-900 dark:to-white"></div>
        <div class="w-2 h-2 bg-gray-900 dark:bg-white rounded-full"></div>
        <div class="h-px w-16 bg-gradient-to-l from-transparent to-gray-900 dark:to-white"></div>
      </div>
    </div>

    <!-- Slider 2 slides -->
    <div class="relative overflow-hidden">
      <div class="slides-wrapper transition-transform duration-500 ease-in-out flex"
           [style.transform]="'translateX(-' + (activeSlide * 100) + '%)'">

        <!-- ── Slide 1 : 3 premières raisons ── -->
        <div class="min-w-full">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            <div *ngFor="let r of slide1" class="group bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-5 md:p-8 hover:bg-white dark:hover:bg-slate-800 hover:border-[#0097A7] hover:shadow-xl transition-all duration-300">
              <div class="w-16 h-16 bg-[#0097A7] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="r.icon"/>
                </svg>
              </div>
              <h3 class="block-title mb-3">{{ r.title | translate }}</h3>
              <p class="text-gray-600 dark:text-gray-400 leading-relaxed">{{ r.desc | translate }}</p>
            </div>
          </div>
        </div>

        <!-- ── Slide 2 : 6 raisons restantes ── -->
        <div class="min-w-full">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <div *ngFor="let r of slide2" class="group bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-5 md:p-8 hover:bg-white dark:hover:bg-slate-800 hover:border-[#0097A7] hover:shadow-xl transition-all duration-300">
              <div class="w-16 h-16 bg-[#0097A7] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="r.icon"/>
                </svg>
              </div>
              <h3 class="block-title mb-3">{{ r.title | translate }}</h3>
              <p class="text-gray-600 dark:text-gray-400 leading-relaxed">{{ r.desc | translate }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Navigation slides -->
    <div class="flex items-center justify-center gap-6 mt-10">
      <button (click)="prev()"
              [disabled]="activeSlide === 0"
              class="w-10 h-10 rounded-full border-2 border-gray-300 dark:border-slate-700
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
                (click)="activeSlide = i"
                class="rounded-full transition-all duration-300"
                [style.width]="activeSlide === i ? '24px' : '8px'"
                [style.height]="'8px'"
                [style.background]="activeSlide === i ? '#0097A7' : '#d1d5db'">
        </button>
      </div>

      <button (click)="next()"
              [disabled]="activeSlide === 1"
              class="w-10 h-10 rounded-full border-2 border-gray-300 dark:border-slate-700
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
    <div class="mt-16 md:mt-20 bg-gray-50 dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-3xl p-8 md:p-12">
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

      <!-- Canaux de support -->
      <div class="grid sm:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">

        <!-- WhatsApp -->
        <div class="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:border-[#25D366] dark:hover:border-[#25D366] hover:shadow-lg transition-all duration-300">
          <div class="w-12 h-12 bg-[#25D366]/10 rounded-xl flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </div>
          <h4 class="font-bold text-gray-900 dark:text-white mb-1">WhatsApp</h4>
          <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">Réponse rapide en moins de 5 minutes</p>
          <a href="https://wa.me/+221786722222" target="_blank" rel="noopener noreferrer"
             class="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full
                    bg-[#25D366] hover:bg-[#1ebe5d] text-white text-sm font-semibold
                    transition-all duration-300 shadow-sm">
            <svg class="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Envoyer un message
          </a>
        </div>

        <!-- Email -->
        <div class="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:border-[#0097A7] dark:hover:border-[#0097A7] hover:shadow-lg transition-all duration-300">
          <div class="w-12 h-12 bg-[#0097A7]/10 rounded-xl flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-[#0097A7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </div>
          <h4 class="font-bold text-gray-900 dark:text-white mb-1">Email</h4>
          <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">Réponse garantie sous 24h</p>
          <a href="mailto:contact@itsloneed.com"
             class="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full
                    bg-[#0097A7] hover:bg-[#42B7C4] text-white text-sm font-semibold
                    transition-all duration-300 shadow-sm">
            <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            Envoyer un email
          </a>
        </div>

      </div>

      <!-- Boutons d'action -->
      <div class="flex flex-col sm:flex-row gap-3 justify-center">
        <a routerLink="/contact"
           class="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full
                  bg-[#0097A7] hover:bg-[#42B7C4] text-white font-semibold
                  transition-all duration-300 shadow-md hover:shadow-lg">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
          </svg>
          Nous contacter
        </a>
        <a routerLink="/support"
           class="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full
                  border-2 border-gray-300 dark:border-gray-700
                  text-gray-700 dark:text-gray-300 font-semibold
                  hover:border-[#0097A7] hover:text-[#0097A7]
                  dark:hover:border-[#0097A7] dark:hover:text-[#42B7C4]
                  transition-all duration-300">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
          </svg>
          Centre de support
        </a>
      </div>
    </div>

    <!-- CTA "Prêt à démarrer votre projet" -->
    <div class="mt-10 md:mt-12 bg-gradient-to-br from-[#0097A7] to-[#007a8a] rounded-3xl p-8 md:p-12 text-center text-white">
      <h3 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">{{ 'WhyUs.cta.title' | translate }}</h3>
      <p class="text-white/80 text-lg max-w-xl mx-auto mb-8">{{ 'WhyUs.cta.description' | translate }}</p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
        <a routerLink="/devis"
           class="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full
                  bg-white text-[#0097A7] font-semibold hover:bg-gray-100
                  transition-all duration-300 shadow-lg hover:shadow-xl">
          Demander un devis
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </a>
        <a href="https://wa.me/+221786722222" target="_blank" rel="noopener noreferrer"
           class="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full
                  border-2 border-white/50 text-white hover:border-white hover:bg-white/10
                  font-semibold transition-all duration-300">
          <svg class="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          WhatsApp
        </a>
        <a routerLink="/contact"
           class="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full
                  border-2 border-white/50 text-white hover:border-white hover:bg-white/10
                  font-semibold transition-all duration-300">
          Nous contacter
        </a>
      </div>
    </div>

  </div>

</section>
  `,
  styles: [`
    .slides-wrapper { display: flex; will-change: transform; }
  `]
})
export class WhyChooseUsSectionComponent {
  activeSlide = 0;

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

  prev() { if (this.activeSlide > 0) this.activeSlide--; }
  next() { if (this.activeSlide < 1) this.activeSlide++; }
}