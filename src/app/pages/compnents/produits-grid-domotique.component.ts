import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-produits-grid-domotique',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink],
  template: `
    <section class="min-h-screen bg-white dark:bg-black py-20 px-4 transition-colors duration-300">
      <div class="max-w-7xl mx-auto">
        
        <!-- Products Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">


                  <!-- Caméras de Surveillance -->
          <div class="relative bg-black dark:bg-white rounded-3xl overflow-hidden 
                      group cursor-pointer transition-all duration-500 hover:scale-[1.01] 
                      hover:shadow-2xl
                      min-h-[400px] md:min-h-[500px] flex flex-col justify-between p-8 md:p-12">
            <div class="text-center mb-8">
              <h3 class="text-2xl md:text-3xl font-semibold text-white dark:text-black mb-3">
                {{ 'home2.products.cameras.title' | translate }}
              </h3>
              <p class="text-base md:text-lg text-gray-300 dark:text-gray-700 mb-2">
                {{ 'home2.products.cameras.feature1' | translate }}
              </p>
              <p class="text-base md:text-lg text-gray-300 dark:text-gray-700 mb-6">
                {{ 'home2.products.cameras.feature2' | translate }}
              </p>
              <div class="flex flex-col sm:flex-row gap-3 justify-center">
                <button class="bg-[#0097A7] text-white
                             px-5 py-2 rounded-full text-sm font-medium
                             hover:bg-[#42B7C4]
                             transition-all duration-300">
                  {{ 'home2.products.cameras.cta1' | translate }}
                </button>
                <button class="border border-[#42B7C4] text-[#42B7C4]
                             px-5 py-2 rounded-full text-sm font-medium
                             hover:bg-[#42B7C4]/10
                             transition-all duration-300">
                  {{ 'home2.products.cameras.cta2' | translate }}
                </button>
              </div>
            </div>
            
            <!-- Camera visualization -->
            <div class="flex justify-center items-end mt-auto">
              <div class="relative w-48 md:w-64 h-40 md:h-48 group-hover:scale-110 transition-transform duration-500">
                <!-- Modern dome camera -->
                <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 md:w-40">
                  <!-- Camera dome -->
                  <div class="relative w-full aspect-square">
                    <!-- Dome glass -->
                    <div class="absolute inset-0 rounded-full bg-gradient-to-br 
                                from-white/20 to-white/5 dark:from-black/20 dark:to-black/5
                                backdrop-blur-sm border-2 border-white/30 dark:border-black/30
                                shadow-2xl">
                      <!-- Lens -->
                      <div class="absolute inset-0 flex items-center justify-center">
                        <div class="w-16 h-16 md:w-20 md:h-20 rounded-full 
                                    bg-gradient-to-br from-gray-700 to-gray-900 
                                    dark:from-gray-300 dark:to-gray-500
                                    shadow-inner flex items-center justify-center">
                          <!-- Lens aperture -->
                          <div class="w-10 h-10 md:w-12 md:h-12 rounded-full 
                                      bg-gradient-to-br from-blue-900 to-indigo-900
                                      dark:from-blue-300 dark:to-indigo-300
                                      flex items-center justify-center">
                            <div class="w-4 h-4 md:w-5 md:h-5 rounded-full bg-black dark:bg-white 
                                        animate-pulse-slow"></div>
                          </div>
                        </div>
                      </div>
                      <!-- IR LEDs -->
                      <div class="absolute top-3 left-3 w-2 h-2 rounded-full bg-red-500 opacity-50"></div>
                      <div class="absolute top-3 right-3 w-2 h-2 rounded-full bg-red-500 opacity-50"></div>
                    </div>
                  </div>
                  <!-- Mount base -->
                  <div class="w-full h-6 bg-gradient-to-b from-gray-600 to-gray-800 
                              dark:from-gray-400 dark:to-gray-600 
                              rounded-b-lg shadow-lg"></div>
                </div>
                
                <!-- Wifi signal indicator -->
                <div class="absolute top-0 right-8 flex flex-col gap-1">
                  <div class="w-8 h-1 bg-white dark:bg-black opacity-30 rounded-full"></div>
                  <div class="w-6 h-1 bg-white dark:bg-black opacity-50 rounded-full"></div>
                  <div class="w-4 h-1 bg-white dark:bg-black opacity-70 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Interrupteurs Intelligents -->
          <div class="relative bg-gray-50 dark:bg-zinc-900 rounded-3xl overflow-hidden 
                      group cursor-pointer transition-all duration-500 hover:scale-[1.01] 
                      hover:shadow-2xl border border-gray-200 dark:border-zinc-800
                      min-h-[400px] md:min-h-[500px] flex flex-col justify-between p-8 md:p-12">
            <div class="text-center flex flex-col h-full justify-center">
              <div class="mb-8 flex justify-center">
                <div class="w-32 h-32 md:w-40 md:h-40 relative group-hover:scale-110 transition-transform duration-500">
                  <!-- Modern switch panel -->
                  <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 
                              dark:from-zinc-800 dark:to-zinc-700 shadow-2xl p-3">
                    <!-- Glass panel effect -->
                    <div class="w-full h-full rounded-xl bg-black dark:bg-white 
                                flex flex-col items-center justify-center transition-colors duration-300
                                border border-gray-800 dark:border-gray-200">
                      <!-- Light bulb icon -->
                      <svg class="w-12 h-12 md:w-16 md:h-16 text-white dark:text-black mb-2" 
                           fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                      </svg>
                      <!-- Touch indicator -->
                      <div class="flex gap-1">
                        <div class="w-1.5 h-1.5 rounded-full bg-white/30 dark:bg-black/30"></div>
                        <div class="w-1.5 h-1.5 rounded-full bg-white/50 dark:bg-black/50"></div>
                        <div class="w-1.5 h-1.5 rounded-full bg-white dark:bg-black animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 class="text-2xl md:text-3xl font-semibold text-black dark:text-white mb-3">
                {{ 'home2.products.switches.title' | translate }}
              </h3>
              <p class="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-6">
                {{ 'home2.products.switches.description' | translate }}
              </p>
              <button class="bg-[#0097A7] text-white
                           px-6 py-2.5 rounded-full text-sm font-medium
                           hover:bg-[#42B7C4]
                           transition-all duration-300 inline-block mx-auto">
                {{ 'home2.products.switches.cta' | translate }}
              </button>
            </div>
          </div>



          <!-- Thermostats Connectés -->
          <div class="relative bg-gray-50 dark:bg-zinc-900 rounded-3xl overflow-hidden 
                      group cursor-pointer transition-all duration-500 hover:scale-[1.01] 
                      hover:shadow-2xl border border-gray-200 dark:border-zinc-800
                      min-h-[400px] md:min-h-[500px] flex flex-col justify-between p-8 md:p-12">
            <div class="text-center mb-8">
              <h3 class="text-2xl md:text-3xl font-semibold text-black dark:text-white mb-3">
                {{ 'home2.products.thermostats.title' | translate }}
              </h3>
              <p class="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-6">
                {{ 'home2.products.thermostats.description' | translate }}
              </p>
              <div class="flex flex-col sm:flex-row gap-3 justify-center">
                <button class="bg-[#0097A7] text-white
                             px-5 py-2 rounded-full text-sm font-medium
                             hover:bg-[#42B7C4]
                             transition-all duration-300">
                  {{ 'home2.products.thermostats.cta1' | translate }}
                </button>
                <button class="border border-[#0097A7] text-[#0097A7]
                             dark:border-[#42B7C4] dark:text-[#42B7C4]
                             px-5 py-2 rounded-full text-sm font-medium
                             hover:bg-[#0097A7]/5
                             transition-all duration-300">
                  {{ 'home2.products.thermostats.cta2' | translate }}
                </button>
              </div>
            </div>
            
            <!-- Thermostat display -->
            <div class="flex justify-center items-end mt-auto">
              <div class="relative w-44 h-44 md:w-52 md:h-52 group-hover:scale-110 transition-transform duration-500">
                <!-- Nest-style thermostat -->
                <div class="absolute inset-0 rounded-full 
                            bg-gradient-to-br from-white to-gray-100 
                            dark:from-zinc-900 dark:to-black
                            border-8 border-gray-200 dark:border-zinc-800
                            shadow-2xl flex items-center justify-center">
                  <!-- Inner ring -->
                  <div class="w-32 h-32 md:w-40 md:h-40 rounded-full 
                              bg-gradient-to-br from-gray-50 to-white
                              dark:from-black dark:to-zinc-900
                              border-4 border-gray-100 dark:border-zinc-800
                              flex items-center justify-center">
                    <div class="text-center">
                      <div class="text-5xl md:text-6xl font-light text-black dark:text-white">23°</div>
                      <div class="text-xs text-gray-500 dark:text-gray-500 mt-1 font-medium">
                        {{ 'home2.products.thermostats.optimal' | translate }}
                      </div>
                    </div>
                  </div>
                  
                  <!-- Temperature indicators -->
                  <div class="absolute top-4 left-1/2 transform -translate-x-1/2">
                    <svg class="w-4 h-4 text-orange-500 dark:text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2L8 6h4L10 2z"/>
                    </svg>
                  </div>
                  <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <svg class="w-4 h-4 text-blue-500 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18l2-4H8l2 4z"/>
                    </svg>
                  </div>
                  
                  <!-- Rotation ring indicator -->
                  <svg class="absolute inset-0 w-full h-full transform -rotate-90">
                    <circle cx="50%" cy="50%" r="47%" fill="none" 
                            stroke="currentColor" class="text-gray-200 dark:text-zinc-800" 
                            stroke-width="3"/>
                    <circle cx="50%" cy="50%" r="47%" fill="none" 
                            stroke="currentColor" class="text-black dark:text-white" 
                            stroke-width="3" stroke-dasharray="200 83" 
                            stroke-linecap="round"
                            class="transition-all duration-500"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Serrures Intelligentes -->
          <div class="relative bg-black dark:bg-white rounded-3xl overflow-hidden 
                      group cursor-pointer transition-all duration-500 hover:scale-[1.01] 
                      hover:shadow-2xl
                      min-h-[400px] md:min-h-[500px] flex flex-col justify-between p-8 md:p-12">
            <div class="text-center mb-8">
              <h3 class="text-2xl md:text-3xl font-semibold text-white dark:text-black mb-3">
                {{ 'home2.products.locks.title' | translate }}
              </h3>
              <p class="text-base md:text-lg text-gray-300 dark:text-gray-700 mb-6">
                {{ 'home2.products.locks.description' | translate }}
              </p>
              <div class="flex flex-col sm:flex-row gap-3 justify-center">
                <button class="bg-[#0097A7] text-white
                             px-5 py-2 rounded-full text-sm font-medium
                             hover:bg-[#42B7C4]
                             transition-all duration-300">
                  {{ 'home2.products.locks.cta1' | translate }}
                </button>
                <button class="border border-[#42B7C4] text-[#42B7C4]
                             px-5 py-2 rounded-full text-sm font-medium
                             hover:bg-[#42B7C4]/10
                             transition-all duration-300">
                  {{ 'home2.products.locks.cta2' | translate }}
                </button>
              </div>
            </div>
            
            <!-- Lock visualization -->
            <div class="flex justify-center items-end mt-auto">
              <div class="relative w-52 md:w-64 h-48 md:h-56 group-hover:scale-110 transition-transform duration-500">
                <!-- Smart lock body -->
                <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 
                            w-32 md:w-40 h-40 md:h-48">
                  <!-- Lock outer shell -->
                  <div class="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-400 
                              dark:from-gray-700 dark:to-gray-900
                              rounded-2xl shadow-2xl overflow-hidden">
                    <!-- Touch panel -->
                    <div class="absolute inset-4 bg-black dark:bg-white
                                rounded-xl flex flex-col items-center justify-center
                                border border-gray-700 dark:border-gray-300">
                      <!-- Fingerprint icon -->
                      <svg class="w-16 h-16 md:w-20 md:h-20 text-white dark:text-black mb-2" 
                           fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" 
                              d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"/>
                      </svg>
                      <!-- Keypad dots -->
                      <div class="grid grid-cols-3 gap-2">
                        <div class="w-2 h-2 rounded-full bg-white/30 dark:bg-black/30"></div>
                        <div class="w-2 h-2 rounded-full bg-white/30 dark:bg-black/30"></div>
                        <div class="w-2 h-2 rounded-full bg-white/30 dark:bg-black/30"></div>
                      </div>
                    </div>
                    
                    <!-- Status indicators -->
                    <div class="absolute top-2 right-2 flex gap-1">
                      <div class="w-2 h-2 rounded-full bg-green-400 animate-pulse-slow"></div>
                      <div class="w-2 h-2 rounded-full bg-blue-400"></div>
                    </div>
                    
                    <!-- Lock mechanism indicator -->
                    <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 
                                w-12 h-1 bg-white/20 dark:bg-black/20 rounded-full"></div>
                  </div>
                  
                  <!-- Handle -->
                  <div class="absolute -right-6 top-1/2 transform -translate-y-1/2 
                              w-8 h-16 bg-gradient-to-r from-gray-400 to-gray-500
                              dark:from-gray-600 dark:to-gray-800
                              rounded-r-lg shadow-lg">
                    <div class="w-2 h-2 rounded-full bg-black dark:bg-white 
                                absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                </div>
                
                <!-- Wireless connection indicator -->
                <div class="absolute top-0 left-1/2 transform -translate-x-1/2">
                  <svg class="w-8 h-8 text-white dark:text-black opacity-70" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a8 8 0 0116 0H2z"/>
                    <path d="M5 13a5 5 0 0110 0H5z"/>
                    <path d="M8 15a2 2 0 014 0H8z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Installation & Support -->
          <div class="relative bg-white dark:bg-black rounded-3xl overflow-hidden 
                      group cursor-pointer transition-all duration-500 hover:scale-[1.01] 
                      hover:shadow-2xl border-2 border-gray-200 dark:border-zinc-800
                      min-h-[400px] md:min-h-[500px] flex flex-col justify-between p-8 md:p-12 md:col-span-2">
            <div class="grid md:grid-cols-2 gap-8 md:gap-12 h-full">
              
              <!-- Left: Installation -->
              <div class="text-center flex flex-col justify-center">
                <div class="mb-6 flex justify-center">
                  <div class="w-24 h-24 md:w-32 md:h-32 rounded-full 
                              bg-gradient-to-br from-gray-100 to-gray-200
                              dark:from-zinc-800 dark:to-zinc-900
                              border-4 border-black dark:border-white
                              flex items-center justify-center shadow-xl
                              group-hover:scale-110 transition-transform duration-500">
                    <!-- Wrench and hammer icon -->
                    <svg class="w-12 h-12 md:w-16 md:h-16 text-black dark:text-white" 
                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                </div>
                <h3 class="text-2xl md:text-3xl font-semibold text-black dark:text-white mb-3">
                  {{ 'home2.products.installation.title' | translate }}
                </h3>
                <p class="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-6 max-w-sm mx-auto">
                  {{ 'home2.products.installation.description' | translate }}
                </p>
                <div>
                  <a routerLink="/contact">
                    <button class="bg-[#0097A7] text-white
                                 px-6 py-2.5 rounded-full text-sm font-medium
                                 hover:bg-[#42B7C4]
                                 transition-all duration-300 inline-block">
                      Nous contacter
                    </button>
                  </a>
                </div>
              </div>
              
              <!-- Right: Support -->
              <div class="text-center flex flex-col justify-center border-t md:border-t-0 md:border-l 
                          border-gray-200 dark:border-zinc-800 pt-8 md:pt-0 md:pl-12">
                <div class="mb-6 flex justify-center">
                  <div class="w-24 h-24 md:w-32 md:h-32 rounded-full 
                              bg-gradient-to-br from-gray-100 to-gray-200
                              dark:from-zinc-800 dark:to-zinc-900
                              border-4 border-black dark:border-white
                              flex items-center justify-center shadow-xl
                              group-hover:scale-110 transition-transform duration-500 relative">
                    <!-- Headset icon -->
                    <svg class="w-12 h-12 md:w-16 md:h-16 text-black dark:text-white" 
                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                            d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/>
                    </svg>
                    <!-- Active pulse -->
                    <div class="absolute inset-0 rounded-full border-2 border-black dark:border-white 
                                animate-ping opacity-20"></div>
                  </div>
                </div>
                <h3 class="text-2xl md:text-3xl font-semibold text-black dark:text-white mb-3">
                  {{ 'home2.products.support.title' | translate }}
                </h3>
                <p class="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-6 max-w-sm mx-auto">
                  {{ 'home2.products.support.description' | translate }}
                </p>
                <div>
                  <a routerLink="/support">
                    <button class="bg-[#0097A7] text-white
                                 px-6 py-2.5 rounded-full text-sm font-medium
                                 hover:bg-[#42B7C4]
                                 transition-all duration-300 inline-block">
                      {{ 'home2.products.support.cta' | translate }}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @keyframes pulse-slow {
      0%, 100% {
        opacity: 0.5;
      }
      50% {
        opacity: 1;
      }
    }
    
    .animate-pulse-slow {
      animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
  `]
})
export class ProduitsGridDomotiqueComponent {}