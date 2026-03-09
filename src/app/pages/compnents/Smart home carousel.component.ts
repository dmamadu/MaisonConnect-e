// import { Component, OnInit, OnDestroy } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { TranslateModule } from '@ngx-translate/core';

// @Component({
//   selector: 'app-smart-home-carousel',
//   standalone: true,
//   imports: [CommonModule, TranslateModule],
//   template: `
//     <section class="relative min-h-screen bg-white dark:bg-black py-20 transition-colors duration-300">
      
//       <!-- Carousel container -->
//       <div class="relative max-w-7xl mx-auto px-4 md:px-8">
        
//         <!-- Header -->
//         <div class="text-center mb-12">
//           <h2 class="text-5xl md:text-7xl font-bold text-black dark:text-white mb-4 tracking-tight">
//             {{ 'home3.carousel.title' | translate }}
//           </h2>
//           <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//             {{ 'home3.carousel.subtitle' | translate }}
//           </p>
//         </div>

//         <!-- Carousel track -->
//         <div class="relative overflow-hidden rounded-3xl">
//           <div 
//             class="flex transition-transform duration-700 ease-out"
//             [style.transform]="'translateX(-' + (currentSlide * 100) + '%)'">
            
//             <!-- Slide 1: Morning - Gentle Wake Up -->
//             <div class="min-w-full flex-shrink-0 px-2">
//               <div class="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/9] 
//                           bg-gradient-to-br from-gray-100 via-white to-gray-50
//                           dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900
//                           border border-gray-200 dark:border-zinc-700
//                           group cursor-pointer transition-all duration-500 hover:scale-[1.01]">
                
//                 <!-- Minimalist morning scene -->
//                 <div class="absolute inset-0 flex items-center justify-center p-12">
//                   <div class="relative w-full max-w-4xl">
                    
//                     <!-- Sunrise icon -->
//                     <div class="absolute top-0 right-1/4 animate-fade-in">
//                       <div class="w-24 h-24 md:w-32 md:h-32 rounded-full 
//                                   bg-gradient-to-br from-gray-200 to-gray-300
//                                   dark:from-zinc-700 dark:to-zinc-800
//                                   border-4 border-gray-300 dark:border-zinc-600
//                                   flex items-center justify-center shadow-2xl">
//                         <svg class="w-12 h-12 md:w-16 md:h-16 text-black dark:text-white" 
//                              fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
//                                 d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
//                         </svg>
//                       </div>
//                     </div>
                    
//                     <!-- Central bed illustration -->
//                     <div class="flex items-center justify-center mt-20">
//                       <div class="relative">
//                         <!-- Simplified bed -->
//                         <div class="w-64 h-32 md:w-80 md:h-40 rounded-2xl
//                                     bg-gray-200 dark:bg-zinc-800
//                                     border-4 border-gray-300 dark:border-zinc-700
//                                     shadow-2xl relative overflow-hidden">
//                           <!-- Person waking up -->
//                           <div class="absolute top-4 left-1/2 transform -translate-x-1/2">
//                             <div class="w-16 h-16 rounded-full bg-black dark:bg-white"></div>
//                           </div>
                          
//                           <!-- Blanket -->
//                           <div class="absolute bottom-0 left-0 right-0 h-20
//                                       bg-gradient-to-t from-gray-300 to-transparent
//                                       dark:from-zinc-700 dark:to-transparent"></div>
//                         </div>
//                       </div>
//                     </div>
                    
//                     <!-- Smart devices indicators -->
//                     <div class="absolute bottom-12 left-12 animate-pulse-soft">
//                       <div class="w-12 h-12 rounded-full bg-black dark:bg-white flex items-center justify-center">
//                         <svg class="w-6 h-6 text-white dark:text-black" fill="currentColor" viewBox="0 0 20 20">
//                           <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"/>
//                         </svg>
//                       </div>
//                     </div>
                    
//                     <div class="absolute bottom-12 right-12 animate-pulse-soft" style="animation-delay: 0.3s;">
//                       <div class="w-12 h-12 rounded-full bg-black dark:bg-white flex items-center justify-center">
//                         <svg class="w-6 h-6 text-white dark:text-black" fill="currentColor" viewBox="0 0 20 20">
//                           <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
//                           <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
//                         </svg>
//                       </div>
//                     </div>
                    
//                   </div>
//                 </div>
                
//                 <!-- Title overlay -->
//                 <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t 
//                             from-white/95 via-white/80 to-transparent
//                             dark:from-black/95 dark:via-black/80 dark:to-transparent
//                             pt-20 pb-8 px-8">
//                   <div class="max-w-3xl mx-auto text-center">
//                     <p class="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-2">
//                       {{ 'home3.carousel.morning.time' | translate }}
//                     </p>
//                     <h3 class="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
//                       {{ 'home3.carousel.morning.title' | translate }}
//                     </h3>
//                     <p class="text-base text-gray-600 dark:text-gray-400 mb-6">
//                       {{ 'home3.carousel.morning.description' | translate }}
//                     </p>
//                     <button class="bg-black dark:bg-white text-white dark:text-black 
//                                  px-8 py-3 rounded-full text-sm font-medium
//                                  hover:bg-gray-800 dark:hover:bg-gray-200
//                                  transition-all duration-300 transform hover:scale-105 inline-block">
//                       {{ 'home3.carousel.morning.cta' | translate }}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <!-- Slide 2: Evening - Cinema Mode -->
//             <div class="min-w-full flex-shrink-0 px-2">
//               <div class="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/9] 
//                           bg-black dark:bg-white
//                           group cursor-pointer transition-all duration-500 hover:scale-[1.01]">
                
//                 <!-- Cinema scene -->
//                 <div class="absolute inset-0 flex items-center justify-center p-12">
//                   <div class="relative w-full max-w-4xl">
                    
//                     <!-- TV Screen -->
//                     <div class="flex items-center justify-center">
//                       <div class="relative">
//                         <div class="w-80 h-48 md:w-96 md:h-56 rounded-2xl
//                                     bg-gradient-to-br from-zinc-800 to-zinc-900
//                                     dark:from-gray-200 dark:to-gray-300
//                                     border-4 border-zinc-700 dark:border-gray-400
//                                     shadow-2xl flex items-center justify-center">
//                           <!-- Play icon -->
//                           <div class="w-20 h-20 rounded-full 
//                                       bg-white/10 dark:bg-black/10
//                                       backdrop-blur-sm border-2 border-white/20 dark:border-black/20
//                                       flex items-center justify-center">
//                             <svg class="w-10 h-10 text-white dark:text-black ml-1" 
//                                  fill="currentColor" viewBox="0 0 24 24">
//                               <path d="M8 5v14l11-7z"/>
//                             </svg>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
                    
//                     <!-- Family silhouettes -->
//                     <div class="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-8">
//                       <div class="w-12 h-20 bg-white/20 dark:bg-black/20 rounded-full"></div>
//                       <div class="w-12 h-20 bg-white/20 dark:bg-black/20 rounded-full"></div>
//                       <div class="w-10 h-16 bg-white/20 dark:bg-black/20 rounded-full"></div>
//                     </div>
                    
//                     <!-- Ambient lights -->
//                     <div class="absolute top-12 left-12">
//                       <div class="w-16 h-2 bg-white/30 dark:bg-black/30 rounded-full animate-pulse-soft"></div>
//                     </div>
//                     <div class="absolute top-12 right-12">
//                       <div class="w-16 h-2 bg-white/30 dark:bg-black/30 rounded-full animate-pulse-soft" 
//                            style="animation-delay: 0.5s;"></div>
//                     </div>
                    
//                   </div>
//                 </div>
                
//                 <!-- Title overlay -->
//                 <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t 
//                             from-black/95 via-black/80 to-transparent
//                             dark:from-white/95 dark:via-white/80 dark:to-transparent
//                             pt-20 pb-8 px-8">
//                   <div class="max-w-3xl mx-auto text-center">
//                     <p class="text-sm font-semibold text-gray-400 dark:text-gray-600 uppercase tracking-widest mb-2">
//                       {{ 'home3.carousel.evening.time' | translate }}
//                     </p>
//                     <h3 class="text-4xl md:text-5xl font-bold text-white dark:text-black mb-4">
//                       {{ 'home3.carousel.evening.title' | translate }}
//                     </h3>
//                     <p class="text-base text-gray-300 dark:text-gray-700 mb-6">
//                       {{ 'home3.carousel.evening.description' | translate }}
//                     </p>
//                     <button class="bg-white dark:bg-black text-black dark:text-white 
//                                  px-8 py-3 rounded-full text-sm font-medium
//                                  hover:bg-gray-200 dark:hover:bg-zinc-900
//                                  transition-all duration-300 transform hover:scale-105 inline-block">
//                       {{ 'home3.carousel.evening.cta' | translate }}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <!-- Slide 3: Night - Security Active -->
//             <div class="min-w-full flex-shrink-0 px-2">
//               <div class="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/9] 
//                           bg-gradient-to-br from-gray-100 via-white to-gray-50
//                           dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900
//                           border border-gray-200 dark:border-zinc-700
//                           group cursor-pointer transition-all duration-500 hover:scale-[1.01]">
                
//                 <!-- Security scene -->
//                 <div class="absolute inset-0 flex items-center justify-center p-12">
//                   <div class="relative w-full max-w-4xl">
                    
//                     <!-- Moon/Night indicator -->
//                     <div class="absolute top-0 right-1/4 animate-fade-in">
//                       <div class="w-20 h-20 md:w-24 md:h-24 rounded-full 
//                                   bg-gray-300 dark:bg-zinc-700
//                                   border-2 border-gray-400 dark:border-zinc-600
//                                   shadow-2xl"></div>
//                     </div>
                    
//                     <!-- House silhouette -->
//                     <div class="flex items-center justify-center mt-12">
//                       <div class="relative w-64 h-48 md:w-80 md:h-56">
//                         <!-- Roof -->
//                         <div class="absolute top-0 left-1/2 transform -translate-x-1/2
//                                     w-0 h-0 border-l-[100px] md:border-l-[120px] 
//                                     border-r-[100px] md:border-r-[120px] 
//                                     border-b-[60px] md:border-b-[70px] 
//                                     border-l-transparent border-r-transparent 
//                                     border-b-gray-300 dark:border-b-zinc-700"></div>
                        
//                         <!-- House body -->
//                         <div class="absolute top-14 md:top-16 inset-x-0 h-32 md:h-40
//                                     bg-gray-200 dark:bg-zinc-800
//                                     border-4 border-gray-300 dark:border-zinc-700
//                                     rounded-b-2xl shadow-2xl">
                          
//                           <!-- Windows (dark) -->
//                           <div class="absolute top-6 left-8 w-12 h-16 
//                                       bg-black dark:bg-white rounded-lg"></div>
//                           <div class="absolute top-6 right-8 w-12 h-16 
//                                       bg-black dark:bg-white rounded-lg"></div>
                          
//                           <!-- Door with lock indicator -->
//                           <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2
//                                       w-12 h-20 bg-gray-300 dark:bg-zinc-700 rounded-t-lg relative">
//                             <div class="absolute right-2 top-8 w-2 h-2 
//                                         bg-black dark:bg-white rounded-full animate-pulse-soft"></div>
//                           </div>
//                         </div>
                        
//                         <!-- Security cameras -->
//                         <div class="absolute -top-4 left-4 animate-float">
//                           <div class="w-10 h-10 rounded-full bg-black dark:bg-white 
//                                       flex items-center justify-center shadow-xl">
//                             <svg class="w-5 h-5 text-white dark:text-black" fill="currentColor" viewBox="0 0 20 20">
//                               <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
//                               <path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd"/>
//                             </svg>
//                           </div>
//                         </div>
                        
//                         <div class="absolute -top-4 right-4 animate-float" style="animation-delay: 0.3s;">
//                           <div class="w-10 h-10 rounded-full bg-black dark:bg-white 
//                                       flex items-center justify-center shadow-xl">
//                             <svg class="w-5 h-5 text-white dark:text-black" fill="currentColor" viewBox="0 0 20 20">
//                               <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
//                               <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
//                             </svg>
//                           </div>
//                         </div>
                        
//                         <!-- Alarm panel -->
//                         <div class="absolute -right-16 top-1/3">
//                           <div class="w-12 h-16 rounded-xl bg-gray-200 dark:bg-zinc-800 
//                                       border-2 border-gray-300 dark:border-zinc-700
//                                       flex items-center justify-center shadow-xl">
//                             <div class="w-6 h-6 rounded-full bg-black dark:bg-white animate-pulse-soft"></div>
//                           </div>
//                         </div>
                        
//                       </div>
//                     </div>
                    
//                   </div>
//                 </div>
                
//                 <!-- Title overlay -->
//                 <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t 
//                             from-white/95 via-white/80 to-transparent
//                             dark:from-black/95 dark:via-black/80 dark:to-transparent
//                             pt-20 pb-8 px-8">
//                   <div class="max-w-3xl mx-auto text-center">
//                     <p class="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-2">
//                       {{ 'home3.carousel.night.time' | translate }}
//                     </p>
//                     <h3 class="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
//                       {{ 'home3.carousel.night.title' | translate }}
//                     </h3>
//                     <p class="text-base text-gray-600 dark:text-gray-400 mb-6">
//                       {{ 'home3.carousel.night.description' | translate }}
//                     </p>
//                     <button class="bg-black dark:bg-white text-white dark:text-black 
//                                  px-8 py-3 rounded-full text-sm font-medium
//                                  hover:bg-gray-800 dark:hover:bg-gray-200
//                                  transition-all duration-300 transform hover:scale-105 inline-block">
//                       {{ 'home3.carousel.night.cta' | translate }}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <!-- Carousel controls -->
//         <div class="flex justify-center mt-8 gap-2">
//           <button 
//             *ngFor="let slide of [0, 1, 2]; let i = index"
//             (click)="goToSlide(i)"
//             [class.bg-black]="currentSlide === i"
//             [class.dark:bg-white]="currentSlide === i"
//             [class.bg-gray-300]="currentSlide !== i"
//             [class.dark:bg-zinc-700]="currentSlide !== i"
//             class="w-2 h-2 rounded-full transition-all duration-300 
//                    hover:bg-gray-500 dark:hover:bg-zinc-500">
//           </button>
//         </div>

//         <!-- Navigation arrows -->
//         <button 
//           *ngIf="currentSlide > 0"
//           (click)="previousSlide()"
//           class="absolute left-4 top-1/2 transform -translate-y-1/2 
//                  w-12 h-12 bg-white dark:bg-black 
//                  border border-gray-200 dark:border-zinc-800
//                  hover:bg-gray-100 dark:hover:bg-zinc-900
//                  rounded-full shadow-lg flex items-center justify-center 
//                  transition-all duration-300 z-30">
//           <svg class="w-6 h-6 text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
//           </svg>
//         </button>
        
//         <button 
//           *ngIf="currentSlide < 2"
//           (click)="nextSlide()"
//           class="absolute right-4 top-1/2 transform -translate-y-1/2 
//                  w-12 h-12 bg-white dark:bg-black 
//                  border border-gray-200 dark:border-zinc-800
//                  hover:bg-gray-100 dark:hover:bg-zinc-900
//                  rounded-full shadow-lg flex items-center justify-center 
//                  transition-all duration-300 z-30">
//           <svg class="w-6 h-6 text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
//           </svg>
//         </button>
//       </div>
//     </section>
//   `,
//   styles: [`
//     @keyframes fade-in {
//       from {
//         opacity: 0;
//         transform: scale(0.9);
//       }
//       to {
//         opacity: 1;
//         transform: scale(1);
//       }
//     }
    
//     @keyframes pulse-soft {
//       0%, 100% {
//         opacity: 0.6;
//       }
//       50% {
//         opacity: 1;
//       }
//     }
    
//     @keyframes float {
//       0%, 100% {
//         transform: translateY(0);
//       }
//       50% {
//         transform: translateY(-8px);
//       }
//     }
    
//     .animate-fade-in {
//       animation: fade-in 1s ease-out;
//     }
    
//     .animate-pulse-soft {
//       animation: pulse-soft 3s ease-in-out infinite;
//     }
    
//     .animate-float {
//       animation: float 3s ease-in-out infinite;
//     }
//   `]
// })
// export class SmarthomeCarouselComponent implements OnInit, OnDestroy {
//   currentSlide = 0;
//   private autoPlayInterval: any;

//   ngOnInit() {
//     this.startAutoPlay();
//   }

//   ngOnDestroy() {
//     this.stopAutoPlay();
//   }

//   startAutoPlay() {
//     this.autoPlayInterval = setInterval(() => {
//       this.nextSlide();
//     }, 6000);
//   }

//   stopAutoPlay() {
//     if (this.autoPlayInterval) {
//       clearInterval(this.autoPlayInterval);
//     }
//   }

//   nextSlide() {
//     if (this.currentSlide < 2) {
//       this.currentSlide++;
//     } else {
//       this.currentSlide = 0;
//     }
//   }

//   previousSlide() {
//     if (this.currentSlide > 0) {
//       this.currentSlide--;
//     } else {
//       this.currentSlide = 2;
//     }
//   }

//   goToSlide(index: number) {
//     this.currentSlide = index;
//     this.stopAutoPlay();
//     this.startAutoPlay();
//   }
// }