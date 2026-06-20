import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-smart-home-carousel',
  standalone: true,
  imports: [CommonModule, TranslateModule,RouterLink],
  template: `
    <section class="relative min-h-screen bg-white dark:bg-black py-12 md:py-20 transition-colors duration-300 overflow-hidden">
      
      <!-- Carousel container -->
      <div class="relative max-w-7xl mx-auto px-4 md:px-8">
        
        <!-- Header -->
        <div class="text-center mb-10 md:mb-20">
          <h2 class="section-title mb-4 md:mb-6 tracking-tight">
            {{ 'home3.carousel.title' | translate }}
          </h2>
          <p class="section-subtitle max-w-3xl mx-auto font-light">
            {{ 'home3.carousel.subtitle' | translate }}
          </p>
        </div>

        <!-- Carousel track -->
        <div class="relative overflow-hidden">
          <div 
            class="flex transition-transform duration-700 ease-out"
            [style.transform]="'translateX(-' + (currentSlide * 100) + '%)'">
            
            <!-- Slide 1: Sécurité -->
            <div class="min-w-full flex-shrink-0 px-2">
              <div class="relative rounded-2xl md:rounded-[2.5rem] overflow-hidden aspect-[4/3] md:aspect-[16/9]
                          bg-white dark:bg-black
                          group cursor-pointer transition-all duration-700">
                
                <!-- Content -->
                <div class="absolute inset-0 flex items-center justify-center p-4 sm:p-8 md:p-12 lg:p-16">
                  <div class="relative w-full max-w-6xl">
                    
                    <!-- Large centered icon -->
                    <div class="hidden md:flex items-center justify-center md:mb-16">
                      <div class="relative">
                        <!-- Background circle -->
                        <div class="absolute inset-0 w-64 h-64 md:w-80 md:h-80 
                                    bg-gray-100 dark:bg-zinc-900 
                                    rounded-full blur-3xl opacity-50
                                    group-hover:scale-110 transition-transform duration-1000"></div>
                        
                        <!-- Main shield icon -->
                        <div class="relative">
                          <svg class="w-64 h-64 md:w-80 md:h-80 text-black dark:text-white
                                      transform group-hover:scale-105 transition-transform duration-700" 
                               viewBox="0 0 24 24" fill="none">
                            <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
                                  stroke="currentColor" 
                                  stroke-width="0.5" 
                                  stroke-linecap="round" 
                                  stroke-linejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    <!-- Feature grid -->
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                      <!-- Camera -->
                      <div class="flex flex-col items-center text-center group/item">
                        <div class="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-2 sm:mb-4
                                    bg-gray-50 dark:bg-zinc-900
                                    rounded-xl md:rounded-2xl flex items-center justify-center
                                    group-hover/item:bg-gray-100 dark:group-hover/item:bg-zinc-800
                                    transition-all duration-300">
                          <svg class="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-black dark:text-white"
                               fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                            <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
                          </svg>
                        </div>
                        <p class="text-sm font-medium text-gray-900 dark:text-gray-100">Caméras HD</p>
                      </div>
                      
                      <!-- Lock -->
                      <div class="flex flex-col items-center text-center group/item">
                        <div class="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-2 sm:mb-4
                                    bg-gray-50 dark:bg-zinc-900
                                    rounded-xl md:rounded-2xl flex items-center justify-center
                                    group-hover/item:bg-gray-100 dark:group-hover/item:bg-zinc-800
                                    transition-all duration-300">
                          <svg class="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-black dark:text-white"
                               fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"/>
                          </svg>
                        </div>
                        <p class="text-sm font-medium text-gray-900 dark:text-gray-100">Serrures</p>
                      </div>
                      
                      <!-- Alarm -->
                      <div class="flex flex-col items-center text-center group/item">
                        <div class="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-2 sm:mb-4
                                    bg-gray-50 dark:bg-zinc-900
                                    rounded-xl md:rounded-2xl flex items-center justify-center
                                    group-hover/item:bg-gray-100 dark:group-hover/item:bg-zinc-800
                                    transition-all duration-300">
                          <svg class="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-black dark:text-white"
                               fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
                          </svg>
                        </div>
                        <p class="text-sm font-medium text-gray-900 dark:text-gray-100">Alarmes</p>
                      </div>
                      
                      <!-- Sensor -->
                      <div class="flex flex-col items-center text-center group/item">
                        <div class="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-2 sm:mb-4
                                    bg-gray-50 dark:bg-zinc-900
                                    rounded-xl md:rounded-2xl flex items-center justify-center
                                    group-hover/item:bg-gray-100 dark:group-hover/item:bg-zinc-800
                                    transition-all duration-300">
                          <svg class="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-black dark:text-white"
                               fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                          </svg>
                        </div>
                        <p class="text-sm font-medium text-gray-900 dark:text-gray-100">Détecteurs</p>
                      </div>
                    </div>
                    
                  </div>
                </div>
                
                <!-- Title overlay -->
                <div class="absolute bottom-0 left-0 right-0 
                            bg-gradient-to-t from-white via-white/95 to-transparent
                            dark:from-black dark:via-black/95 dark:to-transparent
                            pt-8 md:pt-32 pb-4 md:pb-12 px-4 md:px-8">
                  <div class="max-w-4xl mx-auto text-center">
                    <h3 class="section-title mb-3 md:mb-6 tracking-tight">
                      {{ 'home3.carousel.security.title' | translate }}
                    </h3>
                    <p class="hidden sm:block text-sm md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-4 md:mb-8 max-w-2xl mx-auto font-light leading-relaxed">
                      {{ 'home3.carousel.security.description' | translate }}
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                      <a routerLink="/securite"
                         class="px-8 py-3 rounded-full text-base font-medium
                                bg-black dark:bg-white text-white dark:text-black
                                hover:bg-[#0097A7] dark:hover:bg-[#0097A7] dark:hover:text-white
                                transition-all duration-300 min-w-0 sm:min-w-[180px] text-center">
                        {{ 'home3.carousel.security.cta' | translate }}
                      </a>
                      <a routerLink="/devis"
                         class="px-8 py-3 rounded-full text-base font-medium
                                text-black dark:text-white border border-gray-300 dark:border-gray-700
                                hover:bg-[#0097A7] hover:text-white hover:border-[#0097A7]
                                dark:hover:bg-[#0097A7] dark:hover:text-white dark:hover:border-[#0097A7]
                                transition-all duration-300 min-w-0 sm:min-w-[180px] text-center">
                        Demander un devis
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Slide 2: Domotique -->
            <div class="min-w-full flex-shrink-0 px-2">
              <div class="relative rounded-2xl md:rounded-[2.5rem] overflow-hidden aspect-[4/3] md:aspect-[16/9]
                          bg-white dark:bg-black
                          group cursor-pointer transition-all duration-700">
                
                <!-- Content -->
                <div class="absolute inset-0 flex items-center justify-center p-4 sm:p-8 md:p-12 lg:p-16">
                  <div class="relative w-full max-w-6xl">
                    
                    <!-- Large centered home icon -->
                    <div class="hidden md:flex items-center justify-center md:mb-16">
                      <div class="relative">
                        <!-- Background circle -->
                        <div class="absolute inset-0 w-64 h-64 md:w-80 md:h-80 
                                    bg-gray-100 dark:bg-zinc-900 
                                    rounded-full blur-3xl opacity-50
                                    group-hover:scale-110 transition-transform duration-1000"></div>
                        
                        <!-- Main home icon -->
                        <div class="relative">
                          <svg class="w-64 h-64 md:w-80 md:h-80 text-black dark:text-white
                                      transform group-hover:scale-105 transition-transform duration-700" 
                               viewBox="0 0 24 24" fill="none">
                            <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
                                  stroke="currentColor" 
                                  stroke-width="0.5" 
                                  stroke-linecap="round" 
                                  stroke-linejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    <!-- Feature grid -->
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                      <!-- Thermostat -->
                      <div class="flex flex-col items-center text-center group/item">
                        <div class="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-2 sm:mb-4
                                    bg-gray-50 dark:bg-zinc-900
                                    rounded-xl md:rounded-2xl flex items-center justify-center
                                    group-hover/item:bg-gray-100 dark:group-hover/item:bg-zinc-800
                                    transition-all duration-300">
                          <svg class="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-black dark:text-white"
                               fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                          </svg>
                        </div>
                        <p class="text-sm font-medium text-gray-900 dark:text-gray-100">Thermostat</p>
                      </div>
                      
                      <!-- Lighting -->
                      <div class="flex flex-col items-center text-center group/item">
                        <div class="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-2 sm:mb-4
                                    bg-gray-50 dark:bg-zinc-900
                                    rounded-xl md:rounded-2xl flex items-center justify-center
                                    group-hover/item:bg-gray-100 dark:group-hover/item:bg-zinc-800
                                    transition-all duration-300">
                          <svg class="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-black dark:text-white"
                               fill="currentColor" viewBox="0 0 20 20">
                            <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"/>
                          </svg>
                        </div>
                        <p class="text-sm font-medium text-gray-900 dark:text-gray-100">Éclairage</p>
                      </div>
                      
                      <!-- Blinds -->
                      <div class="flex flex-col items-center text-center group/item">
                        <div class="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-2 sm:mb-4
                                    bg-gray-50 dark:bg-zinc-900
                                    rounded-xl md:rounded-2xl flex items-center justify-center
                                    group-hover/item:bg-gray-100 dark:group-hover/item:bg-zinc-800
                                    transition-all duration-300">
                          <svg class="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-black dark:text-white"
                               fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"/>
                          </svg>
                        </div>
                        <p class="text-sm font-medium text-gray-900 dark:text-gray-100">Volets</p>
                      </div>
                      
                      <!-- Voice -->
                      <div class="flex flex-col items-center text-center group/item">
                        <div class="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-2 sm:mb-4
                                    bg-gray-50 dark:bg-zinc-900
                                    rounded-xl md:rounded-2xl flex items-center justify-center
                                    group-hover/item:bg-gray-100 dark:group-hover/item:bg-zinc-800
                                    transition-all duration-300">
                          <svg class="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-black dark:text-white"
                               fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clip-rule="evenodd"/>
                          </svg>
                        </div>
                        <p class="text-sm font-medium text-gray-900 dark:text-gray-100">Commande vocale</p>
                      </div>
                    </div>
                    
                  </div>
                </div>
                
                <!-- Title overlay -->
                <div class="absolute bottom-0 left-0 right-0 
                            bg-gradient-to-t from-white via-white/95 to-transparent
                            dark:from-black dark:via-black/95 dark:to-transparent
                            pt-8 md:pt-32 pb-4 md:pb-12 px-4 md:px-8">
                  <div class="max-w-4xl mx-auto text-center">
                    <h3 class="section-title mb-3 md:mb-6 tracking-tight">
                      {{ 'home3.carousel.automation.title' | translate }}
                    </h3>
                    <p class="hidden sm:block text-sm md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-4 md:mb-8 max-w-2xl mx-auto font-light leading-relaxed">
                      {{ 'home3.carousel.automation.description' | translate }}
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                      <a routerLink="/domotique"
                         class="px-8 py-3 rounded-full text-base font-medium
                                bg-black dark:bg-white text-white dark:text-black
                                hover:bg-[#0097A7] dark:hover:bg-[#0097A7] dark:hover:text-white
                                transition-all duration-300 min-w-0 sm:min-w-[180px] text-center">
                        {{ 'home3.carousel.automation.cta' | translate }}
                      </a>
                      <a routerLink="/devis"
                         class="px-8 py-3 rounded-full text-base font-medium
                                text-black dark:text-white border border-gray-300 dark:border-gray-700
                                hover:bg-[#0097A7] hover:text-white hover:border-[#0097A7]
                                dark:hover:bg-[#0097A7] dark:hover:text-white dark:hover:border-[#0097A7]
                                transition-all duration-300 min-w-0 sm:min-w-[180px] text-center">
                        Demander un devis
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Slide 3: Énergie -->
            <div class="min-w-full flex-shrink-0 px-2">
              <div class="relative rounded-2xl md:rounded-[2.5rem] overflow-hidden aspect-[4/3] md:aspect-[16/9]
                          bg-white dark:bg-black
                          group cursor-pointer transition-all duration-700">
                
                <!-- Content -->
                <div class="absolute inset-0 flex items-center justify-center p-4 sm:p-8 md:p-12 lg:p-16">
                  <div class="relative w-full max-w-6xl">
                    
                    <!-- Large centered lightning icon -->
                    <div class="hidden md:flex items-center justify-center md:mb-16">
                      <div class="relative">
                        <!-- Background circle -->
                        <div class="absolute inset-0 w-64 h-64 md:w-80 md:h-80 
                                    bg-gray-100 dark:bg-zinc-900 
                                    rounded-full blur-3xl opacity-50
                                    group-hover:scale-110 transition-transform duration-1000"></div>
                        
                        <!-- Main lightning icon -->
                        <div class="relative">
                          <svg class="w-64 h-64 md:w-80 md:h-80 text-black dark:text-white
                                      transform group-hover:scale-105 transition-transform duration-700" 
                               viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"/>
                          </svg>
                        </div>
                        
                        <!-- Percentage display -->
                        <!-- <div class="absolute inset-0 flex items-center justify-center">
                          <div class="text-center mt-8">
                            <p class="text-6xl md:text-7xl font-semibold text-black dark:text-white">-35%</p>
                          </div>
                        </div> -->
                      </div>
                    </div>
                    
                    <!-- Feature grid -->
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                      <!-- Solar -->
                      <div class="flex flex-col items-center text-center group/item">
                        <div class="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-2 sm:mb-4
                                    bg-gray-50 dark:bg-zinc-900
                                    rounded-xl md:rounded-2xl flex items-center justify-center
                                    group-hover/item:bg-gray-100 dark:group-hover/item:bg-zinc-800
                                    transition-all duration-300">
                          <svg class="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-black dark:text-white"
                               fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"/>
                          </svg>
                        </div>
                        <p class="text-sm font-medium text-gray-900 dark:text-gray-100">Solaire</p>
                      </div>
                      
                      <!-- Battery -->
                      <div class="flex flex-col items-center text-center group/item">
                        <div class="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-2 sm:mb-4
                                    bg-gray-50 dark:bg-zinc-900
                                    rounded-xl md:rounded-2xl flex items-center justify-center
                                    group-hover/item:bg-gray-100 dark:group-hover/item:bg-zinc-800
                                    transition-all duration-300">
                          <svg class="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-black dark:text-white"
                               fill="currentColor" viewBox="0 0 20 20">
                            <path d="M11 3a1 1 0 00-2 0v1H7a2 2 0 00-2 2v10a2 2 0 002 2h6a2 2 0 002-2V6a2 2 0 00-2-2h-2V3z"/>
                          </svg>
                        </div>
                        <p class="text-sm font-medium text-gray-900 dark:text-gray-100">Batterie</p>
                      </div>
                      
                      <!-- Monitoring -->
                      <div class="flex flex-col items-center text-center group/item">
                        <div class="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-2 sm:mb-4
                                    bg-gray-50 dark:bg-zinc-900
                                    rounded-xl md:rounded-2xl flex items-center justify-center
                                    group-hover/item:bg-gray-100 dark:group-hover/item:bg-zinc-800
                                    transition-all duration-300">
                          <svg class="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-black dark:text-white"
                               fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                          </svg>
                        </div>
                        <p class="text-sm font-medium text-gray-900 dark:text-gray-100">Suivi</p>
                      </div>
                      
                      <!-- Optimization -->
                      <div class="flex flex-col items-center text-center group/item">
                        <div class="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-2 sm:mb-4
                                    bg-gray-50 dark:bg-zinc-900
                                    rounded-xl md:rounded-2xl flex items-center justify-center
                                    group-hover/item:bg-gray-100 dark:group-hover/item:bg-zinc-800
                                    transition-all duration-300">
                          <svg class="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-black dark:text-white"
                               fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                  d="M13 10V3L4 14h7v7l9-11h-7z"/>
                          </svg>
                        </div>
                        <p class="text-sm font-medium text-gray-900 dark:text-gray-100">Optimisation</p>
                      </div>
                    </div>
                    
                  </div>
                </div>
                
                <!-- Title overlay -->
                <div class="absolute bottom-0 left-0 right-0 
                            bg-gradient-to-t from-white via-white/95 to-transparent
                            dark:from-black dark:via-black/95 dark:to-transparent
                            pt-8 md:pt-32 pb-4 md:pb-12 px-4 md:px-8">
                  <div class="max-w-4xl mx-auto text-center">
                    <h3 class="section-title mb-3 md:mb-6 tracking-tight">
                      {{ 'home3.carousel.energy.title' | translate }}
                    </h3>
                    <p class="hidden sm:block text-sm md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-4 md:mb-8 max-w-2xl mx-auto font-light leading-relaxed">
                      {{ 'home3.carousel.energy.description' | translate }}
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                      <a routerLink="/energie"
                         class="px-8 py-3 rounded-full text-base font-medium
                                bg-black dark:bg-white text-white dark:text-black
                                hover:bg-[#0097A7] dark:hover:bg-[#0097A7] dark:hover:text-white
                                transition-all duration-300 min-w-0 sm:min-w-[180px] text-center">
                        {{ 'home3.carousel.energy.cta' | translate }}
                      </a>
                      <a routerLink="/devis"
                         class="px-8 py-3 rounded-full text-base font-medium
                                text-black dark:text-white border border-gray-300 dark:border-gray-700
                                hover:bg-[#0097A7] hover:text-white hover:border-[#0097A7]
                                dark:hover:bg-[#0097A7] dark:hover:text-white dark:hover:border-[#0097A7]
                                transition-all duration-300 min-w-0 sm:min-w-[180px] text-center">
                        Demander un devis
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Slide 4: Finition -->
            <div class="min-w-full flex-shrink-0 px-2">
              <div class="relative rounded-2xl md:rounded-[2.5rem] overflow-hidden aspect-[4/3] md:aspect-[16/9]
                          bg-white dark:bg-black
                          group cursor-pointer transition-all duration-700">
                
                <!-- Content -->
                <div class="absolute inset-0 flex items-center justify-center p-4 sm:p-8 md:p-12 lg:p-16">
                  <div class="relative w-full max-w-6xl">
                    
                    <!-- Large centered palette icon -->
                    <div class="hidden md:flex items-center justify-center md:mb-16">
                      <div class="relative">
                        <!-- Background circle -->
                        <div class="absolute inset-0 w-64 h-64 md:w-80 md:h-80 
                                    bg-gray-100 dark:bg-zinc-900 
                                    rounded-full blur-3xl opacity-50
                                    group-hover:scale-110 transition-transform duration-1000"></div>
                        
                        <!-- Main palette icon -->
                        <div class="relative">
                          <svg class="w-64 h-64 md:w-80 md:h-80 text-black dark:text-white
                                      transform group-hover:scale-105 transition-transform duration-700" 
                               viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clip-rule="evenodd"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    <!-- Feature grid -->
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                      <!-- Design -->
                      <div class="flex flex-col items-center text-center group/item">
                        <div class="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-2 sm:mb-4
                                    bg-gray-50 dark:bg-zinc-900
                                    rounded-xl md:rounded-2xl flex items-center justify-center
                                    group-hover/item:bg-gray-100 dark:group-hover/item:bg-zinc-800
                                    transition-all duration-300">
                          <svg class="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-black dark:text-white"
                               fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                  d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                          </svg>
                        </div>
                        <p class="text-sm font-medium text-gray-900 dark:text-gray-100">Design</p>
                      </div>
                      
                      <!-- Switches -->
                      <div class="flex flex-col items-center text-center group/item">
                        <div class="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-2 sm:mb-4
                                    bg-gray-50 dark:bg-zinc-900
                                    rounded-xl md:rounded-2xl flex items-center justify-center
                                    group-hover/item:bg-gray-100 dark:group-hover/item:bg-zinc-800
                                    transition-all duration-300">
                          <div class="w-10 h-6 bg-black dark:bg-white rounded-full relative">
                            <div class="absolute right-1 top-1 w-4 h-4 bg-white dark:bg-black rounded-full"></div>
                          </div>
                        </div>
                        <p class="text-sm font-medium text-gray-900 dark:text-gray-100">Interrupteurs</p>
                      </div>
                      
                      <!-- Outlets -->
                      <div class="flex flex-col items-center text-center group/item">
                        <div class="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-2 sm:mb-4
                                    bg-gray-50 dark:bg-zinc-900
                                    rounded-xl md:rounded-2xl flex items-center justify-center
                                    group-hover/item:bg-gray-100 dark:group-hover/item:bg-zinc-800
                                    transition-all duration-300">
                          <div class="grid grid-cols-2 gap-1">
                            <div class="w-3 h-5 bg-black dark:bg-white rounded"></div>
                            <div class="w-3 h-5 bg-black dark:bg-white rounded"></div>
                          </div>
                        </div>
                        <p class="text-sm font-medium text-gray-900 dark:text-gray-100">Prises</p>
                      </div>
                      
                      <!-- Premium -->
                      <div class="flex flex-col items-center text-center group/item">
                        <div class="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-2 sm:mb-4
                                    bg-gray-50 dark:bg-zinc-900
                                    rounded-xl md:rounded-2xl flex items-center justify-center
                                    group-hover/item:bg-gray-100 dark:group-hover/item:bg-zinc-800
                                    transition-all duration-300">
                          <svg class="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-black dark:text-white"
                               fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                        </div>
                        <p class="text-sm font-medium text-gray-900 dark:text-gray-100">Premium</p>
                      </div>
                    </div>
                    
                  </div>
                </div>
                
                <!-- Title overlay -->
                <div class="absolute bottom-0 left-0 right-0 
                            bg-gradient-to-t from-white via-white/95 to-transparent
                            dark:from-black dark:via-black/95 dark:to-transparent
                            pt-8 md:pt-32 pb-4 md:pb-12 px-4 md:px-8">
                  <div class="max-w-4xl mx-auto text-center">
                    <h3 class="section-title mb-3 md:mb-6 tracking-tight">
                      {{ 'home3.carousel.finishing.title' | translate }}
                    </h3>
                    <p class="hidden sm:block text-sm md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-4 md:mb-8 max-w-2xl mx-auto font-light leading-relaxed">
                      {{ 'home3.carousel.finishing.description' | translate }}
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                      <a routerLink="/finitions"
                         class="px-8 py-3 rounded-full text-base font-medium
                                bg-black dark:bg-white text-white dark:text-black
                                hover:bg-[#0097A7] dark:hover:bg-[#0097A7] dark:hover:text-white
                                transition-all duration-300 min-w-0 sm:min-w-[180px] text-center">
                        {{ 'home3.carousel.finishing.cta' | translate }}
                      </a>
                      <a routerLink="/devis"
                         class="px-8 py-3 rounded-full text-base font-medium
                                text-black dark:text-white border border-gray-300 dark:border-gray-700
                                hover:bg-[#0097A7] hover:text-white hover:border-[#0097A7]
                                dark:hover:bg-[#0097A7] dark:hover:text-white dark:hover:border-[#0097A7]
                                transition-all duration-300 min-w-0 sm:min-w-[180px] text-center">
                        Demander un devis
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <!-- Carousel controls -->
        <div class="flex justify-center mt-12 gap-2">
          <button 
            *ngFor="let slide of [0, 1, 2, 3]; let i = index"
            (click)="goToSlide(i)"
            [class.w-8]="currentSlide === i"
            [class.w-2]="currentSlide !== i"
            [class.bg-black]="currentSlide === i"
            [class.dark:bg-white]="currentSlide === i"
            [class.bg-gray-300]="currentSlide !== i"
            [class.dark:bg-zinc-700]="currentSlide !== i"
            class="h-2 rounded-full transition-all duration-500 cursor-pointer">
          </button>
        </div>

        <!-- Navigation arrows -->
        <button 
          *ngIf="currentSlide > 0"
          (click)="previousSlide()"
          class="absolute left-1 md:left-4 top-1/2 transform -translate-y-1/2
                 w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14
                 bg-white/80 dark:bg-black/80 
                 border border-gray-200 dark:border-zinc-800
                 hover:bg-white dark:hover:bg-black
                 backdrop-blur-xl
                 rounded-full shadow-lg flex items-center justify-center 
                 transition-all duration-300 z-30
                 group/arrow">
          <svg class="w-6 h-6 text-black dark:text-white group-hover/arrow:-translate-x-0.5 transition-transform" 
               fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        
        <button 
          *ngIf="currentSlide < 3"
          (click)="nextSlide()"
          class="absolute right-1 md:right-4 top-1/2 transform -translate-y-1/2
                 w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14
                 bg-white/80 dark:bg-black/80 
                 border border-gray-200 dark:border-zinc-800
                 hover:bg-white dark:hover:bg-black
                 backdrop-blur-xl
                 rounded-full shadow-lg flex items-center justify-center 
                 transition-all duration-300 z-30
                 group/arrow">
          <svg class="w-6 h-6 text-black dark:text-white group-hover/arrow:translate-x-0.5 transition-transform" 
               fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>

          <!-- CTA Section -->
    <div class="text-center py-16 px-4">
      <div class="inline-block bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-3xl p-8 md:p-12">
        <h3 class="section-title mb-6">
          {{ 'WhyUs.cta.title' | translate }}
        </h3>
        
        <p class="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          {{ 'WhyUs.cta.description' | translate }}
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a routerLink="/devis"
             class="group inline-flex items-center gap-2 justify-center bg-[#0097A7] hover:bg-[#42B7C4] text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            {{ 'WhyUs.cta.button' | translate }}
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </a>

          <a href="https://wa.me/+221786722222" target="_blank" rel="noopener noreferrer"
             class="inline-flex items-center gap-2 justify-center bg-[#25D366] hover:bg-[#1ebe5d] text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            <svg class="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </a>
        </div>
      </div>
    </div>
    </section>
  `,
  styles: [`
    /* Minimal animations only */
    @keyframes subtle-float {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-4px);
      }
    }
  `]
})
export class SmarthomeCarouselComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  private autoPlayInterval: any;

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, 8000);
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  nextSlide() {
    if (this.currentSlide < 3) {
      this.currentSlide++;
    } else {
      this.currentSlide = 0;
    }
  }

  previousSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    } else {
      this.currentSlide = 3;
    }
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.stopAutoPlay();
    this.startAutoPlay();
  }
}