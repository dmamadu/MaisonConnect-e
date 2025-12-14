import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-hero-domotique',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink],
  template: `
<section class="relative min-h-screen bg-gradient-to-br from-[#0a1628] via-[#132a45] to-[#1a3a5c] overflow-hidden flex items-center justify-center px-4 py-20">
  
  <!-- Animated background elements - Smart home devices -->
  <div class="absolute inset-0 overflow-hidden">
    <!-- Floating smart devices icons -->
    <div class="floating-icon" style="top: 15%; left: 10%; animation-delay: 0s;">
      <div class="w-16 h-16 md:w-20 md:h-20 rounded-2xl border-2 border-blue-400/40 bg-blue-500/10 backdrop-blur-sm flex items-center justify-center">
        <!-- SVG device icon -->
      </div>
    </div>
    <div class="floating-icon" style="top: 25%; left: 25%; animation-delay: 0.8s;">
      <div class="w-14 h-14 md:w-20 md:h-20 rounded-2xl border-2 border-green-400/40 bg-green-500/10 backdrop-blur-sm flex items-center justify-center">
        <!-- SVG device icon -->
      </div>
    </div>
    <div class="floating-icon" style="top: 35%; left: 75%; animation-delay: 1.2s;">
      <div class="w-16 h-16 md:w-24 md:h-24 rounded-2xl border-2 border-purple-400/40 bg-purple-500/10 backdrop-blur-sm flex items-center justify-center">
        <!-- SVG device icon -->
      </div>
    </div>
    <div class="floating-icon" style="top: 60%; left: 15%; animation-delay: 1.5s;">
      <div class="w-10 h-10 md:w-14 md:h-14 rounded-xl border-2 border-amber-400/40 bg-amber-500/10 backdrop-blur-sm flex items-center justify-center">
        <!-- SVG device icon -->
      </div>
    </div>
    <div class="floating-icon" style="top: 70%; left: 80%; animation-delay: 0.5s;">
      <div class="w-12 h-12 md:w-18 md:h-18 rounded-xl border-2 border-red-400/40 bg-red-500/10 backdrop-blur-sm flex items-center justify-center">
        <!-- SVG device icon -->
      </div>
    </div>
    <div class="floating-icon" style="top: 20%; right: 15%; animation-delay: 2s;">
      <div class="w-14 h-14 md:w-20 md:h-20 rounded-2xl border-2 border-cyan-400/40 bg-cyan-500/10 backdrop-blur-sm flex items-center justify-center">
        <!-- SVG device icon -->
      </div>
    </div>

    <!-- Sparkles -->
    <div class="sparkle" style="top: 12%; left: 15%; animation-delay: 0.3s;">✦</div>
    <div class="sparkle" style="top: 28%; right: 20%; animation-delay: 1.1s;">✦</div>
    <div class="sparkle" style="top: 45%; left: 8%; animation-delay: 1.8s;">✦</div>
    <div class="sparkle" style="top: 65%; right: 12%; animation-delay: 0.6s;">✦</div>
    <div class="sparkle" style="bottom: 20%; left: 30%; animation-delay: 1.4s;">✦</div>
    <div class="sparkle" style="bottom: 35%; right: 25%; animation-delay: 0.9s;">✦</div>

    <!-- Small dots -->
    <div class="dot" style="top: 10%; left: 35%; animation-delay: 0.4s;"></div>
    <div class="dot" style="top: 40%; right: 30%; animation-delay: 1.3s;"></div>
    <div class="dot" style="bottom: 25%; left: 20%; animation-delay: 0.7s;"></div>
    <div class="dot" style="top: 55%; left: 70%; animation-delay: 1.6s;"></div>
  </div>

  <!-- Central glow -->
  <div class="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
    <div class="smart-home-glow w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full"></div>
  </div>

  <!-- Content -->
  <div class="relative z-20 text-center max-w-5xl mx-auto mt-20">
    <h1 class="text-4xl md:text-6xl lg:text-7xl font-semibold text-white mb-6 tracking-tight leading-tight">
      {{ 'SmartHomeHub.HomeAutomation.title' | translate }}
    </h1>

    <p class="text-lg md:text-xl lg:text-2xl text-gray-300 mb-4 font-light">
      {{ 'SmartHomeHub.HomeAutomation.subtitle' | translate }}
    </p>

    <p class="text-base md:text-lg text-gray-400 mb-8 font-light">
      {{ 'SmartHomeHub.HomeAutomation.description' | translate }}
    </p>

    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <button class="bg-[#0071e3] hover:bg-[#0077ed] text-white px-8 py-3 rounded-full text-base md:text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/20">
        {{ 'SmartHomeHub.HomeAutomation.buttonDiscover' | translate }}
      </button>
       <a href="" routerLink="/devis">
      <button class="border-2 border-white/30 hover:border-white/50 hover:bg-white/10 text-white px-8 py-3 rounded-full text-base md:text-lg font-medium transition-all duration-300">
       {{ 'SmartHomeHub.HomeAutomation.buttonQuote' | translate }}
      </button>
        </a>
    </div>
  </div>

</section>

  `,
  styles: [`
    @keyframes float {
      0%, 100% {
        transform: translateY(0) rotate(0deg);
      }
      50% {
        transform: translateY(-30px) rotate(5deg);
      }
    }
    
    @keyframes sparkle {
      0%, 100% {
        opacity: 0.3;
        transform: scale(0.8) rotate(0deg);
      }
      50% {
        opacity: 1;
        transform: scale(1.2) rotate(180deg);
      }
    }
    
    @keyframes pulse {
      0%, 100% {
        opacity: 0.4;
        transform: scale(1);
      }
      50% {
        opacity: 0.8;
        transform: scale(1.1);
      }
    }
    
    .floating-icon {
      position: absolute;
      animation: float 6s ease-in-out infinite;
    }
    
    .sparkle {
      position: absolute;
      color: #60a5fa;
      font-size: 1.5rem;
      animation: sparkle 3s ease-in-out infinite;
    }
    
    .dot {
      position: absolute;
      width: 6px;
      height: 6px;
      background: linear-gradient(135deg, #60a5fa, #a78bfa);
      border-radius: 50%;
      animation: pulse 4s ease-in-out infinite;
    }
    
    .smart-home-glow {
      background: linear-gradient(135deg, 
        #3b82f6 0%, 
        #8b5cf6 25%, 
        #10b981 50%, 
        #f59e0b 75%, 
        #06b6d4 100%);
      filter: blur(40px);
      opacity: 0.6;
      animation: pulse 4s ease-in-out infinite;
    }
  `]
})
export class HeroDomotiqueComponent {}

// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { TranslateModule } from '@ngx-translate/core';
// import { RouterLink } from "@angular/router";

// @Component({
//   selector: 'app-hero-domotique',
//   standalone: true,
//   imports: [CommonModule, TranslateModule, RouterLink],
//   template: `
// <section class="relative min-h-screen bg-gradient-to-br from-[#0a1628] via-[#132a45] to-[#1a3a5c] overflow-hidden flex items-center justify-center px-4 py-20">
  
//   <!-- Animated background elements - Smart home devices -->
//   <div class="absolute inset-0 overflow-hidden">
//     <!-- Floating smart devices icons -->
//     <div class="floating-icon" style="top: 15%; left: 10%; animation-delay: 0s;">
//       <div class="w-16 h-16 md:w-20 md:h-20 rounded-2xl border-2 border-blue-400/40 bg-blue-500/10 backdrop-blur-sm flex items-center justify-center">
//         <!-- SVG device icon -->
//       </div>
//     </div>
//     <div class="floating-icon" style="top: 25%; left: 25%; animation-delay: 0.8s;">
//       <div class="w-14 h-14 md:w-20 md:h-20 rounded-2xl border-2 border-green-400/40 bg-green-500/10 backdrop-blur-sm flex items-center justify-center">
//         <!-- SVG device icon -->
//       </div>
//     </div>
//     <div class="floating-icon" style="top: 35%; left: 75%; animation-delay: 1.2s;">
//       <div class="w-16 h-16 md:w-24 md:h-24 rounded-2xl border-2 border-purple-400/40 bg-purple-500/10 backdrop-blur-sm flex items-center justify-center">
//         <!-- SVG device icon -->
//       </div>
//     </div>
//     <div class="floating-icon" style="top: 60%; left: 15%; animation-delay: 1.5s;">
//       <div class="w-10 h-10 md:w-14 md:h-14 rounded-xl border-2 border-amber-400/40 bg-amber-500/10 backdrop-blur-sm flex items-center justify-center">
//         <!-- SVG device icon -->
//       </div>
//     </div>
//     <div class="floating-icon" style="top: 70%; left: 80%; animation-delay: 0.5s;">
//       <div class="w-12 h-12 md:w-18 md:h-18 rounded-xl border-2 border-red-400/40 bg-red-500/10 backdrop-blur-sm flex items-center justify-center">
//         <!-- SVG device icon -->
//       </div>
//     </div>
//     <div class="floating-icon" style="top: 20%; right: 15%; animation-delay: 2s;">
//       <div class="w-14 h-14 md:w-20 md:h-20 rounded-2xl border-2 border-cyan-400/40 bg-cyan-500/10 backdrop-blur-sm flex items-center justify-center">
//         <!-- SVG device icon -->
//       </div>
//     </div>

//     <!-- Sparkles -->
//     <div class="sparkle" style="top: 12%; left: 15%; animation-delay: 0.3s;">✦</div>
//     <div class="sparkle" style="top: 28%; right: 20%; animation-delay: 1.1s;">✦</div>
//     <div class="sparkle" style="top: 45%; left: 8%; animation-delay: 1.8s;">✦</div>
//     <div class="sparkle" style="top: 65%; right: 12%; animation-delay: 0.6s;">✦</div>
//     <div class="sparkle" style="bottom: 20%; left: 30%; animation-delay: 1.4s;">✦</div>
//     <div class="sparkle" style="bottom: 35%; right: 25%; animation-delay: 0.9s;">✦</div>

//     <!-- Small dots -->
//     <div class="dot" style="top: 10%; left: 35%; animation-delay: 0.4s;"></div>
//     <div class="dot" style="top: 40%; right: 30%; animation-delay: 1.3s;"></div>
//     <div class="dot" style="bottom: 25%; left: 20%; animation-delay: 0.7s;"></div>
//     <div class="dot" style="top: 55%; left: 70%; animation-delay: 1.6s;"></div>
//   </div>

//   <!-- Central glow -->
//   <div class="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
//     <div class="smart-home-glow w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full"></div>
//   </div>

//   <!-- Content -->
//   <div class="relative z-20 text-center max-w-5xl mx-auto mt-20">
//     <h1 class="text-4xl md:text-6xl lg:text-7xl font-semibold text-white mb-6 tracking-tight leading-tight">
//       {{ 'HomePage.Hero.title' | translate }}
//     </h1>

//     <p class="text-lg md:text-xl lg:text-2xl text-gray-300 mb-4 font-light">
//       {{ 'HomePage.Hero.introduction' | translate }}
//     </p>

//     <p class="text-base md:text-lg text-gray-400 mb-4 font-light">
//       {{ 'HomePage.Hero.accompagnement' | translate }}
//     </p>

//     <p class="text-base md:text-lg text-gray-400 mb-8 font-light italic">
//       {{ 'HomePage.Hero.mission' | translate }}
//     </p>

//     <div class="flex flex-col sm:flex-row gap-4 justify-center">
//       <button class="bg-[#0071e3] hover:bg-[#0077ed] text-white px-8 py-3 rounded-full text-base md:text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/20">
//         {{ 'HomePage.Hero.buttonDiscover' | translate }}
//       </button>
//        <a href="" routerLink="/devis">
//       <button class="border-2 border-white/30 hover:border-white/50 hover:bg-white/10 text-white px-8 py-3 rounded-full text-base md:text-lg font-medium transition-all duration-300">
//        {{ 'HomePage.Hero.buttonQuote' | translate }}
//       </button>
//         </a>
//     </div>
//   </div>

// </section>

//   `,
//   styles: [`
//     @keyframes float {
//       0%, 100% {
//         transform: translateY(0) rotate(0deg);
//       }
//       50% {
//         transform: translateY(-30px) rotate(5deg);
//       }
//     }
    
//     @keyframes sparkle {
//       0%, 100% {
//         opacity: 0.3;
//         transform: scale(0.8) rotate(0deg);
//       }
//       50% {
//         opacity: 1;
//         transform: scale(1.2) rotate(180deg);
//       }
//     }
    
//     @keyframes pulse {
//       0%, 100% {
//         opacity: 0.4;
//         transform: scale(1);
//       }
//       50% {
//         opacity: 0.8;
//         transform: scale(1.1);
//       }
//     }
    
//     .floating-icon {
//       position: absolute;
//       animation: float 6s ease-in-out infinite;
//     }
    
//     .sparkle {
//       position: absolute;
//       color: #60a5fa;
//       font-size: 1.5rem;
//       animation: sparkle 3s ease-in-out infinite;
//     }
    
//     .dot {
//       position: absolute;
//       width: 6px;
//       height: 6px;
//       background: linear-gradient(135deg, #60a5fa, #a78bfa);
//       border-radius: 50%;
//       animation: pulse 4s ease-in-out infinite;
//     }
    
//     .smart-home-glow {
//       background: linear-gradient(135deg, 
//         #3b82f6 0%, 
//         #8b5cf6 25%, 
//         #10b981 50%, 
//         #f59e0b 75%, 
//         #06b6d4 100%);
//       filter: blur(40px);
//       opacity: 0.6;
//       animation: pulse 4s ease-in-out infinite;
//     }
//   `]
// })
// export class HeroDomotiqueComponent {}

// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { TranslateModule } from '@ngx-translate/core';
// import { RouterLink } from "@angular/router";

// @Component({
//   selector: 'app-hero-domotique',
//   standalone: true,
//   imports: [CommonModule, TranslateModule, RouterLink],
//   template: `
// <section class="relative min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden flex items-center px-4 py-20">
  
//   <!-- Grid pattern background -->
//   <div class="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] opacity-20"></div>
  
//   <!-- Animated gradient orbs -->
//   <div class="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
//   <div class="absolute top-40 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
//   <div class="absolute bottom-20 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

//   <!-- Floating icons container -->
//   <div class="absolute inset-0 overflow-hidden pointer-events-none">
//     <!-- Smart Home Icon -->
//     <div class="floating-device" style="top: 15%; left: 8%; animation-delay: 0s;">
//       <div class="glass-card p-4">
//         <svg class="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
//         </svg>
//       </div>
//     </div>

//     <!-- Security Camera Icon -->
//     <div class="floating-device" style="top: 25%; right: 12%; animation-delay: 1s;">
//       <div class="glass-card p-4">
//         <svg class="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
//         </svg>
//       </div>
//     </div>

//     <!-- Solar Panel Icon -->
//     <div class="floating-device" style="top: 60%; left: 12%; animation-delay: 2s;">
//       <div class="glass-card p-4">
//         <svg class="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
//         </svg>
//       </div>
//     </div>

//     <!-- Wifi/Network Icon -->
//     <div class="floating-device" style="top: 45%; right: 8%; animation-delay: 1.5s;">
//       <div class="glass-card p-4">
//         <svg class="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"/>
//         </svg>
//       </div>
//     </div>

//     <!-- Lock/Security Icon -->
//     <div class="floating-device" style="bottom: 20%; right: 15%; animation-delay: 0.5s;">
//       <div class="glass-card p-4">
//         <svg class="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
//         </svg>
//       </div>
//     </div>

//     <!-- Light Bulb Icon -->
//     <div class="floating-device" style="bottom: 25%; left: 15%; animation-delay: 2.5s;">
//       <div class="glass-card p-4">
//         <svg class="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
//         </svg>
//       </div>
//     </div>

//     <!-- Sparkles -->
//     <div class="sparkle" style="top: 20%; left: 25%; animation-delay: 0.5s;">✦</div>
//     <div class="sparkle" style="top: 35%; right: 30%; animation-delay: 1.2s;">✦</div>
//     <div class="sparkle" style="bottom: 30%; left: 35%; animation-delay: 1.8s;">✦</div>
//     <div class="sparkle" style="top: 55%; right: 20%; animation-delay: 0.8s;">✦</div>
//   </div>

//   <!-- Content -->
//   <div class="relative z-10 max-w-7xl mx-auto w-full">
//     <div class="grid lg:grid-cols-2 gap-12 items-center">
      
//       <!-- Left Content -->
//       <div class="text-left space-y-6">
//         <div class="inline-block">
//           <span class="bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium border border-blue-500/20 backdrop-blur-sm">
//             🏠 Solutions Premium
//           </span>
//         </div>
        
//         <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
//           {{ 'HomePage.Hero.title' | translate }}
//         </h1>

//         <p class="text-md md:text-xl text-gray-300 leading-relaxed">
//           {{ 'HomePage.Hero.introduction' | translate }}
//         </p>

//         <p class="text-md text-gray-400 leading-relaxed">
//           {{ 'HomePage.Hero.accompagnement' | translate }}
//         </p>

//         <div class="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-6 backdrop-blur-sm">
//           <p class="text-base text-gray-300 italic flex items-start gap-3">
//             <svg class="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
//             </svg>
//             <span>{{ 'HomePage.Hero.mission' | translate }}</span>
//           </p>
//         </div>

//         <div class="flex flex-col sm:flex-row gap-4 pt-4">
//           <a href="" routerLink="/services">
//           <button class="group relative bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50">
//             <span class="relative z-10">{{ 'HomePage.Hero.buttonDiscover' | translate }}</span>
//             <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//           </button>
//           </a>

          
//           <a href="" routerLink="/devis">
//             <button class="group relative bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 border-2 border-white/20 hover:border-white/40 backdrop-blur-sm">
//               {{ 'HomePage.Hero.buttonQuote' | translate }}
//               <span class="inline-block ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
//             </button>
//           </a>
//         </div>

//         <!-- Trust indicators -->
//         <div class="flex flex-wrap gap-6 pt-6 items-center text-gray-400 text-sm">
//           <div class="flex items-center gap-2">
//             <svg class="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
//               <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
//             </svg>
//             <span>{{ 'HomePage.Hero.installationCertified' | translate }}</span>
//           </div>
//           <div class="flex items-center gap-2">
//             <svg class="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
//               <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
//             </svg>
//             <span>{{ 'HomePage.Hero.premiumWarranty' | translate }}</span>
//           </div>
//           <div class="flex items-center gap-2">
//             <svg class="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
//               <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
//             </svg>
//             <span>{{ 'HomePage.Hero.Support' | translate }}</span>
//           </div>
//         </div>
//       </div>

//       <!-- Right Side - Feature Cards -->
//       <div class="hidden lg:block relative">
//         <div class="grid grid-cols-2 gap-4">
//           <!-- Feature Card 1 -->
//           <div class="feature-card group">
//             <div class="glass-card p-6 h-full">
//               <div class="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
//                 <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
//                 </svg>
//               </div>
//               <h3 class="text-white font-semibold mb-2">{{ 'HomePage.Hero.security' | translate }}</h3>
//               <p class="text-gray-400 text-sm">{{ 'HomePage.Hero.securityDescription' | translate }}</p>
//             </div>
//           </div>

//           <!-- Feature Card 2 -->
//           <div class="feature-card group mt-8">
//             <div class="glass-card p-6 h-full">
//               <div class="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
//                 <svg class="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
//                 </svg>
//               </div>
//               <h3 class="text-white font-semibold mb-2">{{ 'HomePage.Hero.automation' | translate }}</h3>
//               <p class="text-gray-400 text-sm">{{ 'HomePage.Hero.automationDescription' | translate }}</p>
//             </div>
//           </div>

//           <!-- Feature Card 3 -->
//           <div class="feature-card group">
//             <div class="glass-card p-6 h-full">
//               <div class="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
//                 <svg class="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
//                 </svg>
//               </div>
//               <h3 class="text-white font-semibold mb-2">{{ 'HomePage.Hero.solar' | translate }}</h3>
//               <p class="text-gray-400 text-sm">{{ 'HomePage.Hero.solarDescription' | translate }}</p>
//             </div>
//           </div>

//           <!-- Feature Card 4 -->
//           <div class="feature-card group mt-8">
//             <div class="glass-card p-6 h-full">
//               <div class="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
//                 <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
//                 </svg>
//               </div>
//               <h3 class="text-white font-semibold mb-2">{{ 'HomePage.Hero.finishing' | translate }}</h3>
//               <p class="text-gray-400 text-sm">{{ 'HomePage.Hero.finishingDescription' | translate }}</p>
//             </div>
//           </div>
//         </div>
//       </div>

//     </div>
//   </div>

// </section>
//   `,
//   styles: [`
//     @keyframes float {
//       0%, 100% {
//         transform: translateY(0) translateX(0);
//       }
//       50% {
//         transform: translateY(-20px) translateX(10px);
//       }
//     }

//     @keyframes blob {
//       0%, 100% {
//         transform: translate(0, 0) scale(1);
//       }
//       33% {
//         transform: translate(30px, -50px) scale(1.1);
//       }
//       66% {
//         transform: translate(-20px, 20px) scale(0.9);
//       }
//     }
    
//     @keyframes sparkle {
//       0%, 100% {
//         opacity: 0.2;
//         transform: scale(0.8) rotate(0deg);
//       }
//       50% {
//         opacity: 1;
//         transform: scale(1.2) rotate(180deg);
//       }
//     }

//     .animate-blob {
//       animation: blob 7s infinite;
//     }

//     .animation-delay-2000 {
//       animation-delay: 2s;
//     }

//     .animation-delay-4000 {
//       animation-delay: 4s;
//     }
    
//     .floating-device {
//       position: absolute;
//       animation: float 6s ease-in-out infinite;
//     }

//     .feature-card {
//       animation: float 8s ease-in-out infinite;
//     }

//     .feature-card:nth-child(2) {
//       animation-delay: 1s;
//     }

//     .feature-card:nth-child(3) {
//       animation-delay: 2s;
//     }

//     .feature-card:nth-child(4) {
//       animation-delay: 3s;
//     }
    
//     .glass-card {
//       background: rgba(255, 255, 255, 0.03);
//       backdrop-filter: blur(10px);
//       border: 1px solid rgba(255, 255, 255, 0.1);
//       border-radius: 1rem;
//       transition: all 0.3s ease;
//     }

//     .glass-card:hover {
//       background: rgba(255, 255, 255, 0.05);
//       border-color: rgba(255, 255, 255, 0.2);
//       transform: translateY(-5px);
//       box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
//     }
    
//     .sparkle {
//       position: absolute;
//       color: #60a5fa;
//       font-size: 1.5rem;
//       animation: sparkle 3s ease-in-out infinite;
//       pointer-events: none;
//     }
//   `]
// })
// export class HeroDomotiqueComponent {}